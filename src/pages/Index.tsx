import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const TRANSLATIONS = {
  ru: {
    nav: {
      home: "Главная",
      about: "О компании",
      services: "Услуги",
      contact: "Контакты",
      report: "Сообщить о преступлении",
      wanted: "База розыска",
    },
    hero: {
      tag: "Частная Разведывательная Компания",
      title: "КАСКАД",
      subtitle: "Профессиональная защита. Разведка. Безопасность.",
      desc: "Комплексные решения в области детективной деятельности, корпоративной безопасности и оперативной разведки для физических лиц, бизнеса и государственных структур.",
      btn1: "Наши услуги",
      btn2: "Связаться",
    },
    about: {
      tag: "О компании",
      title: "ПРОФЕССИОНАЛИЗМ. КОНФИДЕНЦИАЛЬНОСТЬ. РЕЗУЛЬТАТ.",
      p1: "ЧРК «Каскад» — ведущая частная разведывательная компания, специализирующаяся на широком спектре услуг в области безопасности, разведки и детективной деятельности.",
      p2: "Наши специалисты — эксперты с многолетним опытом в правоохранительных органах, спецслужбах и силовых структурах. Мы работаем в интересах частных лиц, коммерческих организаций, международных структур и государственного сектора.",
      stats: [
        { num: "15+", label: "Лет на рынке" },
        { num: "500+", label: "Завершённых операций" },
        { num: "40+", label: "Стран присутствия" },
        { num: "100%", label: "Конфиденциальность" },
      ],
    },
    services: {
      tag: "Услуги",
      title: "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ",
      items: [
        {
          icon: "Search",
          title: "Детективные услуги",
          desc: "Розыск людей и имущества, слежка и наблюдение, проверка контрагентов, сбор доказательной базы для физических и юридических лиц.",
        },
        {
          icon: "Shield",
          title: "Обеспечение безопасности",
          desc: "Личная охрана, освобождение заложников, переговоры в кризисных ситуациях, освобождение захваченных судов и силовые операции любой сложности.",
        },
        {
          icon: "Eye",
          title: "Бизнес-разведка",
          desc: "Конкурентная разведка, OSINT-анализ, проверка деловых партнёров, выявление коррупции и корпоративного мошенничества.",
        },
        {
          icon: "Globe",
          title: "Государственный сектор",
          desc: "Специальные операции в интересах Российской Федерации, взаимодействие с профильными ведомствами, информационная поддержка.",
        },
        {
          icon: "Users",
          title: "Международные организации",
          desc: "Сопровождение международных миссий, оперативная поддержка в зонах конфликтов, аналитические доклады и оценка рисков.",
        },
        {
          icon: "Lock",
          title: "Кибербезопасность",
          desc: "Защита корпоративных данных, выявление утечек информации, расследование кибератак и цифровая разведка.",
        },
      ],
    },
    contact: {
      tag: "Контакты",
      title: "СВЯЗАТЬСЯ С НАМИ",
      desc: "Все обращения обрабатываются конфиденциально. Для срочных ситуаций — круглосуточная линия.",
      form: {
        name: "Имя / Организация",
        contact: "Телефон или защищённый email",
        subject: "Тема обращения",
        message: "Краткое описание ситуации",
        btn: "Отправить запрос",
      },
      info: [
        { icon: "Phone", label: "Телефон", value: "+7 (800) 000-00-00" },
        { icon: "Mail", label: "Email", value: "info@cascade-intel.ru" },
        { icon: "MapPin", label: "Москва", value: "Конфиденциально" },
        { icon: "Clock", label: "Режим работы", value: "24/7" },
      ],
    },
    report: {
      tag: "Анонимная связь",
      title: "СООБЩИТЬ О ПРЕСТУПЛЕНИИ ИЛИ ТЕРРОРИЗМЕ",
      warning:
        "Ваше сообщение будет зашифровано с использованием AES-256. IP-адрес и метаданные не сохраняются. Обеспечивается полная анонимность источника.",
      categories: [
        "Терроризм и экстремизм",
        "Тяжкие преступления",
        "Коррупция и мошенничество",
        "Информация о разыскиваемых лицах",
        "Угроза государственной безопасности",
        "Иное",
      ],
      form: {
        category: "Категория сообщения",
        region: "Регион / страна",
        message: "Подробное описание (минимум 50 символов)",
        btn: "Отправить анонимно",
        hint: "Не указывайте личные данные, если хотите сохранить анонимность",
      },
    },
    wanted: {
      tag: "База данных",
      title: "ЛЮДИ В РОЗЫСКЕ",
      search: "Поиск по имени, статье или региону...",
      filters: ["Все", "Федеральный", "Международный", "Особо опасный"],
      persons: [
        { name: "Иванов А.Г.", dob: "1978", article: "ст. 159 УК РФ", region: "Москва", level: "Федеральный", reward: "500 000 ₽" },
        { name: "Петров К.В.", dob: "1985", article: "ст. 105 УК РФ", region: "СПб", level: "Особо опасный", reward: "2 000 000 ₽" },
        { name: "Сидорова Н.Д.", dob: "1990", article: "ст. 228 УК РФ", region: "Краснодар", level: "Региональный", reward: "100 000 ₽" },
        { name: "Орлов М.Е.", dob: "1972", article: "ст. 210 УК РФ", region: "Международный", level: "Международный", reward: "5 000 000 ₽" },
      ],
    },
    footer: {
      rights: "© 2024 ЧРК «Каскад». Все права защищены.",
      legal: "Лицензированная деятельность. Все операции в рамках законодательства РФ.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      report: "Report a Crime",
      wanted: "Wanted Database",
    },
    hero: {
      tag: "Private Intelligence Company",
      title: "CASCADE",
      subtitle: "Professional Protection. Intelligence. Security.",
      desc: "Comprehensive solutions in detective operations, corporate security and tactical intelligence for individuals, businesses and government agencies.",
      btn1: "Our Services",
      btn2: "Contact Us",
    },
    about: {
      tag: "About",
      title: "PROFESSIONALISM. CONFIDENTIALITY. RESULTS.",
      p1: "PIC «Cascade» is a leading private intelligence company specializing in a wide range of security, intelligence and detective services.",
      p2: "Our specialists are experts with years of experience in law enforcement, intelligence agencies and security forces. We serve private individuals, commercial organizations, international bodies and the public sector.",
      stats: [
        { num: "15+", label: "Years of Experience" },
        { num: "500+", label: "Completed Operations" },
        { num: "40+", label: "Countries" },
        { num: "100%", label: "Confidentiality" },
      ],
    },
    services: {
      tag: "Services",
      title: "AREAS OF OPERATIONS",
      items: [
        { icon: "Search", title: "Detective Services", desc: "Missing persons & asset tracing, surveillance, background checks, evidence gathering for individuals and legal entities." },
        { icon: "Shield", title: "Security Operations", desc: "Personal protection, hostage rescue, crisis negotiation, ship liberation and complex tactical operations of any scale." },
        { icon: "Eye", title: "Business Intelligence", desc: "Competitive intelligence, OSINT analysis, due diligence, corruption and corporate fraud investigations." },
        { icon: "Globe", title: "Government Sector", desc: "Special operations in the interests of the Russian Federation, cooperation with relevant agencies, informational support." },
        { icon: "Users", title: "International Organizations", desc: "Support for international missions, operational backup in conflict zones, analytical reports and risk assessments." },
        { icon: "Lock", title: "Cybersecurity", desc: "Corporate data protection, data breach investigation, cyberattack response and digital intelligence." },
      ],
    },
    contact: {
      tag: "Contact",
      title: "GET IN TOUCH",
      desc: "All inquiries are handled with strict confidentiality. Emergency 24/7 line available.",
      form: {
        name: "Name / Organization",
        contact: "Phone or secure email",
        subject: "Subject",
        message: "Brief description of the situation",
        btn: "Send Request",
      },
      info: [
        { icon: "Phone", label: "Phone", value: "+7 (800) 000-00-00" },
        { icon: "Mail", label: "Email", value: "info@cascade-intel.ru" },
        { icon: "MapPin", label: "Moscow", value: "Confidential" },
        { icon: "Clock", label: "Hours", value: "24/7" },
      ],
    },
    report: {
      tag: "Anonymous Channel",
      title: "REPORT A CRIME OR TERRORISM",
      warning: "Your message will be encrypted using AES-256. IP addresses and metadata are not stored. Full source anonymity guaranteed.",
      categories: [
        "Terrorism & Extremism",
        "Violent Crimes",
        "Corruption & Fraud",
        "Information on Wanted Persons",
        "Threat to State Security",
        "Other",
      ],
      form: {
        category: "Message Category",
        region: "Region / Country",
        message: "Detailed description (min. 50 characters)",
        btn: "Submit Anonymously",
        hint: "Do not include personal data if you wish to remain anonymous",
      },
    },
    wanted: {
      tag: "Database",
      title: "WANTED PERSONS",
      search: "Search by name, charge or region...",
      filters: ["All", "Federal", "International", "High Priority"],
      persons: [
        { name: "Ivanov A.G.", dob: "1978", article: "Art. 159 CC RF", region: "Moscow", level: "Federal", reward: "500,000 ₽" },
        { name: "Petrov K.V.", dob: "1985", article: "Art. 105 CC RF", region: "SPb", level: "High Priority", reward: "2,000,000 ₽" },
        { name: "Sidorova N.D.", dob: "1990", article: "Art. 228 CC RF", region: "Krasnodar", level: "Regional", reward: "100,000 ₽" },
        { name: "Orlov M.E.", dob: "1972", article: "Art. 210 CC RF", region: "International", level: "International", reward: "5,000,000 ₽" },
      ],
    },
    footer: {
      rights: "© 2024 PIC «Cascade». All rights reserved.",
      legal: "Licensed operations. All activities in compliance with the laws of the Russian Federation.",
    },
  },
};

type Lang = "ru" | "en";
type SectionId = "home" | "about" | "services" | "contact" | "report" | "wanted";

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [wantedFilter, setWantedFilter] = useState(0);
  const [wantedSearch, setWantedSearch] = useState("");
  const [reportCategory, setReportCategory] = useState(0);
  const [reportMsg, setReportMsg] = useState("");
  const [reportRegion, setReportRegion] = useState("");
  const [encryptProgress, setEncryptProgress] = useState(0);
  const [encrypting, setEncrypting] = useState(false);

  const t = TRANSLATIONS[lang];

  const navItems: { key: SectionId; label: string }[] = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services },
    { key: "contact", label: t.nav.contact },
    { key: "report", label: t.nav.report },
    { key: "wanted", label: t.nav.wanted },
  ];

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id as SectionId);
        });
      },
      { threshold: 0.3 }
    );
    (["home", "about", "services", "contact", "report", "wanted"] as SectionId[]).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleReport = () => {
    if (reportMsg.length < 50) return;
    setEncrypting(true);
    setEncryptProgress(0);
    const interval = setInterval(() => {
      setEncryptProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setEncrypting(false);
          setReportSubmitted(true);
          return 100;
        }
        return p + 5;
      });
    }, 80);
  };

  const levelColor = (level: string) => {
    if (level === "Особо опасный" || level === "High Priority") return "#EF4444";
    if (level === "Международный" || level === "International") return "#FB923C";
    if (level === "Федеральный" || level === "Federal") return "#FACC15";
    return "#6B7280";
  };

  const filteredPersons = t.wanted.persons.filter((p) => {
    const matchSearch =
      wantedSearch === "" ||
      p.name.toLowerCase().includes(wantedSearch.toLowerCase()) ||
      p.article.toLowerCase().includes(wantedSearch.toLowerCase()) ||
      p.region.toLowerCase().includes(wantedSearch.toLowerCase());
    const filterLabel = t.wanted.filters[wantedFilter];
    const matchFilter =
      wantedFilter === 0 || p.level === filterLabel ||
      (filterLabel === "Особо опасный" && p.level === "High Priority") ||
      (filterLabel === "Международный" && p.level === "International") ||
      (filterLabel === "Федеральный" && p.level === "Federal");
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ background: "var(--cascade-dark)", color: "var(--cascade-light)", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(10,10,10,0.96)",
        borderBottom: "1px solid var(--cascade-line)",
        backdropFilter: "blur(8px)",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 3rem",
      }}>
        <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{ width: 36, height: 36, background: "var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Oswald", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", color: "white" }}>ЧРК</div>
          <span style={{ fontFamily: "Oswald", fontWeight: 600, fontSize: "1.05rem", letterSpacing: "0.22em", color: "var(--cascade-light)" }}>КАСКАД</span>
        </button>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden lg:flex">
          {navItems.map((item) => (
            <button key={item.key} onClick={() => scrollTo(item.key)} className={`nav-link ${activeSection === item.key ? "active" : ""}`} style={{ background: "none", border: "none", cursor: "pointer" }}>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button className={`lang-btn ${lang === "ru" ? "active" : ""}`} onClick={() => setLang("ru")}>RU</button>
          <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--cascade-light)", marginLeft: 8 }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(10,10,10,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32, paddingTop: 64 }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => scrollTo(item.key)} className="nav-link" style={{ fontSize: "1.2rem", background: "none", border: "none", cursor: "pointer" }}>{item.label}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: 64 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://cdn.poehali.dev/projects/b1149f1e-ccbb-4852-b138-f11cd07dfad2/files/65226e92-7c27-4591-a28d-e9eb6ad0495b.jpg)`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.15) grayscale(0.5)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(139,26,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,26,26,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "var(--cascade-red)" }} />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "6rem 3rem", width: "100%" }}>
          <div className="animate-fade-in-up" style={{ opacity: 0 }}>
            <span className="cascade-tag" style={{ marginBottom: 24, display: "inline-block" }}>{t.hero.tag}</span>
          </div>
          <h1 className="animate-fade-in-up cascade-line-anim" style={{
            fontFamily: "Oswald", fontWeight: 700, lineHeight: 0.88,
            fontSize: "clamp(5rem, 14vw, 11rem)",
            letterSpacing: "0.06em", color: "white",
            animationDelay: "0.2s", opacity: 0, marginBottom: "0.75rem",
          }}>
            {t.hero.title}
          </h1>
          <p className="animate-fade-in-up" style={{
            fontFamily: "Oswald", fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
            letterSpacing: "0.22em", color: "var(--cascade-red)", fontWeight: 300,
            marginTop: "1.5rem", marginBottom: "1.5rem",
            animationDelay: "0.4s", opacity: 0,
          }}>
            {t.hero.subtitle}
          </p>
          <p className="animate-fade-in-up" style={{
            fontFamily: "IBM Plex Sans", fontSize: "0.95rem", color: "#9CA3AF",
            lineHeight: 1.8, maxWidth: 540, animationDelay: "0.6s", opacity: 0, marginBottom: "2.5rem",
          }}>
            {t.hero.desc}
          </p>
          <div className="animate-fade-in-up" style={{ display: "flex", gap: 16, flexWrap: "wrap", animationDelay: "0.8s", opacity: 0 }}>
            <button className="btn-cascade" onClick={() => scrollTo("services")}>{t.hero.btn1}</button>
            <button className="btn-cascade-outline" onClick={() => scrollTo("contact")}>{t.hero.btn2}</button>
          </div>
        </div>

        <div className="animate-fade-in" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animationDelay: "1.2s", opacity: 0 }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#4B5563", fontFamily: "Oswald" }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--cascade-red), transparent)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem 0", background: "var(--cascade-charcoal)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "40%", backgroundImage: "linear-gradient(to left, rgba(139,26,26,0.04), transparent)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <span className="cascade-tag" style={{ marginBottom: 16, display: "inline-block" }}>{t.about.tag}</span>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
              {t.about.title}
            </h2>
            <p className="red-line-left" style={{ color: "#9CA3AF", lineHeight: 1.85, fontSize: "0.92rem", marginBottom: "1.2rem" }}>{t.about.p1}</p>
            <p style={{ color: "#6B7280", lineHeight: 1.85, fontSize: "0.92rem" }}>{t.about.p2}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {t.about.stats.map((s, i) => (
              <div key={i} className="cascade-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontFamily: "Oswald", fontSize: "2.8rem", fontWeight: 700, color: "var(--cascade-red)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "IBM Plex Sans", fontSize: "0.78rem", color: "#6B7280", marginTop: "0.5rem", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "6rem 0", background: "var(--cascade-dark)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <span className="cascade-tag" style={{ marginBottom: 16, display: "inline-block" }}>{t.services.tag}</span>
            <div className="section-divider" style={{ margin: "0 auto 0" }} />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, letterSpacing: "0.08em", marginTop: 16 }}>{t.services.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {t.services.items.map((s, i) => (
              <div key={i} className="cascade-card" style={{ padding: "2rem" }}>
                <div style={{
                  width: 52, height: 52, marginBottom: 24,
                  background: "rgba(139,26,26,0.1)",
                  border: "1px solid rgba(139,26,26,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={s.icon} fallback="Circle" size={22} style={{ color: "var(--cascade-red)" }} />
                </div>
                <h3 style={{ fontFamily: "Oswald", fontSize: "1.05rem", fontWeight: 500, letterSpacing: "0.08em", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.87rem", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "6rem 0", background: "var(--cascade-charcoal)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="cascade-tag" style={{ marginBottom: 16, display: "inline-block" }}>{t.contact.tag}</span>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{t.contact.title}</h2>
            <p style={{ color: "#6B7280", fontSize: "0.88rem" }}>{t.contact.desc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-cols-1 md:grid-cols-2">
            {!contactSubmitted ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input className="cascade-input" placeholder={t.contact.form.name} />
                <input className="cascade-input" placeholder={t.contact.form.contact} />
                <input className="cascade-input" placeholder={t.contact.form.subject} />
                <textarea className="cascade-input" rows={5} placeholder={t.contact.form.message} style={{ resize: "vertical" }} />
                <button className="btn-cascade" onClick={() => setContactSubmitted(true)} style={{ width: "fit-content" }}>{t.contact.form.btn}</button>
              </div>
            ) : (
              <div className="cascade-card" style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center", minHeight: 280 }}>
                <div style={{ width: 56, height: 56, background: "rgba(139,26,26,0.12)", border: "1px solid var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="CheckCheck" size={24} style={{ color: "var(--cascade-red)" }} />
                </div>
                <p style={{ fontFamily: "Oswald", fontSize: "1.1rem", letterSpacing: "0.1em" }}>{lang === "ru" ? "ЗАПРОС ПРИНЯТ" : "REQUEST RECEIVED"}</p>
                <p style={{ color: "#6B7280", fontSize: "0.85rem" }}>{lang === "ru" ? "Наш специалист свяжется с вами в течение 2 часов." : "Our specialist will contact you within 2 hours."}</p>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {t.contact.info.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ width: 44, height: 44, background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={item.icon} fallback="Circle" size={18} style={{ color: "var(--cascade-red)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Oswald", fontSize: "0.7rem", color: "#4B5563", letterSpacing: "0.18em" }}>{item.label}</div>
                    <div style={{ fontSize: "0.93rem", color: "var(--cascade-light)", marginTop: 2 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPORT */}
      <section id="report" style={{ padding: "6rem 0", background: "var(--cascade-dark)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ marginBottom: 40 }}>
            <span className="cascade-tag" style={{ marginBottom: 16, display: "inline-block" }}>{t.report.tag}</span>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.3rem, 2.2vw, 2rem)", fontWeight: 600, letterSpacing: "0.05em", maxWidth: 700 }}>{t.report.title}</h2>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, marginBottom: 32, background: "rgba(139,26,26,0.07)", border: "1px solid rgba(139,26,26,0.22)", borderLeft: "4px solid var(--cascade-red)" }}>
            <Icon name="ShieldCheck" size={20} style={{ color: "var(--cascade-red)", flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: "#9CA3AF", fontSize: "0.87rem", lineHeight: 1.75 }}>{t.report.warning}</p>
          </div>

          {!reportSubmitted ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 860 }} className="grid-cols-1 md:grid-cols-2">
              <div>
                <label style={{ display: "block", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em", color: "#6B7280", marginBottom: 10 }}>{t.report.form.category}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.report.categories.map((cat, i) => (
                    <button key={i} onClick={() => setReportCategory(i)} style={{
                      textAlign: "left", padding: "10px 16px",
                      background: reportCategory === i ? "rgba(139,26,26,0.14)" : "var(--cascade-charcoal)",
                      border: `1px solid ${reportCategory === i ? "var(--cascade-red)" : "var(--cascade-line)"}`,
                      color: reportCategory === i ? "var(--cascade-light)" : "#6B7280",
                      fontFamily: "IBM Plex Sans", fontSize: "0.85rem", cursor: "pointer",
                      transition: "all 0.2s",
                    }}>{cat}</button>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em", color: "#6B7280", marginBottom: 8 }}>{t.report.form.region}</label>
                  <input className="cascade-input" value={reportRegion} onChange={(e) => setReportRegion(e.target.value)} placeholder={lang === "ru" ? "Введите регион или страну" : "Enter region or country"} />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em", color: "#6B7280", marginBottom: 8 }}>{t.report.form.message}</label>
                  <textarea className="cascade-input" rows={6} value={reportMsg} onChange={(e) => setReportMsg(e.target.value)} placeholder={lang === "ru" ? "Опишите ситуацию подробно..." : "Describe the situation in detail..."} style={{ resize: "vertical" }} />
                  <div style={{ fontSize: "0.72rem", color: reportMsg.length >= 50 ? "var(--cascade-red)" : "#374151", marginTop: 4 }}>
                    {reportMsg.length} / 50 {lang === "ru" ? "символов" : "chars"}
                  </div>
                </div>
                <p style={{ fontSize: "0.73rem", color: "#4B5563", fontStyle: "italic" }}>{t.report.form.hint}</p>

                {encrypting && (
                  <div>
                    <div style={{ fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--cascade-red)", marginBottom: 6 }}>
                      {lang === "ru" ? "ШИФРОВАНИЕ AES-256... " : "ENCRYPTING AES-256... "}{encryptProgress}%
                    </div>
                    <div style={{ height: 2, background: "var(--cascade-line)" }}>
                      <div style={{ height: "100%", background: "var(--cascade-red)", width: `${encryptProgress}%`, transition: "width 0.1s" }} />
                    </div>
                  </div>
                )}

                <button className="btn-cascade" onClick={handleReport} disabled={reportMsg.length < 50 || encrypting}
                  style={{ opacity: reportMsg.length < 50 ? 0.35 : 1, width: "fit-content", display: "flex", alignItems: "center", gap: 8 }}>
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
              <p style={{ fontFamily: "Oswald", fontSize: "1.1rem", letterSpacing: "0.1em" }}>{lang === "ru" ? "СООБЩЕНИЕ ЗАШИФРОВАНО И ОТПРАВЛЕНО" : "MESSAGE ENCRYPTED & SENT"}</p>
              <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.75 }}>{lang === "ru" ? "Ваш ID обращения уничтожен. Сессия анонимна. Данные переданы оперативным сотрудникам." : "Your report ID has been destroyed. Session is anonymous. Data forwarded to operational staff."}</p>
            </div>
          )}
        </div>
      </section>

      {/* WANTED */}
      <section id="wanted" style={{ padding: "6rem 0", background: "var(--cascade-charcoal)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ marginBottom: 40 }}>
            <span className="cascade-tag" style={{ marginBottom: 16, display: "inline-block" }}>{t.wanted.tag}</span>
            <div className="section-divider" />
            <h2 style={{ fontFamily: "Oswald", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 600, letterSpacing: "0.08em" }}>{t.wanted.title}</h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24, alignItems: "center" }}>
            <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
              <Icon name="Search" size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
              <input className="cascade-input" style={{ paddingLeft: 42 }} placeholder={t.wanted.search} value={wantedSearch} onChange={(e) => setWantedSearch(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {t.wanted.filters.map((f, i) => (
                <button key={i} onClick={() => setWantedFilter(i)} style={{
                  fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.12em",
                  padding: "8px 16px", cursor: "pointer", transition: "all 0.2s",
                  border: `1px solid ${wantedFilter === i ? "var(--cascade-red)" : "var(--cascade-line)"}`,
                  color: wantedFilter === i ? "var(--cascade-red)" : "#6B7280",
                  background: wantedFilter === i ? "rgba(139,26,26,0.1)" : "transparent",
                }}>{f}</button>
              ))}
            </div>
          </div>

          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr 2fr 2fr", gap: 16, padding: "10px 20px", background: "rgba(139,26,26,0.07)", borderBottom: "1px solid var(--cascade-line)", fontFamily: "Oswald", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#4B5563", marginBottom: 4 }}>
            <span>{lang === "ru" ? "ФИО" : "NAME"}</span>
            <span>{lang === "ru" ? "Г.Р." : "DOB"}</span>
            <span>{lang === "ru" ? "СТАТЬЯ" : "CHARGE"}</span>
            <span>{lang === "ru" ? "УРОВЕНЬ" : "LEVEL"}</span>
            <span>{lang === "ru" ? "ВОЗНАГРАЖДЕНИЕ" : "REWARD"}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {filteredPersons.length === 0 ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#374151", fontFamily: "Oswald", letterSpacing: "0.12em", fontSize: "0.88rem" }}>
                {lang === "ru" ? "ЗАПИСИ НЕ НАЙДЕНЫ" : "NO RECORDS FOUND"}
              </div>
            ) : filteredPersons.map((p, i) => (
              <div key={i} className="wanted-card" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr 2fr 2fr", gap: 16, padding: "14px 20px", cursor: "pointer", alignItems: "center" }}>
                <div style={{ fontFamily: "Oswald", fontWeight: 500, letterSpacing: "0.05em" }}>{p.name}</div>
                <div style={{ color: "#6B7280", fontSize: "0.87rem" }}>{p.dob}</div>
                <div style={{ color: "#9CA3AF", fontSize: "0.87rem" }}>{p.article}</div>
                <div>
                  <span style={{ fontFamily: "Oswald", fontSize: "0.62rem", letterSpacing: "0.14em", padding: "3px 8px", border: `1px solid ${levelColor(p.level)}`, color: levelColor(p.level) }}>{p.level}</span>
                </div>
                <div style={{ color: "var(--cascade-red)", fontFamily: "Oswald", fontWeight: 600, fontSize: "0.92rem" }}>{p.reward}</div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 24, fontSize: "0.72rem", color: "#374151", fontStyle: "italic" }}>
            {lang === "ru" ? "* База данных носит информационный характер. Актуальность сведений подтверждается оперативными сотрудниками." : "* Database is informational only. Data accuracy is confirmed by operational staff."}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060606", borderTop: "1px solid var(--cascade-line)", padding: "2.5rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 28, background: "var(--cascade-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Oswald", fontWeight: 700, fontSize: 11, color: "white" }}>ЧРК</div>
            <span style={{ fontFamily: "Oswald", fontSize: "0.8rem", letterSpacing: "0.22em", color: "#4B5563" }}>КАСКАД</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.72rem", color: "#374151" }}>{t.footer.rights}</p>
            <p style={{ fontSize: "0.68rem", color: "#2D2D2D", marginTop: 2 }}>{t.footer.legal}</p>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {navItems.slice(0, 4).map((item) => (
              <button key={item.key} onClick={() => scrollTo(item.key)} style={{
                fontFamily: "Oswald", fontSize: "0.68rem", letterSpacing: "0.14em",
                color: "#374151", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s",
              }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--cascade-red)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
              >{item.label}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}