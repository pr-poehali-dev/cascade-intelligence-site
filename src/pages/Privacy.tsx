import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const OPERATOR = "ЧРК «Каскад»";
const UPDATED = "21 октября 2026 г.";

const H = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <h2 id={id} style={{ fontFamily: "Oswald", fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.04em", color: "var(--cascade-light)", margin: "2.6rem 0 1rem", scrollMarginTop: 24 }}>
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: "0 0 0.9rem" }}>{children}</p>
);

const Privacy = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Политика конфиденциальности — ЧРК «Каскад»";
    window.scrollTo(0, 0);
    if (window.location.hash) {
      setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView(), 50);
    }
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="legal-page" style={{ minHeight: "100vh", background: "var(--cascade-dark)", color: "var(--text-label)" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "2.5rem 1.5rem 5rem", fontFamily: "IBM Plex Sans", fontSize: "0.95rem", lineHeight: 1.8 }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--cascade-red-text)", textDecoration: "none", fontFamily: "Oswald", letterSpacing: "0.12em", fontSize: "0.8rem", marginBottom: "2.5rem" }}>
          <Icon name="ArrowLeft" size={16} />
          НА ГЛАВНУЮ
        </Link>

        <h1 style={{ fontFamily: "Oswald", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, letterSpacing: "0.03em", color: "var(--cascade-light)", lineHeight: 1.15, marginBottom: 12 }}>
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2rem" }}>Редакция от {UPDATED}</p>

        <P>
          Этот документ объясняет, какие данные собирает сайт {OPERATOR} (далее — «мы»), зачем, как долго хранит и как вы можете
          ими управлять. Мы исходим из Федерального закона № 152-ФЗ «О персональных данных» и собираем ровно столько, сколько нужно,
          чтобы вам ответить.
        </P>

        <H>1. Какие данные мы получаем</H>
        <P><b>Форма «Сотрудничество».</b> Имя или псевдоним, способ связи, сведения об опыте и специализации, текст сообщения — то, что вы впишете сами.</P>
        <P><b>Форма «Сообщить».</b> Категория, регион и текст. Имени и контактов форма не требует — если вы их не напишете, мы их не узнаем.</P>
        <P><b>Звонок, Telegram, почта.</b> Номер телефона или имя аккаунта и содержание переписки — в той мере, в какой вы их сообщите.</P>
        <P><b>Технические данные.</b> Форма не записывает ваш IP-адрес. Для защиты от спама на 1 час сохраняется только его необратимый хеш — восстановить по нему адрес нельзя. Яндекс Метрика собирает обезличенную статистику посещений (страницы, устройство, источник перехода) с помощью cookie. Запись действий на экране (Вебвизор) и карта кликов отключены.</P>

        <H>2. Зачем</H>
        <P>Чтобы ответить на ваше обращение, оценить задачу и, если вы решите работать с нами, — заключить и исполнить договор. Статистика нужна, чтобы понимать, удобен ли сайт. Мы не используем ваши данные для рекламы и не продаём их.</P>

        <H>3. Как долго храним</H>
        <P>Сообщения из форм не хранятся в базе сайта: они сразу пересылаются на защищённую почту ответственного сотрудника. Переписка хранится, пока нужна для работы по обращению, и не дольше 1 года с последнего контакта, если закон не требует иного. Хеш для антиспама удаляется через 1 час.</P>

        <H>4. Кому передаём</H>
        <P>Никому из третьих лиц — кроме случаев, прямо предусмотренных законом (например, по запросу суда). Технически данные проходят через подрядчиков, которые обеспечивают работу сайта: хостинг и облачные функции, почтовый сервис Яндекса, Яндекс Метрику. Они обрабатывают данные по нашему поручению и на территории РФ.</P>

        <H>5. Ваши права</H>
        <P>Вы можете узнать, какие ваши данные у нас есть, потребовать их исправить или удалить, отозвать согласие. Напишите в Telegram <a href="https://t.me/PIC_STRUNA" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cascade-red-text)" }}>@PIC_STRUNA</a> или позвоните — ответим в течение 10 рабочих дней. Если считаете, что ваши права нарушены, вы вправе обратиться в Роскомнадзор.</P>

        <H>6. Чего мы не делаем</H>
        <P>Не принимаем и не используем сведения, которые составляют государственную, служебную, банковскую, налоговую, врачебную тайну или тайну связи. Не собираем информацию о частной жизни людей без их согласия. Если такие сведения пришлют через форму — мы их не используем и удаляем.</P>

        <H>7. Согласие</H>
        <P>Текст согласия на обработку персональных данных оформлен отдельным документом: <Link to="/consent" style={{ color: "var(--cascade-red-text)" }}>Согласие на обработку персональных данных</Link>.</P>

        <p style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cascade-line)", color: "var(--text-muted)", fontSize: "0.82rem" }}>
          Мы можем обновлять этот документ. Актуальная редакция всегда на этой странице.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
