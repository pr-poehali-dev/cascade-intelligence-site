import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const PageNotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);
    document.title = "Страница не найдена — ЧРК «Каскад»";
    return () => {
      if (meta.parentNode) meta.parentNode.removeChild(meta);
      document.title = prevTitle;
    };
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cascade-dark)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(107, 18, 32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 18, 32,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(107, 18, 32,0.18), transparent 60%)",
        }}
      />

      <div style={{ position: "relative", textAlign: "center", maxWidth: 520 }}>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            color: "var(--cascade-red-text)",
            border: "1px solid rgba(107, 18, 32,0.4)",
            padding: "6px 14px",
            display: "inline-block",
            marginBottom: 28,
          }}
        >
          // ОШИБКА МАРШРУТА //
        </div>

        <h1
          style={{
            fontFamily: "Oswald",
            fontWeight: 700,
            fontSize: "clamp(4rem, 14vw, 8rem)",
            lineHeight: 0.9,
            letterSpacing: "0.05em",
            color: "var(--cascade-light)",
            marginBottom: "0.5rem",
          }}
        >
          404
        </h1>

        <div
          style={{
            width: 60,
            height: 2,
            background:
              "linear-gradient(90deg, var(--cascade-gold) 0%, var(--cascade-red) 100%)",
            margin: "0 auto 1.75rem",
          }}
        />

        <p
          style={{
            fontFamily: "Oswald",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            letterSpacing: "0.12em",
            color: "var(--cascade-red-text)",
            fontWeight: 300,
            marginBottom: "1rem",
          }}
        >
          ЗАПРАШИВАЕМЫЙ РАЗДЕЛ НЕДОСТУПЕН
        </p>

        <p
          style={{
            fontFamily: "IBM Plex Sans",
            fontSize: "0.92rem",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          Адрес указан неверно либо раздел выведен из контура. Вернитесь на
          главную или свяжитесь с нами по защищённой линии.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/" className="btn-call btn-lift" style={{ padding: "13px 28px" }}>
            <Icon name="ArrowLeft" size={16} />
            На главную
          </a>
          <a
            href="tel:+79133645748"
            className="btn-cascade-outline btn-lift"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <Icon name="Phone" size={16} />
            Связаться
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
