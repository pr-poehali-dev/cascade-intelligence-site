export type Lang = "ru" | "en" | "fr" | "ar" | "zh" | "he" | "ja";

export const LANGS: { code: Lang; label: string; native: string; rtl?: boolean }[] = [
  { code: "ru", label: "RU", native: "Русский" },
  { code: "en", label: "EN", native: "English" },
  { code: "fr", label: "FR", native: "Français" },
  { code: "ar", label: "AR", native: "العربية", rtl: true },
  { code: "zh", label: "ZH", native: "中文" },
  { code: "he", label: "HE", native: "עברית", rtl: true },
  { code: "ja", label: "JA", native: "日本語" },
];

interface ServiceItem { icon: string; title: string; desc: string; }
interface StatItem { num: string; label: string; }
interface InfoItem { icon: string; label: string; value: string; }

export interface Dict {
  nav: { home: string; about: string; services: string; report: string; agent: string; contact: string };
  secure: string;
  elite: { tag: string; line1: string; line2: string };
  hero: { tag: string; title: string; subtitle: string; desc: string; btn1: string; btn2: string };
  about: { tag: string; title: string; p1: string; p2: string; stats: StatItem[] };
  services: { tag: string; title: string; items: ServiceItem[] };
  geo: { tag: string; title: string; desc: string; zones: string[] };
  globe: { detecting: string; detected: string; denied: string; locate: string; lat: string; lon: string; tracked: string; nearYou: string };
  report: {
    tag: string; title: string; warning: string; categories: string[];
    form: { category: string; region: string; message: string; btn: string; hint: string };
    encrypting: string; sent: string; sentDesc: string; error: string;
  };
  safety: { title: string; items: { icon: string; text: string }[] };
  faq: { tag: string; title: string; items: { q: string; a: string }[] };
  trust: { title: string; items: { icon: string; value: string; label: string }[] };
  reassure: string;
  steps: { tag: string; title: string; items: { icon: string; title: string; desc: string }[] };
  agent: {
    tag: string; title: string; desc: string; secure: string;
    fields: { alias: string; contact: string; skills: string; motivation: string; btn: string };
    consent: string; sent: string; sentDesc: string;
  };
  principles: { tag: string; title: string; items: { icon: string; title: string; desc: string }[] };
  cta: { title: string; desc: string; callBtn: string; consultBtn: string; tgBtn: string; note: string };
  legalSection: { tag: string; title: string; p1: string; p2: string; points: { icon: string; text: string }[] };
  contact: {
    tag: string; title: string; desc: string;
    callBtn: string; tgBtn: string; info: InfoItem[];
  };
  footer: { rights: string; legal: string; hint: string };
}

export const TRANSLATIONS: Record<Lang, Dict> = {
  ru: {
    nav: { home: "Главная", about: "Компания", services: "Услуги", report: "Сообщить", agent: "Сотрудничество", contact: "Контакты" },
    secure: "Конфиденциально · Ваше обращение под защитой",
    elite: { tag: "Закрытый контур", line1: "Мы работаем с ограниченным числом резидентов.", line2: "Это не вопрос цены. Это вопрос ресурса: каждый контур ведёт выделенная группа, и мы не берём больше задач, чем способны закрыть с гарантией результата." },
    hero: { tag: "Частная Разведывательная Компания", title: "КАСКАД", subtitle: "Конфиденциальность. Ресурс. Спокойствие.", desc: "Репутация и время стоят дороже денег. Мы принимаем вопросы, цена ошибки в которых несоизмерима со стоимостью работы, и ведём их в закрытом контуре — до результата.", btn1: "Наши услуги", btn2: "Получить консультацию" },
    about: { tag: "О компании", title: "КОНФИДЕНЦИАЛЬНОСТЬ. РЕСУРС. РЕЗУЛЬТАТ.", p1: "ЧРК «Каскад» — частная разведывательная компания. Операционный центр в Москве, рабочая география — без ограничений. Мы обеспечиваем защиту интересов частных лиц и организаций там, где обычные инструменты уже не работают.", p2: "Методология команды построена на стандартах корпоративной безопасности высшего уровня сложности. Каждый вопрос переводится в закрытый контур и ведётся по протоколу: фиксированный состав группы, документированные этапы, единая точка ответственности. Решения реализуем исключительно в правовом поле.", stats: [ { num: "15+", label: "Лет практики" }, { num: "500+", label: "Закрытых контуров" }, { num: "40+", label: "Юрисдикций" }, { num: "100%", label: "Конфиденциальность" } ] },
    services: { tag: "Услуги", title: "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ", items: [
      { icon: "Search", title: "Розыск и установление", desc: "Устанавливаем местонахождение лиц и активов, формируем доказательную базу процессуального качества. Работаем по сделкам, где цена вопроса не допускает неопределённости." },
      { icon: "Shield", title: "Личная безопасность", desc: "Защищаем интересы первых лиц и их семей: сопровождение, обеспечение переговорного процесса, координация действий в кризисной ситуации. В том числе за пределами юрисдикции РФ." },
      { icon: "Eye", title: "Бизнес-разведка", desc: "Проверяем контрагента до подписания, а не после. Структура владения, реальные бенефициары, аффилированность, признаки корпоративного мошенничества — до того, как капитал перешёл границу сделки." },
      { icon: "Landmark", title: "Государственный сектор", desc: "Информационно-аналитическое обеспечение государственных структур: экспертные заключения, оценка рисков, взаимодействие с профильными ведомствами по регламенту." },
      { icon: "Globe", title: "Международный контур", desc: "Координируем сопровождение международных миссий и трансграничных активов. Оценка страновых рисков, правовая конфигурация решения под конкретную юрисдикцию." },
      { icon: "Lock", title: "Цифровая защита", desc: "Обеспечиваем защиту закрытой информации: выявление утечек, расследование инцидентов, аудит цифрового периметра первых лиц компании." },
    ] },
    geo: { tag: "География", title: "МЫ РАБОТАЕМ ВЕЗДЕ", desc: "От Москвы до зон конфликтов на другом конце планеты. Там, где требуется присутствие — мы уже там.", zones: [] },
    globe: { detecting: "Определение координат...", detected: "Вы в зоне нашего присутствия", denied: "Координаты не определены", locate: "Определить моё местоположение", lat: "Широта", lon: "Долгота", tracked: "Сигнал получен · Объект на карте", nearYou: "Наше присутствие рядом с вами: {place}" },
    report: { tag: "Анонимная связь", title: "СООБЩИТЬ О ПРЕСТУПЛЕНИИ ИЛИ ТЕРРОРИЗМЕ", warning: "Ваше сообщение передаётся по защищённому каналу. Мы не сохраняем IP-адрес и метаданные — источник остаётся полностью анонимным.", categories: ["Терроризм и экстремизм", "Тяжкие преступления", "Коррупция и мошенничество", "Информация о разыскиваемых", "Угроза госбезопасности", "Иное"], form: { category: "Категория сообщения", region: "Регион / страна", message: "Подробное описание (минимум 50 символов)", btn: "Отправить анонимно", hint: "Не указывайте личные данные, если хотите сохранить анонимность" }, encrypting: "ЗАЩИЩЁННАЯ ПЕРЕДАЧА...", sent: "СООБЩЕНИЕ ОТПРАВЛЕНО", sentDesc: "Обращение передано нашим специалистам по защищённому каналу. Сессия анонимна, данные о вас не сохранены.", error: "Не удалось отправить сообщение — проверьте интернет-соединение и попробуйте ещё раз. Если не получается — позвоните или напишите нам в Telegram." },
    safety: { title: "КАК МЫ ЗАЩИЩАЕМ ВАШУ АНОНИМНОСТЬ", items: [
      { icon: "Lock", text: "Соединение зашифровано (HTTPS). Данные передаются в закрытом виде — их невозможно перехватить." },
      { icon: "EyeOff", text: "Мы не сохраняем ваш IP-адрес, местоположение и цифровые следы. Источник остаётся анонимным." },
      { icon: "ServerCrash", text: "Сообщения не хранятся на сайте — сразу уходят на защищённый канал и удаляются из системы." },
      { icon: "ShieldCheck", text: "Форма защищена от ботов и спама. Для максимальной приватности используйте Telegram или звонок." },
    ] },
    faq: { tag: "Частые вопросы", title: "ОТВЕЧАЕМ НА ГЛАВНЫЕ ВОПРОСЫ", items: [
      { q: "Это действительно конфиденциально?", a: "Да. Мы не разглашаем ни факт обращения, ни его содержание. Все данные остаются между вами и нашими специалистами — это основа нашей работы." },
      { q: "Сколько стоят ваши услуги?", a: "Стоимость зависит от задачи. Первая консультация бесплатна: мы оцениваем ситуацию, называем сроки и цену, и только потом вы принимаете решение. Никаких обязательств заранее." },
      { q: "Вы работаете законно?", a: "Да. Мы действуем строго в рамках законодательства РФ и норм международного права. Для каждой задачи находим законное решение." },
      { q: "Как быстро вы отвечаете?", a: "Мы на связи круглосуточно, без выходных. На срочные обращения реагируем немедленно — по телефону или в Telegram." },
      { q: "С чего начать?", a: "Позвоните или напишите нам — опишите ситуацию в общих чертах. Мы зададим уточняющие вопросы и предложим план действий. Это ни к чему вас не обязывает." },
    ] },
    trust: { title: "НАМ ДОВЕРЯЮТ", items: [
      { icon: "CalendarClock", value: "15+", label: "лет опыта" },
      { icon: "CircleCheckBig", value: "500+", label: "решённых дел" },
      { icon: "Globe2", value: "40+", label: "стран присутствия" },
      { icon: "Clock", value: "24/7", label: "на связи" },
      { icon: "ShieldCheck", value: "100%", label: "конфиденциальность" },
    ] },
    reassure: "Бесплатно · Конфиденциально · Ни к чему не обязывает",
    steps: { tag: "Протокол", title: "КАК УСТРОЕН ЗАКРЫТЫЙ КОНТУР", items: [
      { icon: "Phone", title: "Протокол доступа", desc: "Защищённая линия или Telegram. Достаточно обозначить суть — детали на этом этапе не передаются." },
      { icon: "MessagesSquare", title: "Конфиденциальная консультация", desc: "Оцениваем ситуацию и применимые инструменты. Без обязательств с вашей стороны и без оплаты." },
      { icon: "ClipboardList", title: "Регламент работы", desc: "Фиксируем задачу, состав группы, этапы, сроки и стоимость. Решение о старте остаётся за вами." },
      { icon: "ShieldCheck", title: "Реализация и отчёт", desc: "Ведём контур до результата. По завершении — документированный отчёт и закрытие контура." },
    ] },
    agent: { tag: "Сотрудничество", title: "СТАНЬТЕ ЧАСТЬЮ КОМАНДЫ", desc: "Мы ищем людей действия по всему миру — тех, кто обладает доступом, информацией, особыми навыками или просто хочет быть полезным большому делу. Военный и оперативный опыт, знание закрытых сфер, связи в нужных кругах — всё это ценится. Каждому находится своя роль. Это не работа за деньги, а вклад в дело, которое больше нас. Сделайте первый шаг — остальное мы возьмём на себя.", secure: "Данные передаются по защищённому каналу. Мы не сохраняем IP-адрес и метаданные — ваша анонимность под полной защитой. Обратиться к нам безопасно.", fields: { alias: "Как к вам обращаться", contact: "Защищённый способ связи", skills: "Ваш опыт, доступы, регион и возможности", motivation: "Чем вы можете быть полезны", btn: "Подать заявку" }, consent: "Я готов содействовать на добровольной и безвозмездной основе", sent: "ЗАЯВКА ПРИНЯТА", sentDesc: "Ваш потенциал будет изучен. Если вы нам подходите — с вами свяжутся через указанный канал. Действуйте сдержанно." },
    principles: { tag: "Принципы", title: "ЧТО ПОЛУЧАЕТ РЕЗИДЕНТ", items: [ { icon: "Award", title: "Оплата по результату", desc: "Задача не закрыта — оплата не удерживается. Мы открываем контур только там, где уверены в исходе." }, { icon: "Medal", title: "Уровень команды", desc: "Методология построена на стандартах безопасности высшего уровня сложности. Состав группы под задачу фиксируется и не меняется по ходу." }, { icon: "FileCheck", title: "Документированный результат", desc: "По завершении — отчёт с подтверждающими материалами: фото, видео, аудио, аналитическая справка." }, { icon: "Clock", title: "Время реакции", desc: "Контур принимает обращения круглосуточно. По срочным вопросам реагируем немедленно — промедление здесь дороже денег." } ] },
    cta: { title: "ВОПРОС РЕШАЕТСЯ ДО ТОГО, КАК СТАНЕТ ПУБЛИЧНЫМ", desc: "Репутационный риск дешевле предупредить, чем устранять. Первая консультация конфиденциальна, проводится без оплаты и ни к чему вас не обязывает. Чем раньше открыт контур — тем шире набор доступных решений.", callBtn: "Позвонить", consultBtn: "Получить консультацию", tgBtn: "Написать в Telegram", note: "Защищённая линия · Круглосуточно · Полная конфиденциальность" },
    legalSection: { tag: "Правовой статус", title: "В ПРАВОВОМ ПОЛЕ. С МАКСИМАЛЬНОЙ ОТДАЧЕЙ.", p1: "ЧРК «Каскад» осуществляет деятельность в строгом соответствии с законодательством Российской Федерации и нормами международного права.", p2: "Каждая задача решается с учётом конкретной юрисдикции. Мы располагаем правовыми знаниями и ресурсами, чтобы находить эффективные и полностью законные решения даже в сложных ситуациях.", points: [ { icon: "Scale", text: "Соответствие законодательству РФ" }, { icon: "Globe2", text: "Нормы международного права" }, { icon: "KeyRound", text: "Индивидуальные правовые решения под каждую юрисдикцию" }, { icon: "ShieldCheck", text: "Полная конфиденциальность и правовая защита клиента" } ] },
    contact: { tag: "Контакты", title: "ЗАПРОСИТЬ ПРОТОКОЛ ДОСТУПА", desc: "Обращения обрабатываются в закрытом режиме. Круглосуточная линия для ситуаций, не терпящих отлагательства.", callBtn: "Позвонить", tgBtn: "Написать в Telegram", info: [ { icon: "Phone", label: "Защищённая линия", value: "+7 913 364-57-48" }, { icon: "Send", label: "Telegram", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "Присутствие", value: "Москва · весь мир" }, { icon: "Clock", label: "Режим", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 ЧРК «Каскад». Все права защищены.", legal: "Деятельность осуществляется в рамках законодательства РФ.", hint: "Действуем строго в правовом поле РФ и международного права — предлагаем только законные решения." },
  },
  en: {
    nav: { home: "Home", about: "Company", services: "Services", report: "Report", agent: "Cooperation", contact: "Contact" },
    secure: "Confidential · Your message is protected",
    elite: { tag: "Closed Circuit", line1: "We work with a limited number of residents.", line2: "This is not a matter of price. It is a matter of resource: every circuit is run by a dedicated group, and we do not take on more than we can close with a guaranteed outcome." },
    hero: { tag: "Private Intelligence Company", title: "CASCADE", subtitle: "Confidentiality. Resource. Peace of Mind.", desc: "Reputation and time cost more than money. We accept matters where the price of error is incommensurable with the cost of the work, and run them within a closed circuit — to the result.", btn1: "Our Services", btn2: "Get a Consultation" },
    about: { tag: "About", title: "CONFIDENTIALITY. RESOURCE. RESULTS.", p1: "PIC «Cascade» is a private intelligence company. Operations centre in Moscow, working geography — without limits. We protect the interests of private individuals and organizations where conventional instruments no longer work.", p2: "Our methodology is built on corporate security standards of the highest level of complexity. Every matter is transferred into a closed circuit and run by protocol: a fixed group composition, documented stages, a single point of accountability. All solutions are implemented strictly within the legal framework.", stats: [ { num: "15+", label: "Years of Practice" }, { num: "500+", label: "Circuits Closed" }, { num: "40+", label: "Jurisdictions" }, { num: "100%", label: "Confidentiality" } ] },
    services: { tag: "Services", title: "AREAS OF OPERATIONS", items: [
      { icon: "Search", title: "Tracing & Identification", desc: "We establish the location of persons and assets and build an evidence base of procedural quality. We work on transactions where the stakes leave no room for uncertainty." },
      { icon: "Shield", title: "Personal Security", desc: "We protect the interests of principals and their families: close protection, securing the negotiation process, coordination in a crisis. Including beyond the jurisdiction of the Russian Federation." },
      { icon: "Eye", title: "Business Intelligence", desc: "We verify the counterparty before signing, not after. Ownership structure, ultimate beneficiaries, affiliations, indicators of corporate fraud — before capital crosses the line of the deal." },
      { icon: "Landmark", title: "Government Sector", desc: "Information and analytical support for state structures: expert opinions, risk assessment, cooperation with relevant agencies by regulation." },
      { icon: "Globe", title: "International Circuit", desc: "We coordinate support for international missions and cross-border assets. Country risk assessment and legal configuration of the solution for each specific jurisdiction." },
      { icon: "Lock", title: "Digital Protection", desc: "We secure closed information: leak detection, incident investigation, audit of the digital perimeter of the company's principals." },
    ] },
    geo: { tag: "Geography", title: "WE OPERATE EVERYWHERE", desc: "From Moscow to conflict zones across the globe. Wherever presence is required — we are already there.", zones: [] },
    globe: { detecting: "Detecting coordinates...", detected: "You are within our area of presence", denied: "Coordinates not determined", locate: "Detect my location", lat: "Latitude", lon: "Longitude", tracked: "Signal received · Target on map", nearYou: "Our presence near you: {place}" },
    report: { tag: "Anonymous Channel", title: "REPORT A CRIME OR TERRORISM", warning: "Your message is sent over a secure channel. We do not store your IP address or metadata — the source stays fully anonymous.", categories: ["Terrorism & Extremism", "Violent Crimes", "Corruption & Fraud", "Information on Wanted Persons", "Threat to State Security", "Other"], form: { category: "Message Category", region: "Region / Country", message: "Detailed description (min. 50 characters)", btn: "Submit Anonymously", hint: "Do not include personal data if you wish to remain anonymous" }, encrypting: "SECURE TRANSFER...", sent: "MESSAGE SENT", sentDesc: "Your message has been delivered to our specialists over a secure channel. The session is anonymous and no data about you is stored.", error: "Failed to send the message — check your internet connection and try again. If it still fails, call us or message us on Telegram." },
    safety: { title: "HOW WE PROTECT YOUR ANONYMITY", items: [
      { icon: "Lock", text: "The connection is encrypted (HTTPS). Data is transmitted securely — it cannot be intercepted." },
      { icon: "EyeOff", text: "We do not store your IP address, location or digital traces. The source stays anonymous." },
      { icon: "ServerCrash", text: "Messages are not stored on the site — they go straight to a secure channel and are removed from the system." },
      { icon: "ShieldCheck", text: "The form is protected from bots and spam. For maximum privacy, use Telegram or a phone call." },
    ] },
    faq: { tag: "FAQ", title: "ANSWERS TO KEY QUESTIONS", items: [
      { q: "Is this really confidential?", a: "Yes. We never disclose the fact of your inquiry or its content. All data stays between you and our specialists — this is the foundation of our work." },
      { q: "How much do your services cost?", a: "The cost depends on the task. The first consultation is free: we assess the situation, state the timeline and price, and only then do you decide. No commitments in advance." },
      { q: "Do you operate legally?", a: "Yes. We act in strict compliance with the legislation of the Russian Federation and international law. For every task we find a lawful solution." },
      { q: "How quickly do you respond?", a: "We are available around the clock, no days off. Urgent inquiries get an immediate response — by phone or on Telegram." },
      { q: "How do I start?", a: "Call or message us — describe the situation in general terms. We will ask clarifying questions and propose a plan of action. This puts you under no obligation." },
    ] },
    trust: { title: "TRUSTED BY MANY", items: [
      { icon: "CalendarClock", value: "15+", label: "years of experience" },
      { icon: "CircleCheckBig", value: "500+", label: "cases resolved" },
      { icon: "Globe2", value: "40+", label: "countries" },
      { icon: "Clock", value: "24/7", label: "availability" },
      { icon: "ShieldCheck", value: "100%", label: "confidentiality" },
    ] },
    reassure: "Free · Confidential · No obligation",
    steps: { tag: "Protocol", title: "HOW THE CLOSED CIRCUIT WORKS", items: [
      { icon: "Phone", title: "Access protocol", desc: "Secure line or Telegram. Outlining the substance is enough — no details are transmitted at this stage." },
      { icon: "MessagesSquare", title: "Confidential consultation", desc: "We assess the situation and the applicable instruments. No obligation on your part and no charge." },
      { icon: "ClipboardList", title: "Terms of engagement", desc: "We fix the task, group composition, stages, timeline and cost. The decision to proceed remains yours." },
      { icon: "ShieldCheck", title: "Execution & report", desc: "We run the circuit to the result. On completion — a documented report and closure of the circuit." },
    ] },
    agent: { tag: "Cooperation", title: "BECOME PART OF THE TEAM", desc: "We are looking for people of action around the world — those who hold access, information, special skills, or simply wish to be useful to a greater cause. Military and operational experience, knowledge of closed circles, connections in the right places — all of it is valued. There is a role for everyone. This is not work for money, but a contribution to something larger than ourselves. Take the first step — we will handle the rest.", secure: "Data is sent over a secure channel. We do not store your IP address or metadata — your anonymity is fully protected. Reaching out to us is safe.", fields: { alias: "How to address you", contact: "Secure contact method", skills: "Your experience, access, region and capabilities", motivation: "How you can be useful", btn: "Submit Request" }, consent: "I am ready to assist on a voluntary and unpaid basis", sent: "REQUEST RECEIVED", sentDesc: "Your potential will be reviewed. If you are a fit, we will contact you via the specified channel. Act with discretion." },
    principles: { tag: "Principles", title: "WHAT A RESIDENT RECEIVES", items: [ { icon: "Award", title: "Payment on result", desc: "If the task is not closed, no payment is retained. We open a circuit only where we are confident of the outcome." }, { icon: "Medal", title: "Calibre of the team", desc: "Our methodology is built on security standards of the highest level of complexity. The group assigned to a task is fixed and does not change mid-course." }, { icon: "FileCheck", title: "Documented result", desc: "On completion — a report with supporting materials: photo, video, audio and an analytical summary." }, { icon: "Clock", title: "Response time", desc: "The circuit accepts inquiries around the clock. On urgent matters we respond immediately — here, delay costs more than money." } ] },
    cta: { title: "THE MATTER IS RESOLVED BEFORE IT BECOMES PUBLIC", desc: "A reputational risk is cheaper to prevent than to contain. The first consultation is confidential, carries no charge and places you under no obligation. The earlier the circuit is opened, the wider the range of available solutions.", callBtn: "Call", consultBtn: "Get a Consultation", tgBtn: "Message on Telegram", note: "Secure line · Around the clock · Full confidentiality" },
    legalSection: { tag: "Legal Status", title: "WITHIN THE LAW. WITH MAXIMUM IMPACT.", p1: "PIC «Cascade» operates in strict compliance with the legislation of the Russian Federation and the norms of international law.", p2: "Every task is handled with regard to the specific jurisdiction. We possess the legal knowledge and resources to find effective and fully lawful solutions even in complex situations.", points: [ { icon: "Scale", text: "Compliance with RF legislation" }, { icon: "Globe2", text: "Norms of international law" }, { icon: "KeyRound", text: "Tailored legal solutions for each jurisdiction" }, { icon: "ShieldCheck", text: "Full confidentiality and legal protection of the client" } ] },
    contact: { tag: "Contact", title: "REQUEST ACCESS PROTOCOL", desc: "Inquiries are handled in closed mode. A 24/7 line for situations that allow no delay.", callBtn: "Call", tgBtn: "Message on Telegram", info: [ { icon: "Phone", label: "Secure line", value: "+7 913 364-57-48" }, { icon: "Send", label: "Telegram", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "Presence", value: "Moscow · worldwide" }, { icon: "Clock", label: "Hours", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 PIC «Cascade». All rights reserved.", legal: "Activity is conducted within the laws of the Russian Federation.", hint: "We act strictly within the legal framework of the RF and international law — offering only lawful solutions." },
  },
  fr: {
    nav: { home: "Accueil", about: "Société", services: "Services", report: "Signaler", agent: "Coopération", contact: "Contact" },
    secure: "Confidentiel · Votre message est protégé",
    elite: { tag: "Circuit fermé", line1: "Nous travaillons avec un nombre restreint de résidents.", line2: "Ce n’est pas une question de prix. C’est une question de ressource : chaque circuit est conduit par une équipe dédiée, et nous n’acceptons jamais plus d’affaires que nous ne pouvons clore avec un résultat garanti." },
    hero: { tag: "Compagnie de Renseignement Privée", title: "CASCADE", subtitle: "Confidentialité. Ressource. Sérénité.", desc: "La réputation et le temps valent plus que l’argent. Nous acceptons les affaires dont le prix de l’erreur est sans commune mesure avec le coût de l’intervention, et nous les conduisons en circuit fermé — jusqu’au résultat.", btn1: "Nos services", btn2: "Obtenir une consultation" },
    about: { tag: "À propos", title: "CONFIDENTIALITÉ. RESSOURCE. RÉSULTAT.", p1: "CRP « Cascade » est une compagnie de renseignement privée. Centre opérationnel à Moscou, géographie d’intervention — sans limites. Nous assurons la protection des intérêts de particuliers et d’organisations là où les instruments ordinaires ne suffisent plus.", p2: "Notre méthodologie repose sur les standards de sécurité d’entreprise du plus haut degré de complexité. Chaque affaire est transférée en circuit fermé et conduite selon un protocole : composition d’équipe fixe, étapes documentées, un point de responsabilité unique. Toutes les solutions sont mises en œuvre strictement dans le cadre légal.", stats: [ { num: "15+", label: "Ans de pratique" }, { num: "500+", label: "Circuits clos" }, { num: "40+", label: "Juridictions" }, { num: "100%", label: "Confidentialité" } ] },
    services: { tag: "Services", title: "DOMAINES D’INTERVENTION", items: [
      { icon: "Search", title: "Recherche et identification", desc: "Nous établissons la localisation de personnes et d’actifs et constituons un dossier de preuves de qualité procédurale. Nous intervenons sur les opérations où l’enjeu n’autorise aucune incertitude." },
      { icon: "Shield", title: "Sécurité personnelle", desc: "Nous protégeons les intérêts des dirigeants et de leurs familles : protection rapprochée, sécurisation du processus de négociation, coordination en situation de crise. Y compris au-delà de la juridiction de la Fédération de Russie." },
      { icon: "Eye", title: "Renseignement d’affaires", desc: "Nous vérifions votre contrepartie avant la signature, et non après. Structure de détention, bénéficiaires effectifs, liens d’affiliation, signaux de fraude d’entreprise — avant que le capital ne franchisse la ligne de l’opération." },
      { icon: "Landmark", title: "Secteur public", desc: "Soutien informationnel et analytique aux structures étatiques : avis d’experts, évaluation des risques, coopération avec les administrations compétentes selon les règlements en vigueur." },
      { icon: "Globe", title: "Circuit international", desc: "Nous coordonnons l’accompagnement des missions internationales et des actifs transfrontaliers. Évaluation du risque pays et configuration juridique de la solution pour chaque juridiction concernée." },
      { icon: "Lock", title: "Protection numérique", desc: "Nous assurons la protection de l’information fermée : détection des fuites, investigation des incidents, audit du périmètre numérique des dirigeants de l’entreprise." },
    ] },
    geo: { tag: "Géographie", title: "NOUS OPÉRONS PARTOUT", desc: "De Moscou aux zones de conflit à l'autre bout du monde. Là où une présence est requise — nous y sommes déjà.", zones: [] },
    globe: { detecting: "Détection des coordonnées...", detected: "Vous êtes dans notre zone de présence", denied: "Coordonnées non déterminées", locate: "Détecter ma position", lat: "Latitude", lon: "Longitude", tracked: "Signal reçu · Cible sur la carte", nearYou: "Notre présence près de vous : {place}" },
    report: { tag: "Canal anonyme", title: "SIGNALER UN CRIME OU UN ACTE TERRORISTE", warning: "Votre message est transmis via un canal sécurisé. Nous ne conservons ni l'adresse IP ni les métadonnées — la source reste totalement anonyme.", categories: ["Terrorisme et extrémisme", "Crimes violents", "Corruption et fraude", "Informations sur des personnes recherchées", "Menace pour la sécurité de l'État", "Autre"], form: { category: "Catégorie du message", region: "Région / pays", message: "Description détaillée (50 caractères min.)", btn: "Envoyer anonymement", hint: "N'indiquez aucune donnée personnelle pour rester anonyme" }, encrypting: "TRANSMISSION SÉCURISÉE...", sent: "MESSAGE ENVOYÉ", sentDesc: "Votre message a été transmis à nos spécialistes via un canal sécurisé. La session est anonyme, aucune donnée vous concernant n'est conservée.", error: "Échec de l'envoi du message — vérifiez votre connexion Internet et réessayez. Si cela ne fonctionne toujours pas, appelez-nous ou écrivez-nous sur Telegram." },
    safety: { title: "COMMENT NOUS PROTÉGEONS VOTRE ANONYMAT", items: [
      { icon: "Lock", text: "La connexion est chiffrée (HTTPS). Les données sont transmises de façon sécurisée — impossible à intercepter." },
      { icon: "EyeOff", text: "Nous ne conservons ni votre adresse IP, ni votre localisation, ni vos traces numériques. La source reste anonyme." },
      { icon: "ServerCrash", text: "Les messages ne sont pas stockés sur le site — ils partent directement vers un canal sécurisé et sont supprimés du système." },
      { icon: "ShieldCheck", text: "Le formulaire est protégé contre les bots et le spam. Pour une confidentialité maximale, utilisez Telegram ou un appel." },
    ] },
    faq: { tag: "Questions fréquentes", title: "RÉPONSES AUX QUESTIONS ESSENTIELLES", items: [
      { q: "Est-ce vraiment confidentiel ?", a: "Oui. Nous ne divulguons ni le fait de votre demande, ni son contenu. Toutes les données restent entre vous et nos spécialistes — c'est le fondement de notre travail." },
      { q: "Combien coûtent vos services ?", a: "Le coût dépend de la mission. La première consultation est gratuite : nous évaluons la situation, indiquons les délais et le prix, et c'est seulement ensuite que vous décidez. Aucun engagement préalable." },
      { q: "Agissez-vous légalement ?", a: "Oui. Nous agissons en stricte conformité avec la législation de la Fédération de Russie et le droit international. Pour chaque mission, nous trouvons une solution légale." },
      { q: "Quelle est votre réactivité ?", a: "Nous sommes disponibles 24h/24, sans jours de repos. Les demandes urgentes reçoivent une réponse immédiate — par téléphone ou sur Telegram." },
      { q: "Comment commencer ?", a: "Appelez-nous ou écrivez-nous — décrivez la situation dans les grandes lignes. Nous poserons des questions et proposerons un plan d'action. Cela ne vous engage à rien." },
    ] },
    trust: { title: "ILS NOUS FONT CONFIANCE", items: [
      { icon: "CalendarClock", value: "15+", label: "ans d'expérience" },
      { icon: "CircleCheckBig", value: "500+", label: "affaires résolues" },
      { icon: "Globe2", value: "40+", label: "pays" },
      { icon: "Clock", value: "24/7", label: "disponibilité" },
      { icon: "ShieldCheck", value: "100%", label: "confidentialité" },
    ] },
    reassure: "Gratuit · Confidentiel · Sans engagement",
    steps: { tag: "Protocole", title: "COMMENT FONCTIONNE LE CIRCUIT FERMÉ", items: [
      { icon: "Phone", title: "Protocole d’accès", desc: "Ligne sécurisée ou Telegram. Il suffit d’exposer l’essentiel — aucun détail n’est transmis à ce stade." },
      { icon: "MessagesSquare", title: "Consultation confidentielle", desc: "Nous évaluons la situation et les instruments applicables. Sans engagement de votre part et sans frais." },
      { icon: "ClipboardList", title: "Cadre d’intervention", desc: "Nous fixons la mission, la composition de l’équipe, les étapes, les délais et le coût. La décision d’engager reste la vôtre." },
      { icon: "ShieldCheck", title: "Exécution et rapport", desc: "Nous conduisons le circuit jusqu’au résultat. À l’issue — un rapport documenté et la clôture du circuit." },
    ] },
    agent: { tag: "Coopération", title: "REJOIGNEZ L'ÉQUIPE", desc: "Nous recherchons des hommes d'action partout dans le monde — ceux qui détiennent un accès, des informations, des compétences particulières, ou qui souhaitent simplement être utiles à une grande cause. Expérience militaire et opérationnelle, connaissance des milieux fermés, relations dans les bons cercles — tout cela est apprécié. Chacun trouve son rôle. Ce n'est pas un travail rémunéré, mais une contribution à une cause plus grande que nous. Faites le premier pas — nous nous chargeons du reste.", secure: "Les données sont transmises via un canal sécurisé. Nous ne conservons ni votre adresse IP ni les métadonnées — votre anonymat est totalement protégé. Nous contacter est sûr.", fields: { alias: "Comment vous appeler", contact: "Moyen de contact sécurisé", skills: "Votre expérience, vos accès, votre région et vos possibilités", motivation: "En quoi vous pouvez être utile", btn: "Envoyer la demande" }, consent: "Je suis prêt à contribuer sur une base bénévole et non rémunérée", sent: "DEMANDE REÇUE", sentDesc: "Votre potentiel sera étudié. Si vous correspondez, nous vous contacterons via le canal indiqué. Agissez avec discrétion." },
    principles: { tag: "Principes", title: "CE QUE REÇOIT UN RÉSIDENT", items: [ { icon: "Award", title: "Paiement au résultat", desc: "Si l’affaire n’est pas close, aucun paiement n’est retenu. Nous n’ouvrons un circuit que là où l’issue nous paraît certaine." }, { icon: "Medal", title: "Le calibre de l’équipe", desc: "Notre méthodologie repose sur les standards de sécurité du plus haut degré de complexité. L’équipe affectée à une affaire est fixée et ne change pas en cours de route." }, { icon: "FileCheck", title: "Résultat documenté", desc: "À l’issue — un rapport accompagné de pièces justificatives : photographies, vidéos, enregistrements audio et note analytique." }, { icon: "Clock", title: "Temps de réaction", desc: "Le circuit reçoit les demandes 24 heures sur 24. Sur les affaires urgentes, nous réagissons immédiatement — ici, le retard coûte plus cher que l’argent." } ] },
    cta: { title: "L’AFFAIRE SE RÈGLE AVANT DE DEVENIR PUBLIQUE", desc: "Un risque réputationnel coûte moins cher à prévenir qu’à contenir. La première consultation est confidentielle, sans frais et sans engagement de votre part. Plus le circuit est ouvert tôt, plus l’éventail des solutions disponibles est large.", callBtn: "Appeler", consultBtn: "Obtenir une consultation", tgBtn: "Écrire sur Telegram", note: "Ligne sécurisée · 24 heures sur 24 · Confidentialité absolue" },
    legalSection: { tag: "Statut juridique", title: "DANS LE CADRE DE LA LOI. AVEC UNE EFFICACITÉ MAXIMALE.", p1: "CRP « Cascade » exerce son activité en stricte conformité avec la législation de la Fédération de Russie et les normes du droit international.", p2: "Chaque mission est traitée en tenant compte de la juridiction concernée. Nous disposons des connaissances juridiques et des ressources nécessaires pour trouver des solutions efficaces et parfaitement légales, même dans les situations complexes.", points: [ { icon: "Scale", text: "Conformité à la législation de la FR" }, { icon: "Globe2", text: "Normes du droit international" }, { icon: "KeyRound", text: "Solutions juridiques sur mesure pour chaque juridiction" }, { icon: "ShieldCheck", text: "Confidentialité totale et protection juridique du client" } ] },
    contact: { tag: "Contact", title: "DEMANDER LE PROTOCOLE D’ACCÈS", desc: "Les demandes sont traitées en mode fermé. Une ligne disponible 24 h/24 pour les situations qui n’admettent aucun délai.", callBtn: "Appeler", tgBtn: "Écrire sur Telegram", info: [ { icon: "Phone", label: "Ligne sécurisée", value: "+7 913 364-57-48" }, { icon: "Send", label: "Telegram", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "Présence", value: "Moscou · monde entier" }, { icon: "Clock", label: "Disponibilité", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 CRP « Cascade ». Tous droits réservés.", legal: "L'activité est exercée dans le cadre de la législation de la Fédération de Russie.", hint: "Nous agissons strictement dans le cadre légal de la FR et du droit international — nous ne proposons que des solutions légales." },
  },
  ar: {
    nav: { home: "الرئيسية", about: "الشركة", services: "الخدمات", report: "إبلاغ", agent: "تعاون", contact: "اتصل بنا" },
    secure: "سرّي · رسالتك محمية",
    elite: { tag: "الدائرة المغلقة", line1: "نعمل مع عدد محدود من المقيمين.", line2: "ليست المسألة مسألة سعر، بل مسألة موارد: كل دائرة يديرها فريق مخصّص، ولا نقبل من المهام أكثر مما نقدر على إغلاقه بنتيجة مضمونة." },
    hero: { tag: "شركة استخبارات خاصة", title: "كاسكاد", subtitle: "السرّية. الموارد. الطمأنينة.", desc: "السمعة والوقت أثمن من المال. نقبل المسائل التي لا يُقاس فيها ثمن الخطأ بكلفة العمل، وندير كلًّا منها ضمن دائرة مغلقة — حتى تحقيق النتيجة.", btn1: "خدماتنا", btn2: "احصل على استشارة" },
    about: { tag: "عن الشركة", title: "السرّية. الموارد. النتيجة.", p1: "«كاسكاد» شركة استخبارات خاصة. مركز العمليات في موسكو، ونطاق العمل بلا حدود. نتولّى حماية مصالح الأفراد والمؤسسات حيث تعجز الأدوات المعتادة عن الفعل.", p2: "تقوم منهجيتنا على معايير أمن الشركات عند أعلى درجات التعقيد. تُنقل كل مسألة إلى دائرة مغلقة وتُدار وفق بروتوكول: تركيبة فريق ثابتة، ومراحل موثّقة، ونقطة مسؤولية واحدة. وتُنفَّذ الحلول جميعها ضمن الإطار القانوني حصرًا.", stats: [ { num: "15+", label: "سنة من الممارسة" }, { num: "500+", label: "دائرة مغلقة" }, { num: "40+", label: "ولاية قضائية" }, { num: "100%", label: "سرّية" } ] },
    services: { tag: "الخدمات", title: "مجالات العمل", items: [
      { icon: "Search", title: "التحرّي وتحديد الهوية", desc: "نحدّد مواقع الأشخاص والأصول ونبني قاعدة أدلة بجودة إجرائية. نعمل في الصفقات التي لا تحتمل أي قدر من عدم اليقين." },
      { icon: "Shield", title: "الأمن الشخصي", desc: "نحمي مصالح كبار الشخصيات وعائلاتهم: الحماية اللصيقة، وتأمين مسار المفاوضات، وتنسيق التحرك في الأزمات. بما في ذلك خارج الولاية القضائية للاتحاد الروسي." },
      { icon: "Eye", title: "استخبارات الأعمال", desc: "نتحقّق من الطرف المقابل قبل التوقيع لا بعده. هيكل الملكية، والمستفيدون النهائيون، وعلاقات الارتباط، ومؤشرات الاحتيال المؤسسي — قبل أن يعبر رأس المال حدود الصفقة." },
      { icon: "Landmark", title: "القطاع الحكومي", desc: "دعم معلوماتي وتحليلي للجهات الحكومية: إعداد آراء الخبراء، وتقييم المخاطر، والتنسيق مع الجهات المختصة وفق الأنظمة." },
      { icon: "Globe", title: "الدائرة الدولية", desc: "ننسّق مرافقة المهام الدولية والأصول العابرة للحدود. تقييم مخاطر الدول، وتكييف الحل قانونيًا بما يناسب كل ولاية قضائية." },
      { icon: "Lock", title: "الحماية الرقمية", desc: "نؤمّن المعلومات المغلقة: كشف التسريبات، والتحقيق في الحوادث، وتدقيق المحيط الرقمي لكبار المسؤولين في الشركة." },
    ] },
    geo: { tag: "الجغرافيا", title: "نعمل في كل مكان", desc: "من موسكو إلى مناطق النزاع في أقصى الأرض. أينما يلزم الحضور — نحن هناك بالفعل.", zones: [] },
    globe: { detecting: "...جارٍ تحديد الإحداثيات", detected: "أنت ضمن نطاق حضورنا", denied: "لم يتم تحديد الإحداثيات", locate: "حدّد موقعي", lat: "خط العرض", lon: "خط الطول", tracked: "تم استقبال الإشارة · الهدف على الخريطة", nearYou: "حضورنا بالقرب منك: {place}" },
    report: { tag: "قناة مجهولة", title: "الإبلاغ عن جريمة أو إرهاب", warning: "تُرسَل رسالتك عبر قناة آمنة. لا نحفظ عنوان IP أو البيانات الوصفية — يبقى المصدر مجهولاً تماماً.", categories: ["الإرهاب والتطرف", "الجرائم الخطيرة", "الفساد والاحتيال", "معلومات عن مطلوبين", "تهديد أمن الدولة", "أخرى"], form: { category: "فئة الرسالة", region: "المنطقة / الدولة", message: "وصف مفصل (50 حرفاً على الأقل)", btn: "إرسال بشكل مجهول", hint: "لا تدرج بيانات شخصية إذا أردت البقاء مجهولاً" }, encrypting: "...جارٍ الإرسال الآمن", sent: "تم إرسال الرسالة", sentDesc: "وصلت رسالتك إلى مختصّينا عبر قناة آمنة. الجلسة مجهولة، ولم تُحفظ أي بيانات عنك.", error: "تعذّر إرسال الرسالة — تحقق من اتصالك بالإنترنت وحاول مرة أخرى. إذا استمرت المشكلة، اتصل بنا أو راسلنا على تيليجرام." },
    safety: { title: "كيف نحمي هويتك المجهولة", items: [
      { icon: "Lock", text: "الاتصال مُشفَّر (HTTPS). تُنقل البيانات بشكل آمن — ولا يمكن اعتراضها." },
      { icon: "EyeOff", text: "لا نحفظ عنوان IP الخاص بك ولا موقعك ولا آثارك الرقمية. يبقى المصدر مجهولاً." },
      { icon: "ServerCrash", text: "لا تُخزَّن الرسائل على الموقع — تذهب مباشرة إلى قناة آمنة وتُحذف من النظام." },
      { icon: "ShieldCheck", text: "النموذج محمي من الروبوتات والرسائل المزعجة. لأقصى خصوصية، استخدم تيليجرام أو الاتصال الهاتفي." },
    ] },
    faq: { tag: "أسئلة شائعة", title: "إجابات على أهم الأسئلة", items: [
      { q: "هل هذا سرّي حقاً؟", a: "نعم. لا نفصح عن واقعة تواصلك معنا ولا عن مضمونها. تبقى كل البيانات بينك وبين مختصّينا — وهذا أساس عملنا." },
      { q: "كم تكلفة خدماتكم؟", a: "تعتمد التكلفة على المهمة. الاستشارة الأولى مجانية: نقيّم الوضع، ونحدد المدة والسعر، ثم تقرر أنت. دون أي التزام مسبق." },
      { q: "هل تعملون بشكل قانوني؟", a: "نعم. نعمل في التزام صارم بتشريعات الاتحاد الروسي والقانون الدولي. ولكل مهمة نجد حلاً قانونياً." },
      { q: "ما مدى سرعة ردّكم؟", a: "نحن متاحون على مدار الساعة دون عطلات. نستجيب للطلبات العاجلة فوراً — عبر الهاتف أو تيليجرام." },
      { q: "كيف أبدأ؟", a: "اتصل بنا أو راسلنا — صِف الوضع بشكل عام. سنطرح أسئلة توضيحية ونقترح خطة عمل. هذا لا يُلزمك بشيء." },
    ] },
    trust: { title: "يثقون بنا", items: [
      { icon: "CalendarClock", value: "+15", label: "سنة خبرة" },
      { icon: "CircleCheckBig", value: "+500", label: "قضية محلولة" },
      { icon: "Globe2", value: "+40", label: "دولة" },
      { icon: "Clock", value: "24/7", label: "متاحون دائماً" },
      { icon: "ShieldCheck", value: "100%", label: "سرية تامة" },
    ] },
    reassure: "مجاناً · بسرية تامة · دون أي التزام",
    steps: { tag: "البروتوكول", title: "كيف تعمل الدائرة المغلقة", items: [
      { icon: "Phone", title: "بروتوكول الوصول", desc: "خط مؤمّن أو تيليغرام. يكفي بيان جوهر المسألة — ولا تُنقل التفاصيل في هذه المرحلة." },
      { icon: "MessagesSquare", title: "استشارة سرّية", desc: "نقيّم الوضع والأدوات القابلة للتطبيق. دون أي التزام من جانبكم ودون مقابل." },
      { icon: "ClipboardList", title: "إطار العمل", desc: "نثبّت المهمة وتركيبة الفريق والمراحل والمُدد والكلفة. ويبقى قرار الانطلاق لكم وحدكم." },
      { icon: "ShieldCheck", title: "التنفيذ والتقرير", desc: "ندير الدائرة حتى تحقيق النتيجة. وعند الانتهاء — تقرير موثّق وإغلاق للدائرة." },
    ] },
    agent: { tag: "تعاون", title: "كن جزءاً من الفريق", desc: "نبحث عن أصحاب الفعل حول العالم — من يمتلكون وصولاً أو معلومات أو مهارات خاصة، أو يرغبون ببساطة في أن يكونوا نافعين لقضية كبرى. الخبرة العسكرية والميدانية، ومعرفة الأوساط المغلقة، والصلات في الدوائر المناسبة — كل ذلك مُقدَّر. لكلٍّ دوره. هذا ليس عملاً مقابل المال، بل إسهام في قضية أكبر منّا. اتخذ الخطوة الأولى — ونحن نتكفّل بالباقي.", secure: "تُنقل البيانات عبر قناة آمنة. لا نحفظ عنوان IP أو البيانات الوصفية — هويتك محمية بالكامل. التواصل معنا آمن.", fields: { alias: "كيف نخاطبك", contact: "وسيلة تواصل آمنة", skills: "خبرتك، وصولك، منطقتك وإمكاناتك", motivation: "كيف يمكنك أن تكون نافعاً" , btn: "إرسال الطلب" }, consent: "أنا مستعد للمساهمة على أساس تطوعي وبدون مقابل", sent: "تم استلام الطلب", sentDesc: "ستتم دراسة إمكاناتك. إن كنت مناسباً — سنتواصل معك عبر القناة المحددة. تصرّف بتكتم." },
    principles: { tag: "المبادئ", title: "ما يحصل عليه المقيم", items: [ { icon: "Award", title: "الدفع مقابل النتيجة", desc: "إن لم تُغلق المهمة، لا يُحتجز أي مبلغ. ولا نفتح دائرة إلا حيث نثق بالنتيجة." }, { icon: "Medal", title: "مستوى الفريق", desc: "تقوم منهجيتنا على معايير أمنية عند أعلى درجات التعقيد. وتُثبَّت تركيبة الفريق المكلّف بالمهمة ولا تتغيّر أثناء العمل." }, { icon: "FileCheck", title: "نتيجة موثّقة", desc: "عند الانتهاء — تقرير مرفق بمواد مثبتة: صور وفيديو وتسجيلات صوتية ومذكرة تحليلية." }, { icon: "Clock", title: "زمن الاستجابة", desc: "تستقبل الدائرة الطلبات على مدار الساعة. وفي المسائل العاجلة نستجيب فورًا — فالتأخير هنا أغلى من المال." } ] },
    cta: { title: "تُحسم المسألة قبل أن تصبح علنية", desc: "درء المخاطر التي تمسّ السمعة أقل كلفة من احتوائها. الاستشارة الأولى سرّية، بلا مقابل ولا تُلزمكم بشيء. وكلما فُتحت الدائرة مبكرًا اتّسع نطاق الحلول المتاحة.", callBtn: "اتصل بنا", consultBtn: "احصل على استشارة", tgBtn: "راسلنا على تيليغرام", note: "خط مؤمّن · على مدار الساعة · سرّية تامة" },
    legalSection: { tag: "الوضع القانوني", title: "ضمن إطار القانون. بأقصى قدر من الفعالية.", p1: "تمارس شركة «كاسكاد» نشاطها في التزام صارم بتشريعات الاتحاد الروسي وقواعد القانون الدولي.", p2: "تُعالَج كل مهمة مع مراعاة الولاية القضائية المحددة. نمتلك المعرفة القانونية والموارد اللازمة لإيجاد حلول فعّالة وقانونية بالكامل حتى في المواقف المعقدة.", points: [ { icon: "Scale", text: "الامتثال لتشريعات الاتحاد الروسي" }, { icon: "Globe2", text: "قواعد القانون الدولي" }, { icon: "KeyRound", text: "حلول قانونية مخصصة لكل ولاية قضائية" }, { icon: "ShieldCheck", text: "سرية تامة وحماية قانونية للعميل" } ] },
    contact: { tag: "اتصل بنا", title: "طلب بروتوكول الوصول", desc: "تُعالَج الطلبات في وضع مغلق. خط متاح على مدار الساعة للحالات التي لا تحتمل التأجيل.", callBtn: "اتصل بنا", tgBtn: "راسلنا على تيليغرام", info: [ { icon: "Phone", label: "خط مؤمّن", value: "+7 913 364-57-48" }, { icon: "Send", label: "تيليغرام", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "الحضور", value: "موسكو · العالم أجمع" }, { icon: "Clock", label: "أوقات العمل", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 شركة «كاسكاد». جميع الحقوق محفوظة.", legal: "يُمارَس النشاط ضمن تشريعات الاتحاد الروسي.", hint: "نعمل بشكل صارم ضمن الإطار القانوني للاتحاد الروسي والقانون الدولي — ولا نقدّم سوى حلول قانونية." },
  },
  zh: {
    nav: { home: "首页", about: "公司", services: "服务", report: "举报", agent: "合作", contact: "联系" },
    secure: "保密 · 您的信息受保护",
    elite: { tag: "封闭回路", line1: "我们只与数量有限的常驻客户合作。", line2: "这并非价格问题，而是资源问题：每一条回路均由专属小组负责，我们绝不承接超出自身能力、无法以确定结果收束的委托。" },
    hero: { tag: "私人情报公司", title: "瀑布", subtitle: "保密。资源。安心。", desc: "声誉与时间比金钱更昂贵。我们承接那些失误代价远非服务对价所能衡量的事务，并在封闭回路中推进——直至结果达成。", btn1: "我们的服务", btn2: "获取咨询" },
    about: { tag: "关于", title: "保密。资源。结果。", p1: "「瀑布」为私人情报公司。运营中心设于莫斯科，业务地域不设边界。在常规手段已然失效之处，我们为个人与机构守护利益。", p2: "我们的方法论建立在最高复杂等级的企业安全标准之上。每一项事务均被纳入封闭回路，并依既定协议推进：固定的小组编成、可追溯的阶段记录、唯一的责任主体。所有方案均严格在法律框架内实施。", stats: [ { num: "15+", label: "从业年限" }, { num: "500+", label: "已完结回路" }, { num: "40+", label: "司法辖区" }, { num: "100%", label: "保密" } ] },
    services: { tag: "服务", title: "业务领域", items: [
      { icon: "Search", title: "查找与身份确认", desc: "我们确定人员与资产的所在，并构建具备诉讼效力的证据体系。我们承接的交易，其利害不容许任何不确定性。" },
      { icon: "Shield", title: "人身安全", desc: "我们守护要人及其家人的利益：随身护卫、谈判过程的安全保障、危机情形下的行动协调，亦包括俄罗斯联邦司法管辖范围之外。" },
      { icon: "Eye", title: "商业情报", desc: "我们在签约之前核查交易对手，而非事后。股权结构、最终受益人、关联关系、企业欺诈迹象——皆于资本越过交易界线之前查明。" },
      { icon: "Landmark", title: "政府领域", desc: "为国家机构提供信息与分析支持：专家意见、风险评估、依规与相关部门协作。" },
      { icon: "Globe", title: "国际回路", desc: "我们统筹国际任务与跨境资产的保障工作。国别风险评估，并针对具体司法辖区完成方案的法律配置。" },
      { icon: "Lock", title: "数字防护", desc: "我们保护封闭信息：泄露侦测、事件调查、公司要人数字边界的安全审计。" },
    ] },
    geo: { tag: "地理", title: "我们无处不在", desc: "从莫斯科到地球另一端的冲突区。哪里需要存在——我们已在那里。", zones: [] },
    globe: { detecting: "正在确定坐标...", detected: "您处于我们的覆盖范围内", denied: "未能确定坐标", locate: "定位我的位置", lat: "纬度", lon: "经度", tracked: "已接收信号 · 目标已在地图上", nearYou: "我们就在您附近：{place}" },
    report: { tag: "匿名通道", title: "举报犯罪或恐怖活动", warning: "您的信息通过安全通道传输。我们不保存您的 IP 地址和元数据——来源完全匿名。", categories: ["恐怖主义与极端主义", "严重犯罪", "腐败与欺诈", "通缉人员信息", "国家安全威胁", "其他"], form: { category: "信息类别", region: "地区 / 国家", message: "详细描述（至少 50 个字符）", btn: "匿名发送", hint: "如需保持匿名，请勿填写个人信息" }, encrypting: "安全传输中...", sent: "信息已发送", sentDesc: "您的信息已通过安全通道送达我们的专员。会话匿名，不保存任何关于您的数据。", error: "发送失败 — 请检查网络连接后重试。如仍无法发送，请致电或通过 Telegram 联系我们。" },
    safety: { title: "我们如何保护您的匿名性", items: [
      { icon: "Lock", text: "连接已加密（HTTPS）。数据以安全方式传输——无法被截获。" },
      { icon: "EyeOff", text: "我们不保存您的 IP 地址、位置和数字痕迹。来源保持匿名。" },
      { icon: "ServerCrash", text: "消息不会存储在网站上——它们直接发送到安全通道并从系统中删除。" },
      { icon: "ShieldCheck", text: "表单已防护机器人和垃圾信息。若需最高隐私，请使用 Telegram 或电话。" },
    ] },
    faq: { tag: "常见问题", title: "关键问题解答", items: [
      { q: "这真的保密吗？", a: "是的。我们绝不透露您咨询的事实及其内容。所有数据仅在您与我们的专员之间——这是我们工作的根基。" },
      { q: "你们的服务收费多少？", a: "费用取决于任务。首次咨询免费：我们评估情况、说明周期和价格，之后由您决定。事先无任何义务。" },
      { q: "你们合法经营吗？", a: "是的。我们严格遵守俄罗斯联邦法律和国际法。对每项任务，我们都找到合法的解决方案。" },
      { q: "你们回应有多快？", a: "我们全天候待命，无休息日。紧急咨询立即回应——通过电话或 Telegram。" },
      { q: "如何开始？", a: "致电或发消息给我们——大致描述您的情况。我们会提出澄清问题并给出行动方案。这对您没有任何约束。" },
    ] },
    trust: { title: "深受信赖", items: [
      { icon: "CalendarClock", value: "15+", label: "年经验" },
      { icon: "CircleCheckBig", value: "500+", label: "已解决案件" },
      { icon: "Globe2", value: "40+", label: "覆盖国家" },
      { icon: "Clock", value: "24/7", label: "全天候待命" },
      { icon: "ShieldCheck", value: "100%", label: "绝对保密" },
    ] },
    reassure: "免费 · 保密 · 无任何义务",
    steps: { tag: "协议", title: "封闭回路如何运作", items: [
      { icon: "Phone", title: "接入协议", desc: "加密专线或 Telegram。只需说明事务实质——此阶段无须透露任何细节。" },
      { icon: "MessagesSquare", title: "保密咨询", desc: "我们评估情势与可用手段。您无需承担任何义务，亦不产生费用。" },
      { icon: "ClipboardList", title: "工作规程", desc: "我们确定任务、小组编成、阶段、时限与费用。是否启动，决定权在您。" },
      { icon: "ShieldCheck", title: "执行与报告", desc: "我们将回路推进至结果达成。完成之后——提交书面报告，并关闭回路。" },
    ] },
    agent: { tag: "合作", title: "成为团队的一员", desc: "我们在全球寻找行动派——拥有渠道、信息、特殊技能，或只是愿意为伟大事业尽一份力的人。军事与行动经验、对封闭领域的了解、在关键圈层的人脉——这些都备受重视。每个人都有自己的角色。这不是为钱工作，而是为比我们更宏大的事业贡献力量。迈出第一步——其余交给我们。", secure: "数据通过安全通道传输。我们不保存您的 IP 地址和元数据——您的匿名性受到完全保护。联系我们是安全的。", fields: { alias: "如何称呼您", contact: "安全的联系方式", skills: "您的经验、渠道、所在地区与能力", motivation: "您能提供怎样的帮助", btn: "提交申请" }, consent: "我愿意以自愿且无偿的方式提供协助", sent: "申请已接收", sentDesc: "我们将评估您的潜力。若您合适，将通过指定渠道与您联系。请保持低调。" },
    principles: { tag: "原则", title: "常驻客户所获得的", items: [ { icon: "Award", title: "按结果付费", desc: "任务未能完结，则不留取任何费用。唯有在对结果有把握之处，我们才开启回路。" }, { icon: "Medal", title: "团队水准", desc: "我们的方法论建立在最高复杂等级的安全标准之上。承接任务的小组一经确定，中途绝不更换。" }, { icon: "FileCheck", title: "可查证的成果", desc: "完成之后——附具佐证材料的报告：照片、视频、录音及分析摘要。" }, { icon: "Clock", title: "响应时效", desc: "回路全天候受理委托。紧急事务即刻响应——在此，迟疑的代价高于金钱。" } ] },
    cta: { title: "在事态公开之前，问题已被解决", desc: "声誉风险，防范远比化解更为经济。首次咨询保密、不收取费用，亦不使您承担任何义务。回路开启得越早，可选方案的范围便越宽。", callBtn: "致电", consultBtn: "获取咨询", tgBtn: "Telegram 联系", note: "加密专线 · 全天候 · 完全保密" },
    legalSection: { tag: "法律地位", title: "在法律框架内。发挥最大成效。", p1: "「瀑布」严格遵守俄罗斯联邦法律及国际法准则开展活动。", p2: "每一项任务都会结合具体司法管辖区加以处理。我们拥有相应的法律知识与资源，即使在复杂情形下也能找到有效且完全合法的解决方案。", points: [ { icon: "Scale", text: "符合俄罗斯联邦法律" }, { icon: "Globe2", text: "国际法准则" }, { icon: "KeyRound", text: "为每个司法管辖区量身定制的法律方案" }, { icon: "ShieldCheck", text: "对客户的完全保密与法律保护" } ] },
    contact: { tag: "联系", title: "申请接入协议", desc: "所有委托均以封闭方式处理。全天候专线，应对不容拖延的情势。", callBtn: "致电", tgBtn: "Telegram 联系", info: [ { icon: "Phone", label: "加密专线", value: "+7 913 364-57-48" }, { icon: "Send", label: "Telegram", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "驻在地", value: "莫斯科 · 全球" }, { icon: "Clock", label: "受理时间", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 「瀑布」私人情报公司。版权所有。", legal: "活动在俄罗斯联邦法律框架内开展。", hint: "我们严格在俄罗斯联邦及国际法的法律框架内行事——只提供合法的解决方案。" },
  },
  he: {
    nav: { home: "ראשי", about: "החברה", services: "שירותים", report: "דיווח", agent: "שיתוף פעולה", contact: "צור קשר" },
    secure: "חסוי · ההודעה שלך מוגנת",
    elite: { tag: "מעגל סגור", line1: "אנו עובדים עם מספר מצומצם של רזידנטים.", line2: "אין זו שאלה של מחיר, אלא שאלה של משאב: כל מעגל מנוהל בידי צוות ייעודי, ואיננו נוטלים על עצמנו יותר משאנו יכולים לסגור בתוצאה מובטחת." },
    hero: { tag: "חברת מודיעין פרטית", title: "קסקאד", subtitle: "חשאיות. משאב. שלוות נפש.", desc: "מוניטין וזמן יקרים מכסף. אנו נוטלים על עצמנו עניינים שמחיר הטעות בהם אינו בר־השוואה לעלות העבודה, ומנהלים אותם במעגל סגור — עד לתוצאה.", btn1: "השירותים שלנו", btn2: "לקבלת ייעוץ" },
    about: { tag: "אודות", title: "חשאיות. משאב. תוצאה.", p1: "«קסקאד» היא חברת מודיעין פרטית. מרכז המבצעים במוסקבה, ופריסת הפעילות — ללא גבולות. אנו מגנים על האינטרסים של אנשים פרטיים ושל ארגונים במקום שבו הכלים המקובלים כבר אינם פועלים.", p2: "המתודולוגיה שלנו נשענת על תקני אבטחה ארגונית ברמת המורכבות הגבוהה ביותר. כל עניין מועבר למעגל סגור ומנוהל על פי פרוטוקול: הרכב צוות קבוע, שלבים מתועדים ונקודת אחריות אחת. כל הפתרונות מיושמים אך ורק במסגרת החוק.", stats: [ { num: "15+", label: "שנות פעילות" }, { num: "500+", label: "מעגלים שנסגרו" }, { num: "40+", label: "תחומי שיפוט" }, { num: "100%", label: "חשאיות" } ] },
    services: { tag: "שירותים", title: "תחומי הפעילות", items: [
      { icon: "Search", title: "איתור וזיהוי", desc: "אנו מאתרים אנשים ונכסים ובונים תשתית ראיות ברמה משפטית. אנו פועלים בעסקאות שבהן היקף הסיכון אינו מותיר מקום לאי־ודאות." },
      { icon: "Shield", title: "אבטחה אישית", desc: "אנו מגנים על האינטרסים של בכירים ובני משפחותיהם: אבטחה צמודה, הבטחת הליך המשא ומתן ותיאום פעולה בעת משבר. לרבות מחוץ לתחום השיפוט של הפדרציה הרוסית." },
      { icon: "Eye", title: "מודיעין עסקי", desc: "אנו בודקים את הצד שכנגד לפני החתימה, לא אחריה. מבנה הבעלות, הנהנים הסופיים, זיקות וסימנים להונאה תאגידית — בטרם חצה ההון את גבול העסקה." },
      { icon: "Landmark", title: "המגזר הממשלתי", desc: "מענה מודיעיני ואנליטי לגופים ממשלתיים: חוות דעת מומחה, הערכת סיכונים ועבודה מול הרשויות הרלוונטיות על פי נהלים." },
      { icon: "Globe", title: "המעגל הבינלאומי", desc: "אנו מתאמים ליווי של משימות בינלאומיות ושל נכסים חוצי גבולות. הערכת סיכוני מדינה והתאמה משפטית של הפתרון לכל תחום שיפוט." },
      { icon: "Lock", title: "הגנה דיגיטלית", desc: "אנו מבטיחים את הגנת המידע הסגור: איתור דליפות, חקירת אירועים וביקורת על המרחב הדיגיטלי של בכירי החברה." },
    ] },
    geo: { tag: "גאוגרפיה", title: "אנו פועלים בכל מקום", desc: "ממוסקבה ועד אזורי סכסוך בקצה השני של העולם. היכן שנדרשת נוכחות — אנו כבר שם.", zones: [] },
    globe: { detecting: "...מאתר קואורדינטות", detected: "אתה בתחום הנוכחות שלנו", denied: "הקואורדינטות לא זוהו", locate: "אתר את מיקומי", lat: "קו רוחב", lon: "קו אורך", tracked: "האות התקבל · המטרה על המפה", nearYou: "הנוכחות שלנו לידך: {place}" },
    report: { tag: "ערוץ אנונימי", title: "דיווח על פשע או טרור", warning: "ההודעה שלך נשלחת בערוץ מאובטח. איננו שומרים כתובת IP או נתוני מטא — המקור נשאר אנונימי לחלוטין.", categories: ["טרור וקיצוניות", "פשעים חמורים", "שחיתות והונאה", "מידע על מבוקשים", "איום על ביטחון המדינה", "אחר"], form: { category: "קטגוריית ההודעה", region: "אזור / מדינה", message: "תיאור מפורט (50 תווים לפחות)", btn: "שליחה אנונימית", hint: "אל תכלול פרטים אישיים אם ברצונך להישאר אנונימי" }, encrypting: "...שליחה מאובטחת", sent: "ההודעה נשלחה", sentDesc: "ההודעה שלך הועברה למומחים שלנו בערוץ מאובטח. הסשן אנונימי, ולא נשמרו נתונים אודותיך.", error: "שליחת ההודעה נכשלה — בדוק את חיבור האינטרנט ונסה שוב. אם זה עדיין לא עובד, התקשר אלינו או כתוב לנו ב-Telegram." },
    safety: { title: "כיצד אנו מגנים על האנונימיות שלך", items: [
      { icon: "Lock", text: "החיבור מוצפן (HTTPS). הנתונים מועברים באופן מאובטח — לא ניתן ליירט אותם." },
      { icon: "EyeOff", text: "איננו שומרים את כתובת ה-IP, המיקום או העקבות הדיגיטליים שלך. המקור נשאר אנונימי." },
      { icon: "ServerCrash", text: "ההודעות אינן נשמרות באתר — הן נשלחות ישירות לערוץ מאובטח ונמחקות מהמערכת." },
      { icon: "ShieldCheck", text: "הטופס מוגן מפני בוטים וספאם. לפרטיות מרבית, השתמש בטלגרם או בשיחת טלפון." },
    ] },
    faq: { tag: "שאלות נפוצות", title: "תשובות לשאלות המרכזיות", items: [
      { q: "האם זה באמת חסוי?", a: "כן. איננו חושפים את עצם הפנייה או את תוכנה. כל הנתונים נשארים ביניכם לבין המומחים שלנו — זהו הבסיס לעבודתנו." },
      { q: "כמה עולים השירותים שלכם?", a: "העלות תלויה במשימה. הייעוץ הראשון חינם: אנו מעריכים את המצב, מציינים לוחות זמנים ומחיר, ורק אז אתם מחליטים. ללא כל התחייבות מראש." },
      { q: "האם אתם פועלים כחוק?", a: "כן. אנו פועלים בהתאם מחמיר לחקיקת הפדרציה הרוסית ולמשפט הבינלאומי. לכל משימה אנו מוצאים פתרון חוקי." },
      { q: "כמה מהר אתם מגיבים?", a: "אנו זמינים מסביב לשעון, ללא ימי מנוחה. לפניות דחופות אנו מגיבים מיד — בטלפון או בטלגרם." },
      { q: "איך מתחילים?", a: "התקשרו או כתבו לנו — תארו את המצב באופן כללי. נשאל שאלות הבהרה ונציע תוכנית פעולה. זה אינו מחייב אתכם בכלום." },
    ] },
    trust: { title: "בוטחים בנו", items: [
      { icon: "CalendarClock", value: "15+", label: "שנות ניסיון" },
      { icon: "CircleCheckBig", value: "500+", label: "תיקים שנפתרו" },
      { icon: "Globe2", value: "40+", label: "מדינות" },
      { icon: "Clock", value: "24/7", label: "זמינות" },
      { icon: "ShieldCheck", value: "100%", label: "חיסיון מלא" },
    ] },
    reassure: "חינם · חסוי · ללא כל התחייבות",
    steps: { tag: "פרוטוקול", title: "כיצד פועל המעגל הסגור", items: [
      { icon: "Phone", title: "פרוטוקול גישה", desc: "קו מאובטח או טלגרם. די בהצגת מהות העניין — בשלב זה אין מוסרים פרטים." },
      { icon: "MessagesSquare", title: "ייעוץ חסוי", desc: "אנו בוחנים את המצב ואת הכלים הישימים. ללא כל התחייבות מצדכם וללא תשלום." },
      { icon: "ClipboardList", title: "מסגרת ההתקשרות", desc: "אנו מקבעים את המשימה, הרכב הצוות, השלבים, לוחות הזמנים והעלות. ההחלטה לצאת לדרך נותרת בידיכם." },
      { icon: "ShieldCheck", title: "ביצוע ודיווח", desc: "אנו מנהלים את המעגל עד לתוצאה. בסיומו — דוח מתועד וסגירת המעגל." },
    ] },
    agent: { tag: "שיתוף פעולה", title: "הצטרפו לצוות", desc: "אנו מחפשים אנשי מעשה בכל העולם — בעלי גישה, מידע, כישורים מיוחדים, או כאלה שפשוט רוצים להועיל למטרה גדולה. ניסיון צבאי ומבצעי, היכרות עם מעגלים סגורים, קשרים בחוגים הנכונים — כל אלה מוערכים. לכל אחד יש תפקיד. זו אינה עבודה תמורת כסף, אלא תרומה למשהו גדול מאיתנו. עשו את הצעד הראשון — את השאר ניקח על עצמנו.", secure: "הנתונים נשלחים בערוץ מאובטח. איננו שומרים את כתובת ה-IP או את המטא-נתונים — האנונימיות שלכם מוגנת לחלוטין. לפנות אלינו זה בטוח.", fields: { alias: "כיצד לפנות אליך", contact: "אמצעי קשר מאובטח", skills: "הניסיון, הגישות, האזור והיכולות שלך", motivation: "כיצד תוכל להועיל", btn: "שליחת בקשה" }, consent: "אני מוכן לסייע על בסיס התנדבותי וללא תמורה", sent: "הבקשה התקבלה", sentDesc: "הפוטנציאל שלך ייבחן. אם תתאים — ניצור איתך קשר דרך הערוץ שצוין. פעל בדיסקרטיות." },
    principles: { tag: "עקרונות", title: "מה מקבל הרזידנט", items: [ { icon: "Award", title: "תשלום לפי תוצאה", desc: "משימה שלא נסגרה — אין מחזיקים בתשלום. אנו פותחים מעגל רק במקום שבו אנו בטוחים בתוצאה." }, { icon: "Medal", title: "רמת הצוות", desc: "המתודולוגיה שלנו נשענת על תקני אבטחה ברמת המורכבות הגבוהה ביותר. הצוות שהוקצה למשימה נקבע מראש ואינו מתחלף במהלך העבודה." }, { icon: "FileCheck", title: "תוצאה מתועדת", desc: "בסיום — דוח בצירוף חומרים תומכים: תצלומים, וידאו, הקלטות וסקירה אנליטית." }, { icon: "Clock", title: "זמן תגובה", desc: "המעגל קולט פניות מסביב לשעון. בעניינים דחופים אנו מגיבים מיידית — כאן, עיכוב יקר מכסף." } ] },
    cta: { title: "העניין נפתר בטרם יהפוך לפומבי", desc: "סיכון מוניטין זול יותר למנוע מאשר להכיל. הייעוץ הראשון חסוי, ניתן ללא תשלום ואינו מחייב אתכם בדבר. ככל שהמעגל נפתח מוקדם יותר, כך רחב יותר מגוון הפתרונות האפשריים.", callBtn: "להתקשר", consultBtn: "לקבלת ייעוץ", tgBtn: "לכתוב בטלגרם", note: "קו מאובטח · מסביב לשעון · חשאיות מלאה" },
    legalSection: { tag: "מעמד משפטי", title: "במסגרת החוק. עם התועלת המרבית.", p1: "חברת «קסקאד» פועלת בהתאם מחמיר לחקיקת הפדרציה הרוסית ולנורמות המשפט הבינלאומי.", p2: "כל משימה מטופלת תוך התחשבות בתחום השיפוט הספציפי. ברשותנו הידע המשפטי והמשאבים למצוא פתרונות יעילים וחוקיים לחלוטין אף במצבים מורכבים.", points: [ { icon: "Scale", text: "ציות לחקיקת הפדרציה הרוסית" }, { icon: "Globe2", text: "נורמות המשפט הבינלאומי" }, { icon: "KeyRound", text: "פתרונות משפטיים מותאמים לכל תחום שיפוט" }, { icon: "ShieldCheck", text: "חיסיון מלא והגנה משפטית על הלקוח" } ] },
    contact: { tag: "צור קשר", title: "בקשת פרוטוקול גישה", desc: "הפניות מטופלות במתכונת סגורה. קו זמין מסביב לשעון למצבים שאינם סובלים דיחוי.", callBtn: "להתקשר", tgBtn: "לכתוב בטלגרם", info: [ { icon: "Phone", label: "קו מאובטח", value: "+7 913 364-57-48" }, { icon: "Send", label: "טלגרם", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "נוכחות", value: "מוסקבה · ברחבי העולם" }, { icon: "Clock", label: "זמינות", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 חברת «קסקאד». כל הזכויות שמורות.", legal: "הפעילות מתבצעת במסגרת חוקי הפדרציה הרוסית.", hint: "אנו פועלים אך ורק במסגרת החוקית של הפדרציה הרוסית והמשפט הבינלאומי — ומציעים פתרונות חוקיים בלבד." },
  },
  ja: {
    nav: { home: "ホーム", about: "会社", services: "サービス", report: "通報", agent: "協力", contact: "連絡先" },
    secure: "機密 · あなたのメッセージは保護されています",
    elite: { tag: "クローズド・サーキット", line1: "当社が承るのは、限られた数のレジデントのみです。", line2: "これは価格の問題ではなく、リソースの問題です。各サーキットは専任のチームが担い、確実な結果をもって完結できる以上の案件をお受けすることはありません。" },
    hero: { tag: "民間諜報会社", title: "カスケード", subtitle: "守秘。リソース。静穏。", desc: "評判と時間は金銭に勝ります。当社は、誤りの代償が業務の対価とは比較にならない案件をお引き受けし、クローズド・サーキットのもとで結果に至るまで遂行いたします。", btn1: "サービス一覧", btn2: "ご相談はこちら" },
    about: { tag: "会社概要", title: "守秘。リソース。結果。", p1: "民間諜報会社「カスケード」。オペレーションセンターはモスクワ、活動地域に制限はありません。通常の手段が通用しない領域において、個人および法人の利益を保全いたします。", p2: "当社の方法論は、最高難度の企業セキュリティ基準に基づいています。すべての案件はクローズド・サーキットへ移管され、定められたプロトコルに従って進行します。固定されたチーム編成、記録された各段階、単一の責任主体。すべての解決策は、法の枠内においてのみ実行されます。", stats: [ { num: "15+", label: "実務年数" }, { num: "500+", label: "完結したサーキット" }, { num: "40+", label: "法域" }, { num: "100%", label: "守秘性" } ] },
    services: { tag: "サービス", title: "活動分野", items: [
      { icon: "Search", title: "捜索と特定", desc: "人物および資産の所在を特定し、訴訟に耐えうる証拠を構築いたします。不確実性の許されない取引においてこそ、当社は力を発揮します。" },
      { icon: "Shield", title: "身辺警護", desc: "要人およびご家族の利益をお守りします。身辺警護、交渉過程の保全、危機時の行動調整。ロシア連邦の法域外においても対応いたします。" },
      { icon: "Eye", title: "ビジネス・インテリジェンス", desc: "取引相手の調査は、署名の後ではなく前に行います。資本が取引の一線を越える前に、保有構造、最終受益者、関連関係、企業不正の兆候を明らかにいたします。" },
      { icon: "Landmark", title: "官公庁部門", desc: "政府機関への情報・分析支援。専門的所見の作成、リスク評価、関係省庁との規程に沿った連携。" },
      { icon: "Globe", title: "国際サーキット", desc: "国際的な任務および越境資産の支援を統括いたします。カントリーリスクの評価と、個々の法域に応じた法的構成の設計。" },
      { icon: "Lock", title: "デジタル保護", desc: "非公開情報を保全いたします。情報漏洩の検知、インシデントの調査、経営中枢のデジタル領域の監査。" },
    ] },
    geo: { tag: "活動地域", title: "私たちはどこにでもいる", desc: "モスクワから地球の裏側の紛争地帯まで。存在が必要とされる場所に——私たちはすでにいます。", zones: [] },
    globe: { detecting: "座標を特定中...", detected: "あなたは当社の活動圏内にいます", denied: "座標を特定できませんでした", locate: "現在地を特定", lat: "緯度", lon: "経度", tracked: "信号を受信 · 対象を地図に表示", nearYou: "あなたの近くの当社拠点：{place}" },
    report: { tag: "匿名チャネル", title: "犯罪・テロの通報", warning: "メッセージは安全な経路で送信されます。IPアドレスやメタデータは保存しません——発信元は完全に匿名のままです。", categories: ["テロ・過激主義", "重大犯罪", "汚職・詐欺", "指名手配者の情報", "国家安全への脅威", "その他"], form: { category: "メッセージの種類", region: "地域 / 国", message: "詳細な説明（50文字以上）", btn: "匿名で送信", hint: "匿名を保ちたい場合は個人情報を記載しないでください" }, encrypting: "安全に送信中...", sent: "メッセージを送信しました", sentDesc: "あなたのメッセージは安全な経路で担当者に届きました。セッションは匿名で、あなたに関するデータは保存されません。", error: "送信できませんでした — インターネット接続を確認して再度お試しください。それでも送れない場合は、お電話またはTelegramでご連絡ください。" },
    safety: { title: "あなたの匿名性を守る方法", items: [
      { icon: "Lock", text: "接続は暗号化されています（HTTPS）。データは安全に送信され、傍受できません。" },
      { icon: "EyeOff", text: "IPアドレス、位置情報、デジタルの痕跡は保存しません。発信元は匿名のままです。" },
      { icon: "ServerCrash", text: "メッセージはサイトに保存されず、直接安全な経路へ送られ、システムから削除されます。" },
      { icon: "ShieldCheck", text: "フォームはボットとスパムから保護されています。最大限のプライバシーには Telegram か電話をご利用ください。" },
    ] },
    faq: { tag: "よくある質問", title: "主な質問への回答", items: [
      { q: "本当に機密は守られますか？", a: "はい。ご相談の事実もその内容も、一切口外しません。すべてのデータはあなたと担当者の間だけに留まります——これが私たちの仕事の基盤です。" },
      { q: "料金はいくらですか？", a: "費用は案件によって異なります。初回相談は無料です。状況を評価し、期間と料金を提示し、そのうえでお客様が判断します。事前の義務は一切ありません。" },
      { q: "合法的に活動していますか？", a: "はい。ロシア連邦の法令および国際法を厳格に遵守して活動しています。あらゆる案件で合法的な解決策を見出します。" },
      { q: "どのくらい早く対応しますか？", a: "24時間・年中無休で対応しています。緊急のご相談には即座に対応します——お電話または Telegram で。" },
      { q: "どう始めればよいですか？", a: "お電話またはメッセージで——状況を大まかにお伝えください。確認のための質問をし、行動計画をご提案します。これによる義務は一切ありません。" },
    ] },
    trust: { title: "信頼されています", items: [
      { icon: "CalendarClock", value: "15+", label: "年の実績" },
      { icon: "CircleCheckBig", value: "500+", label: "解決した案件" },
      { icon: "Globe2", value: "40+", label: "活動国" },
      { icon: "Clock", value: "24/7", label: "対応可能" },
      { icon: "ShieldCheck", value: "100%", label: "機密保持" },
    ] },
    reassure: "無料 · 機密厳守 · 義務は一切なし",
    steps: { tag: "プロトコル", title: "クローズド・サーキットの仕組み", items: [
      { icon: "Phone", title: "アクセス・プロトコル", desc: "保護回線またはTelegram。ご用件の要旨をお伝えいただくだけで十分です。この段階で詳細をお伝えいただく必要はございません。" },
      { icon: "MessagesSquare", title: "秘密保持のもとでのご相談", desc: "状況と適用しうる手段を見極めます。お客様に義務は生じず、費用も発生いたしません。" },
      { icon: "ClipboardList", title: "業務条件の確定", desc: "課題、チーム編成、段階、期間、費用を確定いたします。着手のご判断はお客様に委ねられます。" },
      { icon: "ShieldCheck", title: "遂行と報告", desc: "結果に至るまでサーキットを運用いたします。完了後、記録された報告書をご提出し、サーキットを閉じます。" },
    ] },
    agent: { tag: "協力", title: "チームの一員になる", desc: "私たちは世界中で「行動する人」を求めています——アクセス、情報、特別な技能をお持ちの方、あるいは大いなる目的に役立ちたいと願う方へ。軍事・作戦の経験、閉ざされた領域への知見、適切な人脈——そのすべてが評価されます。誰にでも役割があります。これは金銭のための仕事ではなく、私たち自身より大きな目的への貢献です。最初の一歩を——あとは私たちが引き受けます。", secure: "データは安全な経路で送信されます。IPアドレスやメタデータは保存しません——あなたの匿名性は完全に守られます。私たちへの連絡は安全です。", fields: { alias: "お呼びする名前", contact: "安全な連絡手段", skills: "ご経験、アクセス、地域、可能性", motivation: "どのように役立てるか", btn: "申し込む" }, consent: "私は自発的かつ無報酬で協力する用意があります", sent: "申し込みを受領しました", sentDesc: "あなたの可能性を検討します。適任であれば、指定の経路でご連絡します。慎重に行動してください。" },
    principles: { tag: "行動原則", title: "レジデントが得られるもの", items: [ { icon: "Award", title: "結果に対する報酬", desc: "課題が完結しない場合、報酬を留め置くことはございません。結果に確信を持てる案件においてのみ、サーキットを開きます。" }, { icon: "Medal", title: "チームの水準", desc: "当社の方法論は、最高難度のセキュリティ基準に基づいています。案件に充てられるチームは固定され、途中で交代することはありません。" }, { icon: "FileCheck", title: "記録された成果", desc: "完了時には、裏付け資料を添えた報告書をご提出いたします。写真、映像、音声、および分析所見。" }, { icon: "Clock", title: "対応時間", desc: "サーキットは二十四時間体制でご依頼を受け付けます。緊急の案件には即時に対応いたします。ここでは、遅延こそが金銭より高くつくためです。" } ] },
    cta: { title: "問題は、公になる前に解決される", desc: "評判に関わるリスクは、収束させるよりも未然に防ぐほうが小さな代償で済みます。初回のご相談は秘密厳守、費用は発生せず、いかなる義務も生じません。サーキットを開くのが早いほど、選びうる解決策の幅は広がります。", callBtn: "お電話", consultBtn: "ご相談はこちら", tgBtn: "Telegramで連絡", note: "保護回線 · 二十四時間体制 · 完全な守秘" },
    legalSection: { tag: "法的地位", title: "法の枠内で。最大の成果を。", p1: "「カスケード」はロシア連邦の法令および国際法の規範を厳格に遵守して活動しています。", p2: "あらゆる案件は、対象となる管轄区域を踏まえて対応します。私たちは、複雑な状況においても効果的かつ完全に合法な解決策を見出すための法的知識とリソースを有しています。", points: [ { icon: "Scale", text: "ロシア連邦法令への準拠" }, { icon: "Globe2", text: "国際法の規範" }, { icon: "KeyRound", text: "各管轄区域に合わせた法的ソリューション" }, { icon: "ShieldCheck", text: "依頼者の完全な機密保持と法的保護" } ] },
    contact: { tag: "連絡先", title: "アクセス・プロトコルの申請", desc: "ご依頼はすべて非公開の体制で扱われます。猶予の許されない状況のため、二十四時間対応の回線をご用意しています。", callBtn: "お電話", tgBtn: "Telegramで連絡", info: [ { icon: "Phone", label: "保護回線", value: "+7 913 364-57-48" }, { icon: "Send", label: "Telegram", value: "@PIC_STRUNA" }, { icon: "MapPin", label: "拠点", value: "モスクワ · 全世界" }, { icon: "Clock", label: "受付時間", value: "24 / 7" } ] },
    footer: { rights: "© 2015–2026 民間諜報会社「カスケード」。無断転載禁止。", legal: "活動はロシア連邦法の枠内で行われます。", hint: "私たちはロシア連邦法および国際法の枠内で厳格に活動し——合法な解決策のみをご提案します。" },
  },
};