import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function parseValue(value: string) {
  const match = value.match(/(\d[\d\s.,]*)/);
  if (!match) return null;
  const numStr = match[1].replace(/[\s,]/g, "");
  const num = parseFloat(numStr);
  if (Number.isNaN(num)) return null;
  const idx = value.indexOf(match[1]);
  return {
    num,
    prefix: value.slice(0, idx),
    suffix: value.slice(idx + match[1].length),
    decimals: numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0,
  };
}

export default function CountUp({ value, duration = 1400, className, style }: CountUpProps) {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = parsed.num * eased;
        setDisplay(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
