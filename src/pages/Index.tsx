import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { TRANSLATIONS, LANGS, type Lang } from "@/data/translations";

type SectionId = "home" | "about" | "services" | "report" | "agent" | "contact";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/b1149f1e-ccbb-4852-b138-f11cd07dfad2/files/65226e92-7c27-4591-a28d-e9eb6ad0495b.jpg";
const PHONE = "+79133645748";
const TELEGRAM = "https://t.me/PIC_STRUNA";
const SEND_URL = "https://functions.poehali.dev/654c4728-371c-4136-b7fe-b9e74c204df3";

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportCategory, setReportCategory] = useState(0);
  const [reportMsg, setReportMsg] = useState("");
  const [reportRegion, setReportRegion] = useState("");
  const [encryptProgress, setEncryptProgress] = useState(0);
  const [encrypting, setEncrypting] = useState(false);
  const [reportError, setReportError] = useState(false);

  const [agentSubmitted, setAgentSubmitted] = useState(false);
  const [agentConsent, setAgentConsent] = useState(false);
  const [agentAlias, setAgentAlias] = useState("");
  const [agentContact, setAgentContact] = useState("");
  const [agentSkills, setAgentSkills] = useState("");
  const [agentMotivation, setAgentMotivation] = useState("");
  const [agentEnc, setAgentEnc] = useState(false);
  const [agentEncProgress, setAgentEncProgress] = useState(0);
  const [agentError, setAgentError] = useState(false);

  const [reportHp, setReportHp] = useState("");
  const [agentHp, setAgentHp] = useState("");
  const formOpenedAt = useRef<number>(Date.now());

  const langRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];
  const isRtl = LANGS.find((l) => l.code === lang)?.rtl ?? false;

  const navItems: { key: SectionId; label: string }[] = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services },
    { key: "report", label: t.nav.report },
    { key: "agent", label: t.nav.agent },
    { key: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [isRtl, lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id as SectionId);
        });
      },
      { threshold: 0.3 }
    );
    (["home", "about", "services", "report", "agent", "contact"] as SectionId[]).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const rateLimitHit = () => {
    const KEY = "cascade_submits";
    const WINDOW = 60000;
    const LIMIT = 3;
    const now = Date.now();
    let stamps: number[] = [];
    try {
      stamps = JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      stamps = [];
    }
    stamps = stamps.filter((ts) => now - ts < WINDOW);
    if (stamps.length >= LIMIT) return true;
    stamps.push(now);
    try {
      localStorage.setItem(KEY, JSON.stringify(stamps));
    } catch {
      /* ignore */
    }
    return false;
  };

  const handleReport = () => {
    if (reportMsg.length < 50) return;
    if (rateLimitHit()) {
      setReportError(true);
      return;
    }
    setEncrypting(true);
    setEncryptProgress(0);
    setReportError(false);

    const sent = fetch(SEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "report",
        category: t.report.categories[reportCategory],
        region: reportRegion,
        message: reportMsg,
        website: reportHp,
        elapsed: (Date.now() - formOpenedAt.current) / 1000,
      }),
    })
      .then((r) => r.ok)
      .catch(() => false);

    const interval = setInterval(() => {
      setEncryptProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          sent.then((ok) => {
            setEncrypting(false);
            if (ok) setReportSubmitted(true);
            else setReportError(true);
          });
          return 100;
        }
        return p + 5;
      });
    }, 70);
  };

  const handleAgent = () => {
    if (!agentConsent || agentAlias.length < 2) return;
    if (rateLimitHit()) {
      setAgentError(true);
      return;
    }
    setAgentEnc(true);
    setAgentEncProgress(0);
    setAgentError(false);

    const sent = fetch(SEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "agent",
        alias: agentAlias,
        contact: agentContact,
        skills: agentSkills,
        motivation: agentMotivation,
        website: agentHp,
        elapsed: (Date.now() - formOpenedAt.current) / 1000,
      }),
    })
      .then((r) => r.ok)
      .catch(() => false);

    const interval = setInterval(() => {
      setAgentEncProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          sent.then((ok) => {
            setAgentEnc(false);
            if (ok) setAgentSubmitted(true);
            else setAgentError(true);
          });
          return 100;
        }
        return p + 5;
      });
    }, 70);
  };

  const Tag = ({ children }: { children: React.ReactNode }) => (
    <span className="cascade-tag" style={{ marginBottom: 16, display: "inline-block" }}>{children}</span>
  );

  return (
    <div style={{ background: "var(--cascade-dark)", color: "var(--cascade-light)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* SECURE RIBBON */}
      <div className="secure-ribbon" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 51, height: 28 }}>
        <Icon name="ShieldCheck" size={12} />
        <span>{t.secure}</span>
      </div>

      {/* NAVBAR */}
      <header style={{
        position: "fixed", top: 28, left: 0, right: 0, zIndex: 50,
        background: "rgba(10,10,10,0.96)", borderBottom: "1px solid var(--cascade-line)",
        backdropFilter: "blur(8px)", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 1.5rem",
      }} className="pad-section">
        <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{ width: 34, height: 34, background: "var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Oswald", fontWeight: 700, fontSize: 12, color: "white" }}>ЧРК</div>
          <span style={{ fontFamily: "Oswald", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.22em", color: "var(--cascade-light)" }}>КАСКАД</span>
        </button>

        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => scrollTo(item.key)} className={`nav-link ${activeSection === item.key ? "active" : ""}`} style={{ background: "none", border: "none", cursor: "pointer" }}>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Lang dropdown */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button className={`lang-btn ${langOpen ? "active" : ""}`} onClick={() => setLangOpen(!langOpen)} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name="Globe" size={13} />
              {LANGS.find((l) => l.code === lang)?.label}
              <Icon name="ChevronDown" size={12} />
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {LANGS.map((l) => (
                  <button key={l.code} className={`lang-option ${lang === l.code ? "active" : ""}`} onClick={() => { setLang(l.code); setLangOpen(false); }}>
                    <span>{l.native}</span>
                    <span className="code">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href={`tel:${PHONE}`} className="lang-btn" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <Icon name="Phone" size={13} />
          </a>

          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--cascade-light)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 49, background: "rgba(10,10,10,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, paddingTop: 88 }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => scrollTo(item.key)} className="nav-link" style={{ fontSize: "1.2rem", background: "none", border: "none", cursor: "pointer" }}>{item.label}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: 88 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.15) grayscale(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(139,26,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,26,26,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", inset: 0, background: isRtl ? "radial-gradient(circle at 80% 50%, rgba(139,26,26,0.28), transparent 55%)" : "radial-gradient(circle at 20% 50%, rgba(139,26,26,0.28), transparent 55%)" }} />
        <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 200px rgba(0,0,0,0.9)" }} />
        <div className="hero-edge-pulse" style={{ position: "absolute", [isRtl ? "right" : "left"]: 0, top: 0, bottom: 0, width: 4, background: "var(--cascade-red)" }} />

        <div className="pad-section" style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <div className="animate-fade-in-up" style={{ opacity: 0 }}>
            <Tag>{t.hero.tag}</Tag>
          </div>
          <h1 className="animate-fade-in-up cascade-line-anim" style={{
            fontFamily: "Oswald", fontWeight: 700, lineHeight: 0.88,
            fontSize: "clamp(3.5rem, 13vw, 10rem)", letterSpacing: "0.05em", color: "white",
            animationDelay: "0.2s", opacity: 0, marginBottom: "0.75rem",
          }}>
            {t.hero.title}
          </h1>
          <p className="animate-fade-in-up" style={{
            fontFamily: "Oswald", fontSize: "clamp(0.9rem, 2vw, 1.3rem)", letterSpacing: "0.2em",
            color: "var(--cascade-red)", fontWeight: 300, marginTop: "1.5rem", marginBottom: "1.5rem",
            animationDelay: "0.4s", opacity: 0,
          }}>
            {t.hero.subtitle}
          </p>
          <p className="animate-fade-in-up" style={{
            fontFamily: "IBM Plex Sans", fontSize: "0.95rem", color: "#9CA3AF", lineHeight: 1.8,
            maxWidth: 560, animationDelay: "0.6s", opacity: 0, marginBottom: "2.5rem",
          }}>
            {t.hero.desc}
          </p>
          <div className="animate-fade-in-up" style={{ display: "flex", gap: 16, flexWrap: "wrap", animationDelay: "0.8s", opacity: 0 }}>
            <a href={`tel:${PHONE}`} className="btn-call cta-pulse" style={{ padding: "14px 32px" }}><Icon name="Phone" size={17} />{t.contact.callBtn}</a>
            <button className="btn-cascade-outline" onClick={() => scrollTo("services")}>{t.hero.btn1}</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem 0", background: "var(--cascade-charcoal)", position: "relative" }}>
        <div className="pad-section grid-2" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", position: "relative" }}>
          <div>
            <Tag>{t.about.tag}</Tag>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>{t.about.title}</h2>
            <p className="red-line-left" style={{ color: "#9CA3AF", lineHeight: 1.85, fontSize: "0.92rem", marginBottom: "1.2rem" }}>{t.about.p1}</p>
            <p style={{ color: "#6B7280", lineHeight: 1.85, fontSize: "0.92rem" }}>{t.about.p2}</p>
          </div>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {t.about.stats.map((s, i) => (
              <div key={i} className="cascade-card" style={{ padding: "1.6rem" }}>
                <div style={{ fontFamily: "Oswald", fontSize: "2.6rem", fontWeight: 700, color: "var(--cascade-red)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "IBM Plex Sans", fontSize: "0.78rem", color: "#6B7280", marginTop: "0.5rem", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELITE */}
      <section style={{ position: "relative", padding: "5rem 0", background: "#080808", overflow: "hidden", borderTop: "1px solid var(--cascade-line)", borderBottom: "1px solid var(--cascade-line)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 22px, rgba(139,26,26,0.06) 22px, rgba(139,26,26,0.06) 24px)" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, [isRtl ? "right" : "left"]: 0, width: 5, background: "var(--cascade-red)" }} />
        <div className="pad-section" style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <span className="cascade-tag" style={{ marginBottom: 24, display: "inline-block" }}>{t.elite.tag}</span>
          <h2 style={{ fontFamily: "Oswald", fontWeight: 700, fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "0.02em", color: "white", marginBottom: "1.5rem", maxWidth: 900 }}>
            {t.elite.line1}
          </h2>
          <p className="red-line-left" style={{ color: "#9CA3AF", fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)", lineHeight: 1.8, maxWidth: 720 }}>
            {t.elite.line2}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "6rem 0", background: "var(--cascade-dark)" }}>
        <div className="pad-section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <Tag>{t.services.tag}</Tag>
            <div className="section-divider" style={{ margin: "0 auto" }} />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, letterSpacing: "0.08em", marginTop: 16 }}>{t.services.title}</h2>
          </div>
          <div className="grid-services" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {t.services.items.map((s, i) => (
              <div key={i} className="cascade-card" style={{ padding: "2rem" }}>
                <div style={{ width: 52, height: 52, marginBottom: 24, background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={s.icon} fallback="Circle" size={22} style={{ color: "var(--cascade-red)" }} />
                </div>
                <h3 style={{ fontFamily: "Oswald", fontSize: "1.05rem", fontWeight: 500, letterSpacing: "0.08em", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.87rem", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* GEO */}
          <div style={{ marginTop: 80 }}>
            <div style={{ textAlign: "center" }}>
              <Tag>{t.geo.tag}</Tag>
              <div className="section-divider" style={{ margin: "0 auto" }} />
              <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "0.08em", marginTop: 16, marginBottom: 16 }}>{t.geo.title}</h2>
              <p style={{ color: "#9CA3AF", fontSize: "1.05rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.8 }}>{t.geo.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ padding: "6rem 0", background: "var(--cascade-charcoal)", position: "relative", borderTop: "1px solid var(--cascade-line)" }}>
        <div className="pad-section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 48 }}>
            <Tag>{t.principles.tag}</Tag>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 700, letterSpacing: "0.06em" }}>{t.principles.title}</h2>
          </div>
          <div className="grid-services" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            {t.principles.items.map((p, i) => (
              <div key={i} className="cascade-card" style={{ padding: "1.8rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, [isRtl ? "right" : "left"]: 0, width: 3, height: "100%", background: "var(--cascade-red)" }} />
                <div style={{ width: 48, height: 48, marginBottom: 18, background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={p.icon} fallback="ShieldCheck" size={20} style={{ color: "var(--cascade-red)" }} />
                </div>
                <h3 style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.06em", marginBottom: "0.6rem", color: "var(--cascade-light)" }}>{p.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT */}
      <section id="agent" style={{ padding: "6rem 0", background: "var(--cascade-dark)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.08) grayscale(0.6)" }} />
        <div className="pad-section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Tag>{t.agent.tag}</Tag>
              <div className="section-divider" />
              <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>{t.agent.title}</h2>
              <p className="red-line-left" style={{ color: "#9CA3AF", lineHeight: 1.85, fontSize: "0.95rem" }}>{t.agent.desc}</p>

              <div style={{ marginTop: 32 }}>
                <div style={{ fontFamily: "Oswald", fontSize: "0.78rem", letterSpacing: "0.2em", color: "var(--cascade-red)", marginBottom: 16 }}>{t.safety.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.safety.items.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <Icon name={item.icon} fallback="ShieldCheck" size={17} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
                      <p style={{ color: "#9CA3AF", fontSize: "0.82rem", lineHeight: 1.7 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {!agentSubmitted ? (
              <div className="cascade-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", background: "rgba(139,26,26,0.07)", border: "1px solid rgba(139,26,26,0.22)", [isRtl ? "borderRight" : "borderLeft"]: "3px solid var(--cascade-red)" }}>
                  <Icon name="ShieldCheck" size={18} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ color: "#9CA3AF", fontSize: "0.8rem", lineHeight: 1.65 }}>{t.agent.secure}</p>
                </div>
                <input className="cascade-input" placeholder={t.agent.fields.alias} value={agentAlias} onChange={(e) => setAgentAlias(e.target.value)} />
                <input className="cascade-input" placeholder={t.agent.fields.contact} value={agentContact} onChange={(e) => setAgentContact(e.target.value)} />
                <input className="cascade-input" placeholder={t.agent.fields.skills} value={agentSkills} onChange={(e) => setAgentSkills(e.target.value)} />
                <textarea className="cascade-input" rows={4} placeholder={t.agent.fields.motivation} value={agentMotivation} onChange={(e) => setAgentMotivation(e.target.value)} style={{ resize: "vertical" }} />
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", color: "#9CA3AF", fontSize: "0.82rem", lineHeight: 1.5 }}>
                  <input type="checkbox" checked={agentConsent} onChange={(e) => setAgentConsent(e.target.checked)} style={{ accentColor: "var(--cascade-red)", marginTop: 3, flexShrink: 0 }} />
                  {t.agent.consent}
                </label>
                {agentError && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 14, background: "rgba(139,26,26,0.1)", border: "1px solid var(--cascade-red)" }}>
                    <Icon name="TriangleAlert" size={18} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ color: "#D1D5DB", fontSize: "0.82rem", lineHeight: 1.6 }}>{t.report.error}</p>
                  </div>
                )}
                {agentEnc && (
                  <div>
                    <div style={{ fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--cascade-red)", marginBottom: 6 }}>{t.report.encrypting} {agentEncProgress}%</div>
                    <div style={{ height: 2, background: "var(--cascade-line)" }}>
                      <div style={{ height: "100%", background: "var(--cascade-red)", width: `${agentEncProgress}%`, transition: "width 0.1s" }} />
                    </div>
                  </div>
                )}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={agentHp} onChange={(e) => setAgentHp(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                <button className="btn-cascade" onClick={handleAgent} disabled={!agentConsent || agentAlias.length < 2 || agentEnc} style={{ opacity: !agentConsent || agentAlias.length < 2 ? 0.35 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%" }}>
                  <Icon name="Fingerprint" size={15} />
                  {t.agent.fields.btn}
                </button>
              </div>
            ) : (
              <div className="cascade-card" style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
                <div className="pulse-red" style={{ width: 64, height: 64, background: "rgba(139,26,26,0.12)", border: "1px solid var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="Fingerprint" size={28} style={{ color: "var(--cascade-red)" }} />
                </div>
                <p style={{ fontFamily: "Oswald", fontSize: "1.1rem", letterSpacing: "0.1em" }}>{t.agent.sent}</p>
                <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.75 }}>{t.agent.sentDesc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "5.5rem 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.12) grayscale(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(139,26,26,0.35), rgba(10,10,10,0.85))" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(139,26,26,0.05) 18px, rgba(139,26,26,0.05) 19px)" }} />
        <div className="pad-section" style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, padding: "6px 14px", border: "1px solid var(--cascade-red)", background: "rgba(139,26,26,0.15)" }}>
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cascade-red)" }} />
            <span style={{ fontFamily: "Oswald", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--cascade-light)" }}>{t.cta.note}</span>
          </div>
          <h2 style={{ fontFamily: "Oswald", fontWeight: 700, fontSize: "clamp(1.8rem, 5vw, 3.4rem)", letterSpacing: "0.04em", lineHeight: 1.05, color: "white", marginBottom: "1.2rem" }}>{t.cta.title}</h2>
          <p style={{ color: "#D1D5DB", fontSize: "1rem", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 2.5rem" }}>{t.cta.desc}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={`tel:${PHONE}`} className="btn-call cta-pulse" style={{ fontSize: "1rem", padding: "16px 36px" }}><Icon name="Phone" size={18} />{t.cta.callBtn}</a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-mail" style={{ padding: "16px 36px" }}><Icon name="Send" size={18} />{t.cta.tgBtn}</a>
          </div>
        </div>
      </section>

      {/* LEGAL STATUS */}
      <section style={{ padding: "6rem 0", background: "var(--cascade-charcoal)", position: "relative", borderTop: "1px solid var(--cascade-line)" }}>
        <div className="pad-section grid-2" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <Tag>{t.legalSection.tag}</Tag>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "0.05em", marginBottom: "1.5rem" }}>{t.legalSection.title}</h2>
            <p className="red-line-left" style={{ color: "#9CA3AF", lineHeight: 1.85, fontSize: "0.92rem", marginBottom: "1.2rem" }}>{t.legalSection.p1}</p>
            <p style={{ color: "#6B7280", lineHeight: 1.85, fontSize: "0.92rem" }}>{t.legalSection.p2}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {t.legalSection.points.map((p, i) => (
              <div key={i} className="cascade-card" style={{ padding: "1.1rem 1.3rem", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 42, height: 42, background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={p.icon} fallback="ShieldCheck" size={18} style={{ color: "var(--cascade-red)" }} />
                </div>
                <span style={{ fontSize: "0.9rem", color: "var(--cascade-light)", lineHeight: 1.5 }}>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "6rem 0", background: "var(--cascade-dark)" }}>
        <div className="pad-section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 40 }}>
            <Tag>{t.contact.tag}</Tag>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{t.contact.title}</h2>
            <p style={{ color: "#6B7280", fontSize: "0.88rem" }}>{t.contact.desc}</p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`tel:${PHONE}`} className="btn-call"><Icon name="Phone" size={16} />{t.contact.callBtn}</a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-mail"><Icon name="Send" size={16} />{t.contact.tgBtn}</a>
          </div>
        </div>
      </section>

      {/* REPORT */}
      <section id="report" style={{ padding: "6rem 0", background: "var(--cascade-charcoal)" }}>
        <div className="pad-section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 36 }}>
            <Tag>{t.report.tag}</Tag>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.3rem, 2.2vw, 2rem)", fontWeight: 600, letterSpacing: "0.05em", maxWidth: 700 }}>{t.report.title}</h2>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, marginBottom: 32, background: "rgba(139,26,26,0.07)", border: "1px solid rgba(139,26,26,0.22)", [isRtl ? "borderRight" : "borderLeft"]: "4px solid var(--cascade-red)" }}>
            <Icon name="ShieldCheck" size={20} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: "#9CA3AF", fontSize: "0.87rem", lineHeight: 1.75 }}>{t.report.warning}</p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: "Oswald", fontSize: "0.78rem", letterSpacing: "0.2em", color: "var(--cascade-red)", marginBottom: 18 }}>{t.safety.title}</div>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {t.safety.items.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 16, background: "var(--cascade-dark)", border: "1px solid var(--cascade-line)" }}>
                  <Icon name={item.icon} fallback="ShieldCheck" size={18} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ color: "#9CA3AF", fontSize: "0.82rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {!reportSubmitted ? (
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 880 }}>
              <div>
                <label style={{ display: "block", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em", color: "#6B7280", marginBottom: 10 }}>{t.report.form.category}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.report.categories.map((cat, i) => (
                    <button key={i} onClick={() => setReportCategory(i)} style={{
                      textAlign: isRtl ? "right" : "left", padding: "10px 16px",
                      background: reportCategory === i ? "rgba(139,26,26,0.14)" : "var(--cascade-charcoal)",
                      border: `1px solid ${reportCategory === i ? "var(--cascade-red)" : "var(--cascade-line)"}`,
                      color: reportCategory === i ? "var(--cascade-light)" : "#6B7280",
                      fontFamily: "IBM Plex Sans", fontSize: "0.85rem", cursor: "pointer", transition: "all 0.2s",
                    }}>{cat}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em", color: "#6B7280", marginBottom: 8 }}>{t.report.form.region}</label>
                  <input className="cascade-input" value={reportRegion} onChange={(e) => setReportRegion(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em", color: "#6B7280", marginBottom: 8 }}>{t.report.form.message}</label>
                  <textarea className="cascade-input" rows={6} value={reportMsg} onChange={(e) => setReportMsg(e.target.value)} style={{ resize: "vertical" }} />
                  <div style={{ fontSize: "0.72rem", color: reportMsg.length >= 50 ? "var(--cascade-red)" : "#374151", marginTop: 4 }}>{reportMsg.length} / 50</div>
                </div>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={reportHp} onChange={(e) => setReportHp(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                <p style={{ fontSize: "0.73rem", color: "#4B5563", fontStyle: "italic" }}>{t.report.form.hint}</p>
                {reportError && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 14, background: "rgba(139,26,26,0.1)", border: "1px solid var(--cascade-red)" }}>
                    <Icon name="TriangleAlert" size={18} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ color: "#D1D5DB", fontSize: "0.82rem", lineHeight: 1.6 }}>{t.report.error}</p>
                  </div>
                )}
                {encrypting && (
                  <div>
                    <div style={{ fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--cascade-red)", marginBottom: 6 }}>{t.report.encrypting} {encryptProgress}%</div>
                    <div style={{ height: 2, background: "var(--cascade-line)" }}>
                      <div style={{ height: "100%", background: "var(--cascade-red)", width: `${encryptProgress}%`, transition: "width 0.1s" }} />
                    </div>
                  </div>
                )}
                <button className="btn-cascade" onClick={handleReport} disabled={reportMsg.length < 50 || encrypting} style={{ opacity: reportMsg.length < 50 ? 0.35 : 1, width: "fit-content", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon name="Lock" size={13} />
                  {t.report.form.btn}
                </button>
              </div>
            </div>
          ) : (
            <div className="cascade-card" style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center", maxWidth: 440 }}>
              <div className="pulse-red" style={{ width: 64, height: 64, background: "rgba(139,26,26,0.12)", border: "1px solid var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="ShieldCheck" size={28} style={{ color: "var(--cascade-red)" }} />
              </div>
              <p style={{ fontFamily: "Oswald", fontSize: "1.1rem", letterSpacing: "0.1em" }}>{t.report.sent}</p>
              <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.75 }}>{t.report.sentDesc}</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060606", borderTop: "1px solid var(--cascade-line)", padding: "2.5rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto 1.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, paddingBottom: "1.75rem", borderBottom: "1px solid var(--cascade-line)", textAlign: "center" }}>
          <Icon name="Scale" size={14} style={{ color: "var(--cascade-red)", flexShrink: 0 }} />
          <p style={{ fontSize: "0.78rem", color: "#9CA3AF", letterSpacing: "0.02em", fontStyle: "italic", lineHeight: 1.6 }}>{t.footer.hint}</p>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 28, background: "var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Oswald", fontWeight: 700, fontSize: 11, color: "white" }}>ЧРК</div>
            <span style={{ fontFamily: "Oswald", fontSize: "0.8rem", letterSpacing: "0.22em", color: "#4B5563" }}>КАСКАД</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.72rem", color: "#374151" }}>{t.footer.rights}</p>
            <p style={{ fontSize: "0.68rem", color: "#2D2D2D", marginTop: 2 }}>{t.footer.legal}</p>
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {navItems.slice(0, 4).map((item) => (
              <button key={item.key} onClick={() => scrollTo(item.key)} style={{ fontFamily: "Oswald", fontSize: "0.68rem", letterSpacing: "0.14em", color: "#374151", background: "none", border: "none", cursor: "pointer" }}>{item.label}</button>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating call button */}
      <a href={`tel:${PHONE}`} className="fab-call" aria-label="call">
        <Icon name="Phone" size={22} />
      </a>
    </div>
  );
}