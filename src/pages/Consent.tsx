import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const OPERATOR = "ЧРК «Каскад»";
const UPDATED = "21 октября 2026 г.";

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: "0 0 0.9rem" }}>{children}</p>
);

const Consent = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Согласие на обработку персональных данных — ЧРК «Каскад»";
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
          СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2rem" }}>Редакция от {UPDATED}</p>

        <P>
          Отправляя форму «Сотрудничество» и отмечая галочку согласия, я свободно, своей волей и в своём интересе даю {OPERATOR} согласие
          на обработку персональных данных, которые сам указал в форме: имени или псевдонима, контактных данных, сведений об опыте,
          текста сообщения.
        </P>
        <P>Цель — рассмотрение моего обращения и связь со мной. Действия — сбор, запись, хранение, использование, удаление, в том числе автоматизированно. Срок — до достижения цели, но не более 1 года, или до отзыва согласия.</P>
        <P>Согласие можно отозвать в любой момент, написав в Telegram или позвонив по номеру, указанному на сайте.</P>

        <P>Как мы обращаемся с данными, описано в <Link to="/privacy" style={{ color: "var(--cascade-red-text)" }}>Политике конфиденциальности</Link>.</P>
        <p style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cascade-line)", color: "var(--text-muted)", fontSize: "0.82rem" }}>
          Мы можем обновлять этот документ. Актуальная редакция всегда на этой странице.
        </p>
      </div>
    </div>
  );
};

export default Consent;
