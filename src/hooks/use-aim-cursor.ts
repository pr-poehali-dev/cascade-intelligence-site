import { useEffect } from "react";

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

export function useAimCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const aim = document.createElement("div");
    aim.id = "aim";
    aim.setAttribute("aria-hidden", "true");
    const dot = document.createElement("span");
    dot.className = "dot";
    aim.appendChild(dot);
    document.body.appendChild(aim);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf = 0;

    const draw = () => {
      aim.style.transform = `translate(${x}px, ${y}px)`;
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(draw);
      const el = e.target as HTMLElement | null;
      const hot = !!el?.closest?.(INTERACTIVE);
      aim.classList.toggle("hot", hot);
    };

    const onLeave = () => {
      aim.style.opacity = "0";
    };
    const onEnter = () => {
      aim.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (raf) cancelAnimationFrame(raf);
      aim.remove();
    };
  }, []);
}

export default useAimCursor;
