// Модуль защиты клиентской части: усложняет изучение, копирование и отладку.
// Работает только в production (в dev не мешает разработке).

const isEditable = (el: EventTarget | null): boolean => {
  const node = el as HTMLElement | null;
  if (!node) return false;
  const tag = node.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    node.isContentEditable === true
  );
};

export function initShield(): void {
  if (typeof window === "undefined") return;

  const isProd = import.meta.env.PROD;
  if (!isProd) return;

  // 1. Anti-clickjacking: если сайт открыт во фрейме на чужом домене — выходим наверх
  try {
    if (window.top && window.self !== window.top) {
      const topOrigin = document.referrer ? new URL(document.referrer).origin : "";
      if (topOrigin && topOrigin !== window.location.origin) {
        window.top.location.href = window.location.href;
      }
    }
  } catch {
    // cross-origin frame — принудительно вырываемся
    try {
      document.body.style.display = "none";
      window.location.href = window.location.href;
    } catch { /* ignore */ }
  }

  // 2. Блокировка контекстного меню вне полей ввода
  document.addEventListener(
    "contextmenu",
    (e) => {
      if (!isEditable(e.target)) e.preventDefault();
    },
    { capture: true }
  );

  // 3. Блокировка горячих клавиш инструментов разработчика и сохранения страницы
  document.addEventListener(
    "keydown",
    (e) => {
      const key = (e.key || "").toLowerCase();
      const inField = isEditable(e.target);

      // F12 — DevTools
      if (key === "f12") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd+Shift+I / J / C — DevTools, инспектор, консоль
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(key)) {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd+U — исходный код
      if ((e.ctrlKey || e.metaKey) && key === "u") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd+S — сохранить страницу
      if ((e.ctrlKey || e.metaKey) && key === "s") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd+P — печать (часто используют для выгрузки)
      if ((e.ctrlKey || e.metaKey) && key === "p") {
        e.preventDefault();
        return;
      }
      // Копирование/вырезание общего контента разрешаем только внутри полей ввода
      if ((e.ctrlKey || e.metaKey) && ["c", "x"].includes(key) && !inField) {
        e.preventDefault();
      }
    },
    { capture: true }
  );

  // 4. Запрет выделения и копирования произвольного текста (кроме полей ввода)
  document.addEventListener("copy", (e) => {
    if (!isEditable(e.target)) e.preventDefault();
  });
  document.addEventListener("cut", (e) => {
    if (!isEditable(e.target)) e.preventDefault();
  });
  document.addEventListener("dragstart", (e) => {
    const node = e.target as HTMLElement;
    if (node && node.tagName === "IMG") e.preventDefault();
  });

  // 5. Детектор открытых DevTools: при обнаружении чистим консоль
  let devtoolsOpen = false;
  const threshold = 170;
  const detect = () => {
    const widthGap = window.outerWidth - window.innerWidth > threshold;
    const heightGap = window.outerHeight - window.innerHeight > threshold;
    const opened = widthGap || heightGap;
    if (opened && !devtoolsOpen) {
      devtoolsOpen = true;
    }
    if (opened) {
      try {
        // Очищаем консоль, чтобы усложнить чтение логов
        // eslint-disable-next-line no-console
        console.clear();
      } catch { /* ignore */ }
    } else {
      devtoolsOpen = false;
    }
  };
  setInterval(detect, 1200);

  // 6. Предупреждение в консоли (социальная защита от самокопирования / скам-инъекций)
  try {
    const style = "color:#c0392b;font-size:22px;font-weight:bold;font-family:sans-serif";
    // eslint-disable-next-line no-console
    console.log("%cСТОП!", style);
    // eslint-disable-next-line no-console
    console.log(
      "%cЭто закрытая зона. Вставка любого кода здесь может скомпрометировать вашу анонимность и данные. Если вам сказали что-то сюда вставить — это попытка мошенничества.",
      "color:#eef0f3;font-size:13px;font-family:sans-serif"
    );
  } catch { /* ignore */ }
}
