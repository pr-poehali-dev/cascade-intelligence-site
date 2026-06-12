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
  hero: { tag: string; title: string; subtitle: string; desc: string; btn1: string; btn2: string };
  about: { tag: string; title: string; p1: string; p2: string; stats: StatItem[] };
  services: { tag: string; title: string; items: ServiceItem[] };
  geo: { tag: string; title: string; desc: string; zones: string[] };
  report: {
    tag: string; title: string; warning: string; categories: string[];
    form: { category: string; region: string; message: string; btn: string; hint: string };
    encrypting: string; sent: string; sentDesc: string;
  };
  agent: {
    tag: string; title: string; desc: string;
    fields: { alias: string; contact: string; skills: string; motivation: string; btn: string };
    consent: string; sent: string; sentDesc: string;
  };
  cta: { title: string; desc: string; callBtn: string; consultBtn: string; note: string };
  legalSection: { tag: string; title: string; p1: string; p2: string; points: { icon: string; text: string }[] };
  contact: {
    tag: string; title: string; desc: string;
    callBtn: string; mailBtn: string; info: InfoItem[];
  };
  footer: { rights: string; legal: string; hint: string };
}

export const TRANSLATIONS: Record<Lang, Dict> = {
  ru: {
    nav: { home: "Главная", about: "Компания", services: "Услуги", report: "Сообщить", agent: "Сотрудничество", contact: "Контакты" },
    secure: "Защищённое соединение · Канал зашифрован",
    hero: { tag: "Частная Разведывательная Компания", title: "КАСКАД", subtitle: "Защита. Поддержка. Спокойствие.", desc: "Помогаем людям и компаниям решать вопросы безопасности — от проверки партнёра и поиска человека до личной защиты. Профессионально, деликатно и конфиденциально.", btn1: "Наши услуги", btn2: "Получить консультацию" },
    about: { tag: "О компании", title: "ПРОФЕССИОНАЛИЗМ. КОНФИДЕНЦИАЛЬНОСТЬ. РЕЗУЛЬТАТ.", p1: "ЧРК «Каскад» — частная разведывательная компания с присутствием в Москве, Московской области и любой точке мира. Мы помогаем людям и бизнесу чувствовать себя в безопасности.", p2: "В нашей команде — опытные специалисты с многолетней практикой. Мы одинаково внимательно относимся к каждому обращению — будь то частный человек, компания или организация, и всегда находим решение в рамках закона.", stats: [ { num: "15+", label: "Лет на рынке" }, { num: "500+", label: "Решённых задач" }, { num: "40+", label: "Стран присутствия" }, { num: "100%", label: "Конфиденциальность" } ] },
    services: { tag: "Услуги", title: "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ", items: [
      { icon: "Search", title: "Детективные услуги", desc: "Розыск людей и имущества, наблюдение, проверка контрагентов, сбор доказательной базы для физических и юридических лиц в Москве, области и по всему миру." },
      { icon: "Shield", title: "Обеспечение безопасности", desc: "Личная охрана и сопровождение, поддержка в переговорах и кризисных ситуациях, защита бизнеса и имущества, помощь в сложных обстоятельствах." },
      { icon: "Eye", title: "Бизнес-разведка", desc: "Конкурентная разведка, OSINT-анализ, проверка деловых партнёров, выявление коррупции и корпоративного мошенничества." },
      { icon: "Landmark", title: "Государственный сектор", desc: "Специальные операции в интересах Российской Федерации, взаимодействие с профильными ведомствами, информационно-аналитическая поддержка." },
      { icon: "Globe", title: "Международные организации", desc: "Сопровождение международных миссий, оперативная поддержка в зонах конфликтов, аналитические доклады и оценка рисков." },
      { icon: "Lock", title: "Кибербезопасность", desc: "Защита данных, выявление утечек информации, расследование кибератак и цифровая разведка." },
    ] },
    geo: { tag: "География", title: "МЫ РАБОТАЕМ ВЕЗДЕ", desc: "От Москвы до зон конфликтов на другом конце планеты. Там, где требуется присутствие — мы уже там.", zones: ["Москва и МО", "Россия", "СНГ", "Европа", "Ближний Восток", "Азия", "Африка", "Весь мир"] },
    report: { tag: "Анонимная связь", title: "СООБЩИТЬ О ПРЕСТУПЛЕНИИ ИЛИ ТЕРРОРИЗМЕ", warning: "Сообщение шифруется по протоколу AES-256 прямо в вашем браузере. IP-адрес и метаданные не сохраняются. Источник остаётся полностью анонимным.", categories: ["Терроризм и экстремизм", "Тяжкие преступления", "Коррупция и мошенничество", "Информация о разыскиваемых", "Угроза госбезопасности", "Иное"], form: { category: "Категория сообщения", region: "Регион / страна", message: "Подробное описание (минимум 50 символов)", btn: "Отправить анонимно", hint: "Не указывайте личные данные, если хотите сохранить анонимность" }, encrypting: "ШИФРОВАНИЕ AES-256...", sent: "СООБЩЕНИЕ ЗАШИФРОВАНО И ОТПРАВЛЕНО", sentDesc: "Ваш ID обращения уничтожен. Сессия анонимна. Данные переданы оперативным сотрудникам." },
    agent: { tag: "Сотрудничество", title: "СОТРУДНИЧЕСТВО", desc: "Мы открыты к сотрудничеству с надёжными людьми по всему миру — для тех, кто разделяет наши ценности и готов вносить вклад на идейной, добровольной основе, а не ради вознаграждения. Если вы хотите быть полезным общему делу — оставьте заявку.", fields: { alias: "Как к вам обращаться", contact: "Удобный способ связи", skills: "Ваш опыт и сфера интересов", motivation: "Почему вам интересно сотрудничество", btn: "Отправить заявку" }, consent: "Я готов сотрудничать на добровольной и безвозмездной основе", sent: "ЗАЯВКА ПРИНЯТА", sentDesc: "Спасибо за интерес к сотрудничеству. Мы свяжемся с вами через указанный способ связи." },
    cta: { title: "НЕ РЕШАЙТЕ ПРОБЛЕМУ В ОДИНОЧКУ", desc: "Один звонок — и за вашу ситуацию возьмутся профессионалы. Первая консультация бесплатна и абсолютно конфиденциальна. Чем раньше вы обратитесь — тем больше у нас возможностей помочь.", callBtn: "Позвонить сейчас", consultBtn: "Получить консультацию", note: "Отвечаем круглосуточно · Полная анонимность гарантирована" },
    legalSection: { tag: "Правовой статус", title: "В ПРАВОВОМ ПОЛЕ. БЕЗ ОГРАНИЧЕНИЙ В ЭФФЕКТИВНОСТИ.", p1: "ЧРК «Каскад» осуществляет деятельность в строгом соответствии с законодательством Российской Федерации и нормами международного права.", p2: "Каждая операция выстраивается с учётом конкретной юрисдикции. Мы располагаем правовыми инструментами и каналами, позволяющими решать задачи там, где обычные процедуры заходят в тупик — всегда находя законную форму для достижения результата.", points: [ { icon: "Scale", text: "Соответствие законодательству РФ" }, { icon: "Globe2", text: "Нормы международного права" }, { icon: "KeyRound", text: "Индивидуальные правовые решения под каждую юрисдикцию" }, { icon: "ShieldCheck", text: "Полная конфиденциальность и правовая защита клиента" } ] },
    contact: { tag: "Контакты", title: "СВЯЗАТЬСЯ С НАМИ", desc: "Все обращения обрабатываются конфиденциально. Круглосуточная линия для срочных ситуаций.", callBtn: "Позвонить", mailBtn: "Написать", info: [ { icon: "Phone", label: "Телефон", value: "+7 913 364-57-48" }, { icon: "Mail", label: "Email", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "База", value: "Москва · весь мир" }, { icon: "Clock", label: "Режим", value: "24 / 7" } ] },
    footer: { rights: "© 2015 ЧРК «Каскад». Все права защищены.", legal: "Лицензированная деятельность в рамках законодательства РФ.", hint: "Действуем в правовом поле РФ и международного права — находя законную форму для любой задачи." },
  },
  en: {
    nav: { home: "Home", about: "Company", services: "Services", report: "Report", agent: "Cooperation", contact: "Contact" },
    secure: "Secure connection · Channel encrypted",
    hero: { tag: "Private Intelligence Company", title: "CASCADE", subtitle: "Protection. Support. Peace of Mind.", desc: "We help people and companies handle security matters — from partner checks and finding people to personal protection. Professional, discreet and confidential.", btn1: "Our Services", btn2: "Get a Consultation" },
    about: { tag: "About", title: "PROFESSIONALISM. CONFIDENTIALITY. RESULTS.", p1: "PIC «Cascade» is a private intelligence company with presence in Moscow, the Moscow region and anywhere in the world. We help people and businesses feel safe.", p2: "Our team consists of experienced specialists with years of practice. We give equal care to every request — whether from an individual, a company or an organization, and always find a solution within the law.", stats: [ { num: "15+", label: "Years of Experience" }, { num: "500+", label: "Tasks Resolved" }, { num: "40+", label: "Countries" }, { num: "100%", label: "Confidentiality" } ] },
    services: { tag: "Services", title: "AREAS OF OPERATIONS", items: [
      { icon: "Search", title: "Detective Services", desc: "Missing persons & asset tracing, surveillance, due diligence, evidence gathering for individuals and entities in Moscow and worldwide." },
      { icon: "Shield", title: "Security", desc: "Personal protection and escort, support in negotiations and crisis situations, protection of business and property, assistance in difficult circumstances." },
      { icon: "Eye", title: "Business Intelligence", desc: "Competitive intelligence, OSINT analysis, partner verification, corruption and corporate fraud investigations." },
      { icon: "Landmark", title: "Government Sector", desc: "Special operations in the interests of the Russian Federation, cooperation with relevant agencies, analytical support." },
      { icon: "Globe", title: "International Organizations", desc: "Support for international missions, operational backup in conflict zones, analytical reports and risk assessment." },
      { icon: "Lock", title: "Cybersecurity", desc: "Data protection, leak detection, cyberattack investigation and digital intelligence." },
    ] },
    geo: { tag: "Geography", title: "WE OPERATE EVERYWHERE", desc: "From Moscow to conflict zones across the globe. Wherever presence is required — we are already there.", zones: ["Moscow region", "Russia", "CIS", "Europe", "Middle East", "Asia", "Africa", "Worldwide"] },
    report: { tag: "Anonymous Channel", title: "REPORT A CRIME OR TERRORISM", warning: "The message is encrypted with AES-256 directly in your browser. IP address and metadata are not stored. The source remains fully anonymous.", categories: ["Terrorism & Extremism", "Violent Crimes", "Corruption & Fraud", "Information on Wanted Persons", "Threat to State Security", "Other"], form: { category: "Message Category", region: "Region / Country", message: "Detailed description (min. 50 characters)", btn: "Submit Anonymously", hint: "Do not include personal data if you wish to remain anonymous" }, encrypting: "ENCRYPTING AES-256...", sent: "MESSAGE ENCRYPTED & SENT", sentDesc: "Your report ID has been destroyed. Session is anonymous. Data forwarded to operational staff." },
    agent: { tag: "Cooperation", title: "COOPERATION", desc: "We are open to working with reliable people around the world — for those who share our values and are ready to contribute on a principled, voluntary basis rather than for reward. If you want to be of service to the common cause — submit a request.", fields: { alias: "How to address you", contact: "Convenient contact method", skills: "Your experience and area of interest", motivation: "Why cooperation interests you", btn: "Submit Request" }, consent: "I am ready to cooperate on a voluntary and unpaid basis", sent: "REQUEST RECEIVED", sentDesc: "Thank you for your interest in cooperation. We will contact you via the method you provided." },
    cta: { title: "DON'T FACE IT ALONE", desc: "One call — and professionals take over your situation. The first consultation is free and absolutely confidential. The sooner you reach out, the more we can do.", callBtn: "Call Now", consultBtn: "Get a Consultation", note: "Available 24/7 · Full anonymity guaranteed" },
    legalSection: { tag: "Legal Status", title: "WITHIN THE LAW. WITHOUT LIMITS ON EFFECTIVENESS.", p1: "PIC «Cascade» operates in strict compliance with the legislation of the Russian Federation and the norms of international law.", p2: "Every operation is built around the specific jurisdiction. We possess the legal instruments and channels to resolve matters where ordinary procedures reach a dead end — always finding a lawful form to achieve the result.", points: [ { icon: "Scale", text: "Compliance with RF legislation" }, { icon: "Globe2", text: "Norms of international law" }, { icon: "KeyRound", text: "Tailored legal solutions for each jurisdiction" }, { icon: "ShieldCheck", text: "Full confidentiality and legal protection of the client" } ] },
    contact: { tag: "Contact", title: "GET IN TOUCH", desc: "All inquiries are handled confidentially. 24/7 line for urgent situations.", callBtn: "Call", mailBtn: "Email", info: [ { icon: "Phone", label: "Phone", value: "+7 913 364-57-48" }, { icon: "Mail", label: "Email", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "Base", value: "Moscow · worldwide" }, { icon: "Clock", label: "Hours", value: "24 / 7" } ] },
    footer: { rights: "© 2015 PIC «Cascade». All rights reserved.", legal: "Licensed activity within the laws of the Russian Federation.", hint: "Operating within RF and international law — finding a lawful form for any task." },
  },
  fr: {
    nav: { home: "Accueil", about: "Société", services: "Services", report: "Signaler", agent: "Coopération", contact: "Contact" },
    secure: "Connexion sécurisée · Canal chiffré",
    hero: { tag: "Compagnie de Renseignement Privée", title: "CASCADE", subtitle: "Protection. Soutien. Sérénité.", desc: "Nous aidons les particuliers et les entreprises à gérer les questions de sécurité — de la vérification d'un partenaire et la recherche de personnes à la protection personnelle. Professionnel, discret et confidentiel.", btn1: "Nos services", btn2: "Obtenir une consultation" },
    about: { tag: "À propos", title: "PROFESSIONNALISME. CONFIDENTIALITÉ. RÉSULTATS.", p1: "CRP « Cascade » est une compagnie de renseignement privée présente à Moscou, dans la région de Moscou et partout dans le monde. Nous aidons les particuliers et les entreprises à se sentir en sécurité.", p2: "Notre équipe se compose de spécialistes expérimentés ayant des années de pratique. Nous accordons la même attention à chaque demande — qu'elle provienne d'un particulier, d'une entreprise ou d'une organisation, et trouvons toujours une solution dans le cadre de la loi.", stats: [ { num: "15+", label: "Ans d'expérience" }, { num: "500+", label: "Tâches résolues" }, { num: "40+", label: "Pays" }, { num: "100%", label: "Confidentialité" } ] },
    services: { tag: "Services", title: "DOMAINES D'ACTIVITÉ", items: [
      { icon: "Search", title: "Services de détective", desc: "Recherche de personnes et de biens, surveillance, vérification, collecte de preuves pour particuliers et entreprises à Moscou et dans le monde." },
      { icon: "Shield", title: "Sécurité", desc: "Protection personnelle et accompagnement, soutien lors de négociations et de situations de crise, protection des entreprises et des biens, aide dans les circonstances difficiles." },
      { icon: "Eye", title: "Renseignement d'affaires", desc: "Renseignement concurrentiel, analyse OSINT, vérification des partenaires, enquêtes sur la corruption et la fraude." },
      { icon: "Landmark", title: "Secteur public", desc: "Opérations spéciales dans l'intérêt de la Fédération de Russie, coopération avec les agences, soutien analytique." },
      { icon: "Globe", title: "Organisations internationales", desc: "Soutien aux missions internationales, appui opérationnel en zones de conflit, rapports analytiques et évaluation des risques." },
      { icon: "Lock", title: "Cybersécurité", desc: "Protection des données, détection de fuites, enquêtes sur les cyberattaques et renseignement numérique." },
    ] },
    geo: { tag: "Géographie", title: "NOUS OPÉRONS PARTOUT", desc: "De Moscou aux zones de conflit à l'autre bout du monde. Là où une présence est requise — nous y sommes déjà.", zones: ["Région de Moscou", "Russie", "CEI", "Europe", "Moyen-Orient", "Asie", "Afrique", "Monde entier"] },
    report: { tag: "Canal anonyme", title: "SIGNALER UN CRIME OU UN ACTE TERRORISTE", warning: "Le message est chiffré en AES-256 directement dans votre navigateur. L'adresse IP et les métadonnées ne sont pas conservées. La source reste totalement anonyme.", categories: ["Terrorisme et extrémisme", "Crimes violents", "Corruption et fraude", "Informations sur des personnes recherchées", "Menace pour la sécurité de l'État", "Autre"], form: { category: "Catégorie du message", region: "Région / pays", message: "Description détaillée (50 caractères min.)", btn: "Envoyer anonymement", hint: "N'indiquez aucune donnée personnelle pour rester anonyme" }, encrypting: "CHIFFREMENT AES-256...", sent: "MESSAGE CHIFFRÉ ET ENVOYÉ", sentDesc: "Votre identifiant a été détruit. La session est anonyme. Les données ont été transmises aux opérateurs." },
    agent: { tag: "Coopération", title: "COOPÉRATION", desc: "Nous sommes ouverts à la coopération avec des personnes fiables partout dans le monde — pour celles qui partagent nos valeurs et sont prêtes à contribuer de manière engagée et bénévole, et non pour une rémunération. Si vous souhaitez être utile à la cause commune — envoyez une demande.", fields: { alias: "Comment vous appeler", contact: "Moyen de contact pratique", skills: "Votre expérience et domaine d'intérêt", motivation: "Pourquoi la coopération vous intéresse", btn: "Envoyer la demande" }, consent: "Je suis prêt à coopérer sur une base bénévole et non rémunérée", sent: "DEMANDE REÇUE", sentDesc: "Merci de votre intérêt pour la coopération. Nous vous contacterons via le moyen indiqué." },
    cta: { title: "NE RESTEZ PAS SEUL FACE AU PROBLÈME", desc: "Un appel — et des professionnels prennent en main votre situation. La première consultation est gratuite et totalement confidentielle. Plus vous nous contactez tôt, plus nous pouvons agir.", callBtn: "Appeler maintenant", consultBtn: "Obtenir une consultation", note: "Disponible 24h/24 · Anonymat total garanti" },
    legalSection: { tag: "Statut juridique", title: "DANS LE CADRE DE LA LOI. SANS LIMITE D'EFFICACITÉ.", p1: "CRP « Cascade » exerce son activité en stricte conformité avec la législation de la Fédération de Russie et les normes du droit international.", p2: "Chaque opération est conçue selon la juridiction concernée. Nous disposons des instruments et des canaux juridiques permettant de résoudre les situations où les procédures ordinaires aboutissent à une impasse — en trouvant toujours une forme légale pour atteindre le résultat.", points: [ { icon: "Scale", text: "Conformité à la législation de la FR" }, { icon: "Globe2", text: "Normes du droit international" }, { icon: "KeyRound", text: "Solutions juridiques sur mesure pour chaque juridiction" }, { icon: "ShieldCheck", text: "Confidentialité totale et protection juridique du client" } ] },
    contact: { tag: "Contact", title: "NOUS CONTACTER", desc: "Toutes les demandes sont traitées confidentiellement. Ligne 24h/24 pour les urgences.", callBtn: "Appeler", mailBtn: "Écrire", info: [ { icon: "Phone", label: "Téléphone", value: "+7 913 364-57-48" }, { icon: "Mail", label: "Email", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "Base", value: "Moscou · monde entier" }, { icon: "Clock", label: "Horaires", value: "24 / 7" } ] },
    footer: { rights: "© 2015 CRP « Cascade ». Tous droits réservés.", legal: "Activité licenciée conforme à la législation de la Fédération de Russie.", hint: "Nous agissons dans le cadre du droit russe et international — en trouvant une forme légale pour chaque mission." },
  },
  ar: {
    nav: { home: "الرئيسية", about: "الشركة", services: "الخدمات", report: "إبلاغ", agent: "تعاون", contact: "اتصل بنا" },
    secure: "اتصال آمن · القناة مشفّرة",
    hero: { tag: "شركة استخبارات خاصة", title: "كاسكاد", subtitle: "حماية. دعم. راحة بال.", desc: "نساعد الأفراد والشركات في حل مسائل الأمن — من التحقق من الشركاء والبحث عن الأشخاص إلى الحماية الشخصية. باحترافية وتكتم وسرية تامة.", btn1: "خدماتنا", btn2: "احصل على استشارة" },
    about: { tag: "عن الشركة", title: "احترافية. سرية. نتائج.", p1: "شركة «كاسكاد» للاستخبارات الخاصة، حاضرة في موسكو ومنطقة موسكو وفي أي مكان في العالم. نساعد الأفراد والشركات على الشعور بالأمان.", p2: "يضم فريقنا متخصصين ذوي خبرة طويلة في الميدان. نولي اهتماماً متساوياً لكل طلب — سواء من فرد أو شركة أو منظمة، ونجد دائماً حلاً في إطار القانون.", stats: [ { num: "+15", label: "سنة خبرة" }, { num: "+500", label: "مهمة منجزة" }, { num: "+40", label: "دولة" }, { num: "100%", label: "سرية تامة" } ] },
    services: { tag: "الخدمات", title: "مجالات النشاط", items: [
      { icon: "Search", title: "خدمات التحري", desc: "البحث عن الأشخاص والممتلكات، المراقبة، التحقق، جمع الأدلة للأفراد والشركات في موسكو وحول العالم." },
      { icon: "Shield", title: "تأمين الحماية", desc: "الحماية الشخصية والمرافقة، الدعم في المفاوضات والمواقف الحرجة، حماية الأعمال والممتلكات، والمساعدة في الظروف الصعبة." },
      { icon: "Eye", title: "استخبارات الأعمال", desc: "الاستخبارات التنافسية، تحليل OSINT، التحقق من الشركاء، كشف الفساد والاحتيال." },
      { icon: "Landmark", title: "القطاع الحكومي", desc: "عمليات خاصة لصالح الاتحاد الروسي، التعاون مع الجهات المختصة، الدعم التحليلي." },
      { icon: "Globe", title: "المنظمات الدولية", desc: "دعم المهام الدولية، الإسناد الميداني في مناطق النزاع، التقارير التحليلية وتقييم المخاطر." },
      { icon: "Lock", title: "الأمن السيبراني", desc: "حماية البيانات، كشف التسريبات، التحقيق في الهجمات السيبرانية والاستخبارات الرقمية." },
    ] },
    geo: { tag: "الجغرافيا", title: "نعمل في كل مكان", desc: "من موسكو إلى مناطق النزاع في أقصى الأرض. أينما يلزم الحضور — نحن هناك بالفعل.", zones: ["موسكو والمنطقة", "روسيا", "رابطة الدول المستقلة", "أوروبا", "الشرق الأوسط", "آسيا", "أفريقيا", "العالم كله"] },
    report: { tag: "قناة مجهولة", title: "الإبلاغ عن جريمة أو إرهاب", warning: "تُشفّر الرسالة بـ AES-256 مباشرة في متصفحك. لا يتم حفظ عنوان IP أو البيانات الوصفية. يبقى المصدر مجهولاً تماماً.", categories: ["الإرهاب والتطرف", "الجرائم الخطيرة", "الفساد والاحتيال", "معلومات عن مطلوبين", "تهديد أمن الدولة", "أخرى"], form: { category: "فئة الرسالة", region: "المنطقة / الدولة", message: "وصف مفصل (50 حرفاً على الأقل)", btn: "إرسال بشكل مجهول", hint: "لا تدرج بيانات شخصية إذا أردت البقاء مجهولاً" }, encrypting: "...AES-256 جارٍ التشفير", sent: "تم تشفير الرسالة وإرسالها", sentDesc: "تم تدمير معرّف بلاغك. الجلسة مجهولة. أُرسلت البيانات إلى الفريق الميداني." },
    agent: { tag: "تعاون", title: "تعاون", desc: "نحن منفتحون على التعاون مع أشخاص موثوقين حول العالم — لمن يشاركوننا قيمنا ومستعدون للمساهمة على أساس مبدئي وتطوعي، لا مقابل أجر. إذا أردت أن تكون نافعاً للقضية المشتركة — أرسل طلباً.", fields: { alias: "كيف نخاطبك", contact: "وسيلة تواصل مناسبة", skills: "خبرتك ومجال اهتمامك", motivation: "لماذا يهمك التعاون" , btn: "إرسال الطلب" }, consent: "أنا مستعد للتعاون على أساس تطوعي وبدون مقابل", sent: "تم استلام الطلب", sentDesc: "شكراً لاهتمامك بالتعاون. سنتواصل معك عبر وسيلة الاتصال التي حددتها." },
    cta: { title: "لا تواجه المشكلة وحدك", desc: "مكالمة واحدة — ويتولى المحترفون التعامل مع وضعك. الاستشارة الأولى مجانية وسرية تماماً. كلما تواصلت مبكراً، زادت قدرتنا على المساعدة.", callBtn: "اتصل الآن", consultBtn: "احصل على استشارة", note: "متاحون على مدار الساعة · سرية تامة مضمونة" },
    legalSection: { tag: "الوضع القانوني", title: "ضمن إطار القانون. دون حدود على الفعالية.", p1: "تمارس شركة «كاسكاد» نشاطها في التزام صارم بتشريعات الاتحاد الروسي وقواعد القانون الدولي.", p2: "تُبنى كل عملية وفقاً للولاية القضائية المعنية. نمتلك الأدوات والقنوات القانونية لحل المسائل حيثما تصل الإجراءات الاعتيادية إلى طريق مسدود — مع إيجاد صيغة قانونية دائماً لتحقيق النتيجة.", points: [ { icon: "Scale", text: "الامتثال لتشريعات الاتحاد الروسي" }, { icon: "Globe2", text: "قواعد القانون الدولي" }, { icon: "KeyRound", text: "حلول قانونية مخصصة لكل ولاية قضائية" }, { icon: "ShieldCheck", text: "سرية تامة وحماية قانونية للعميل" } ] },
    contact: { tag: "اتصل بنا", title: "تواصل معنا", desc: "تُعالج جميع الطلبات بسرية. خط على مدار الساعة للحالات العاجلة.", callBtn: "اتصل", mailBtn: "راسلنا", info: [ { icon: "Phone", label: "الهاتف", value: "+7 913 364-57-48" }, { icon: "Mail", label: "البريد", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "المقر", value: "موسكو · العالم" }, { icon: "Clock", label: "الدوام", value: "24 / 7" } ] },
    footer: { rights: "© 2015 شركة «كاسكاد». جميع الحقوق محفوظة.", legal: "نشاط مرخّص ضمن تشريعات الاتحاد الروسي.", hint: "نعمل ضمن القانون الروسي والدولي — مع إيجاد صيغة قانونية لكل مهمة." },
  },
  zh: {
    nav: { home: "首页", about: "公司", services: "服务", report: "举报", agent: "合作", contact: "联系" },
    secure: "安全连接 · 通道已加密",
    hero: { tag: "私人情报公司", title: "瀑布", subtitle: "保护。支持。安心。", desc: "我们帮助个人和企业处理安全事务——从背景核查、寻人到人身保护。专业、谨慎、保密。", btn1: "我们的服务", btn2: "获取咨询" },
    about: { tag: "关于", title: "专业。保密。结果。", p1: "「瀑布」私人情报公司，业务遍及莫斯科、莫斯科州及世界任何角落。我们帮助个人和企业获得安全感。", p2: "我们的团队由经验丰富、实践多年的专业人员组成。无论来自个人、企业还是机构，我们都同样用心对待每一项委托，并始终在法律框架内找到解决方案。", stats: [ { num: "15+", label: "年经验" }, { num: "500+", label: "已解决任务" }, { num: "40+", label: "覆盖国家" }, { num: "100%", label: "绝对保密" } ] },
    services: { tag: "服务", title: "业务领域", items: [
      { icon: "Search", title: "侦探服务", desc: "寻人寻物、监视、尽职调查、为莫斯科及全球的个人与企业收集证据。" },
      { icon: "Shield", title: "安全保障", desc: "贴身保护与陪同、谈判及危机情境支援、企业与财产保护、在困难处境中提供协助。" },
      { icon: "Eye", title: "商业情报", desc: "竞争情报、OSINT 分析、合作伙伴核查、腐败与商业欺诈调查。" },
      { icon: "Landmark", title: "政府部门", desc: "为俄罗斯联邦利益开展特别行动，与相关机构合作，提供分析支持。" },
      { icon: "Globe", title: "国际组织", desc: "支持国际任务、冲突地区行动支援、分析报告与风险评估。" },
      { icon: "Lock", title: "网络安全", desc: "数据保护、泄露检测、网络攻击调查与数字情报。" },
    ] },
    geo: { tag: "地理", title: "我们无处不在", desc: "从莫斯科到地球另一端的冲突区。哪里需要存在——我们已在那里。", zones: ["莫斯科地区", "俄罗斯", "独联体", "欧洲", "中东", "亚洲", "非洲", "全球"] },
    report: { tag: "匿名通道", title: "举报犯罪或恐怖活动", warning: "信息在您的浏览器中以 AES-256 直接加密。不保存 IP 地址和元数据。来源完全匿名。", categories: ["恐怖主义与极端主义", "严重犯罪", "腐败与欺诈", "通缉人员信息", "国家安全威胁", "其他"], form: { category: "信息类别", region: "地区 / 国家", message: "详细描述（至少 50 个字符）", btn: "匿名发送", hint: "如需保持匿名，请勿填写个人信息" }, encrypting: "AES-256 加密中...", sent: "信息已加密并发送", sentDesc: "您的举报 ID 已销毁。会话匿名。数据已转交行动人员。" },
    agent: { tag: "合作", title: "合作", desc: "我们乐于与世界各地可靠的人士合作——面向认同我们理念、愿意基于信念无偿奉献而非为了报酬的人。如果您愿意为共同的事业贡献力量——请提交申请。", fields: { alias: "如何称呼您", contact: "方便的联系方式", skills: "您的经验与兴趣领域", motivation: "您为何对合作感兴趣", btn: "提交申请" }, consent: "我愿意以自愿且无偿的方式参与合作", sent: "申请已接收", sentDesc: "感谢您对合作的兴趣。我们将通过您提供的方式与您联系。" },
    cta: { title: "不要独自面对问题", desc: "一通电话——专业团队即刻接手您的情况。首次咨询免费且绝对保密。您越早联系，我们能做的就越多。", callBtn: "立即致电", consultBtn: "获取咨询", note: "24 小时待命 · 保证完全匿名" },
    legalSection: { tag: "法律地位", title: "在法律框架内。效率不设上限。", p1: "「瀑布」严格遵守俄罗斯联邦法律及国际法准则开展活动。", p2: "每一次行动都围绕具体司法管辖区精心设计。在常规程序陷入僵局之处，我们拥有相应的法律工具与渠道——始终以合法的形式达成结果。", points: [ { icon: "Scale", text: "符合俄罗斯联邦法律" }, { icon: "Globe2", text: "国际法准则" }, { icon: "KeyRound", text: "为每个司法管辖区量身定制的法律方案" }, { icon: "ShieldCheck", text: "对客户的完全保密与法律保护" } ] },
    contact: { tag: "联系", title: "联系我们", desc: "所有咨询均保密处理。紧急情况 24 小时专线。", callBtn: "致电", mailBtn: "发邮件", info: [ { icon: "Phone", label: "电话", value: "+7 913 364-57-48" }, { icon: "Mail", label: "邮箱", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "基地", value: "莫斯科 · 全球" }, { icon: "Clock", label: "时间", value: "24 / 7" } ] },
    footer: { rights: "© 2015 「瀑布」私人情报公司。版权所有。", legal: "在俄罗斯联邦法律框架内的持牌活动。", hint: "我们在俄罗斯及国际法框架内行事——为每项任务找到合法的形式。" },
  },
  he: {
    nav: { home: "ראשי", about: "החברה", services: "שירותים", report: "דיווח", agent: "שיתוף פעולה", contact: "צור קשר" },
    secure: "חיבור מאובטח · הערוץ מוצפן",
    hero: { tag: "חברת מודיעין פרטית", title: "קסקאד", subtitle: "הגנה. תמיכה. שקט נפשי.", desc: "אנו מסייעים לאנשים ולחברות בנושאי ביטחון — מבדיקת שותפים ואיתור אנשים ועד הגנה אישית. במקצועיות, בעדינות ובחיסיון מלא.", btn1: "השירותים שלנו", btn2: "קבלת ייעוץ" },
    about: { tag: "אודות", title: "מקצועיות. חיסיון. תוצאות.", p1: "חברת המודיעין הפרטית «קסקאד» פועלת במוסקבה, במחוז מוסקבה ובכל מקום בעולם. אנו עוזרים לאנשים ולעסקים להרגיש בטוחים.", p2: "הצוות שלנו מורכב ממומחים מנוסים בעלי שנות פרקטיקה רבות. אנו מקדישים תשומת לב שווה לכל פנייה — בין אם מיחיד, מחברה או מארגון, ותמיד מוצאים פתרון במסגרת החוק.", stats: [ { num: "15+", label: "שנות ניסיון" }, { num: "500+", label: "משימות שנפתרו" }, { num: "40+", label: "מדינות" }, { num: "100%", label: "חיסיון מלא" } ] },
    services: { tag: "שירותים", title: "תחומי פעילות", items: [
      { icon: "Search", title: "שירותי בילוש", desc: "איתור אנשים ורכוש, מעקב, בדיקות רקע, איסוף ראיות ליחידים ולחברות במוסקבה וברחבי העולם." },
      { icon: "Shield", title: "אבטחה", desc: "אבטחה אישית וליווי, תמיכה במשא ומתן ובמצבי משבר, הגנה על עסקים ורכוש, וסיוע בנסיבות מורכבות." },
      { icon: "Eye", title: "מודיעין עסקי", desc: "מודיעין תחרותי, ניתוח OSINT, בדיקת שותפים, חקירות שחיתות והונאה." },
      { icon: "Landmark", title: "המגזר הממשלתי", desc: "מבצעים מיוחדים למען הפדרציה הרוסית, שיתוף פעולה עם גופים מוסמכים, תמיכה אנליטית." },
      { icon: "Globe", title: "ארגונים בינלאומיים", desc: "תמיכה במשימות בינלאומיות, סיוע מבצעי באזורי סכסוך, דוחות אנליטיים והערכת סיכונים." },
      { icon: "Lock", title: "סייבר", desc: "הגנת מידע, גילוי דליפות, חקירת מתקפות סייבר ומודיעין דיגיטלי." },
    ] },
    geo: { tag: "גאוגרפיה", title: "אנו פועלים בכל מקום", desc: "ממוסקבה ועד אזורי סכסוך בקצה השני של העולם. היכן שנדרשת נוכחות — אנו כבר שם.", zones: ["מחוז מוסקבה", "רוסיה", "חבר העמים", "אירופה", "המזרח התיכון", "אסיה", "אפריקה", "כל העולם"] },
    report: { tag: "ערוץ אנונימי", title: "דיווח על פשע או טרור", warning: "ההודעה מוצפנת ב-AES-256 ישירות בדפדפן שלך. כתובת IP ונתוני מטא אינם נשמרים. המקור נשאר אנונימי לחלוטין.", categories: ["טרור וקיצוניות", "פשעים חמורים", "שחיתות והונאה", "מידע על מבוקשים", "איום על ביטחון המדינה", "אחר"], form: { category: "קטגוריית ההודעה", region: "אזור / מדינה", message: "תיאור מפורט (50 תווים לפחות)", btn: "שליחה אנונימית", hint: "אל תכלול פרטים אישיים אם ברצונך להישאר אנונימי" }, encrypting: "...AES-256 מצפין", sent: "ההודעה הוצפנה ונשלחה", sentDesc: "מזהה הפנייה שלך הושמד. הסשן אנונימי. הנתונים הועברו לצוות המבצעי." },
    agent: { tag: "שיתוף פעולה", title: "שיתוף פעולה", desc: "אנו פתוחים לשיתוף פעולה עם אנשים אמינים בכל העולם — למי שחולקים את ערכינו ומוכנים לתרום על בסיס עקרוני והתנדבותי, ולא תמורת תשלום. אם ברצונך להועיל למטרה המשותפת — שלח בקשה.", fields: { alias: "כיצד לפנות אליך", contact: "אמצעי קשר נוח", skills: "הניסיון ותחום העניין שלך", motivation: "מדוע שיתוף הפעולה מעניין אותך", btn: "שליחת בקשה" }, consent: "אני מוכן לשתף פעולה על בסיס התנדבותי וללא תמורה", sent: "הבקשה התקבלה", sentDesc: "תודה על התעניינותך בשיתוף פעולה. ניצור איתך קשר באמצעי שציינת." },
    cta: { title: "אל תתמודדו עם הבעיה לבד", desc: "שיחה אחת — ואנשי מקצוע לוקחים את המצב שלכם לידיים. הייעוץ הראשון חינמי וחסוי לחלוטין. ככל שתפנו מוקדם יותר, כך נוכל לעשות יותר.", callBtn: "התקשרו עכשיו", consultBtn: "קבלת ייעוץ", note: "זמינים 24/7 · אנונימיות מלאה מובטחת" },
    legalSection: { tag: "מעמד משפטי", title: "במסגרת החוק. ללא מגבלות על היעילות.", p1: "חברת «קסקאד» פועלת בהתאם מחמיר לחקיקת הפדרציה הרוסית ולנורמות המשפט הבינלאומי.", p2: "כל מבצע נבנה בהתאם לתחום השיפוט הספציפי. ברשותנו הכלים והערוצים המשפטיים לפתור עניינים שבהם הליכים רגילים מגיעים למבוי סתום — תוך מציאת צורה חוקית להשגת התוצאה, תמיד.", points: [ { icon: "Scale", text: "ציות לחקיקת הפדרציה הרוסית" }, { icon: "Globe2", text: "נורמות המשפט הבינלאומי" }, { icon: "KeyRound", text: "פתרונות משפטיים מותאמים לכל תחום שיפוט" }, { icon: "ShieldCheck", text: "חיסיון מלא והגנה משפטית על הלקוח" } ] },
    contact: { tag: "צור קשר", title: "צרו קשר", desc: "כל הפניות מטופלות בחיסיון. קו חירום 24/7.", callBtn: "התקשרו", mailBtn: "כתבו", info: [ { icon: "Phone", label: "טלפון", value: "+7 913 364-57-48" }, { icon: "Mail", label: "דוא״ל", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "בסיס", value: "מוסקבה · העולם" }, { icon: "Clock", label: "שעות", value: "24 / 7" } ] },
    footer: { rights: "© 2015 חברת «קסקאד». כל הזכויות שמורות.", legal: "פעילות מורשית במסגרת חוקי הפדרציה הרוסית.", hint: "אנו פועלים במסגרת החוק הרוסי והבינלאומי — תוך מציאת צורה חוקית לכל משימה." },
  },
  ja: {
    nav: { home: "ホーム", about: "会社", services: "サービス", report: "通報", agent: "協力", contact: "連絡先" },
    secure: "安全な接続 · 通信は暗号化済み",
    hero: { tag: "民間諜報会社", title: "カスケード", subtitle: "保護。サポート。安心。", desc: "個人や企業の安全に関するお悩みを解決します——取引先の確認や人探しから身辺警護まで。専門性をもって、控えめに、機密厳守で。", btn1: "サービス", btn2: "相談する" },
    about: { tag: "会社概要", title: "プロフェッショナリズム。機密保持。結果。", p1: "民間諜報会社「カスケード」は、モスクワ、モスクワ州、そして世界中で活動しています。私たちは、人々と企業が安心して過ごせるようお手伝いします。", p2: "私たちのチームは、長年の実務経験を持つ専門家で構成されています。個人、企業、組織を問わず、すべてのご依頼に等しく丁寧に向き合い、常に法の枠内で解決策を見出します。", stats: [ { num: "15+", label: "年の実績" }, { num: "500+", label: "解決した案件" }, { num: "40+", label: "活動国" }, { num: "100%", label: "機密保持" } ] },
    services: { tag: "サービス", title: "活動分野", items: [
      { icon: "Search", title: "探偵サービス", desc: "人物・財産の捜索、監視、調査、モスクワおよび世界中の個人・法人のための証拠収集。" },
      { icon: "Shield", title: "セキュリティ", desc: "身辺警護・同行、交渉や危機的状況でのサポート、事業や財産の保護、困難な状況でのお手伝い。" },
      { icon: "Eye", title: "ビジネス諜報", desc: "競合調査、OSINT分析、取引先の確認、汚職・企業不正の調査。" },
      { icon: "Landmark", title: "政府部門", desc: "ロシア連邦の利益のための特殊作戦、関係機関との連携、分析支援。" },
      { icon: "Globe", title: "国際機関", desc: "国際ミッションの支援、紛争地域での作戦支援、分析報告とリスク評価。" },
      { icon: "Lock", title: "サイバーセキュリティ", desc: "データ保護、情報漏洩の検知、サイバー攻撃の調査、デジタル諜報。" },
    ] },
    geo: { tag: "活動地域", title: "私たちはどこにでもいる", desc: "モスクワから地球の裏側の紛争地帯まで。存在が必要とされる場所に——私たちはすでにいます。", zones: ["モスクワ圏", "ロシア", "CIS", "ヨーロッパ", "中東", "アジア", "アフリカ", "全世界"] },
    report: { tag: "匿名チャネル", title: "犯罪・テロの通報", warning: "メッセージはブラウザ上で直接 AES-256 により暗号化されます。IPアドレスとメタデータは保存されません。発信元は完全に匿名のままです。", categories: ["テロ・過激主義", "重大犯罪", "汚職・詐欺", "指名手配者の情報", "国家安全への脅威", "その他"], form: { category: "メッセージの種類", region: "地域 / 国", message: "詳細な説明（50文字以上）", btn: "匿名で送信", hint: "匿名を保ちたい場合は個人情報を記載しないでください" }, encrypting: "AES-256 暗号化中...", sent: "メッセージは暗号化され送信されました", sentDesc: "通報IDは破棄されました。セッションは匿名です。データは作戦担当者に転送されました。" },
    agent: { tag: "協力", title: "協力", desc: "私たちは世界中の信頼できる方々との協力を歓迎しています——私たちの理念に共感し、報酬のためではなく信念に基づいて自発的に貢献くださる方へ。共通の大義のお役に立ちたい方は——お申し込みください。", fields: { alias: "お呼びする名前", contact: "ご都合のよい連絡手段", skills: "ご経験と関心分野", motivation: "協力に関心を持たれた理由", btn: "申し込む" }, consent: "私は自発的かつ無報酬で協力する用意があります", sent: "申し込みを受領しました", sentDesc: "ご関心をお寄せいただきありがとうございます。ご指定の手段でご連絡いたします。" },
    cta: { title: "一人で抱え込まないでください", desc: "一本の電話で——専門家があなたの状況を引き受けます。初回相談は無料、完全機密。早くご連絡いただくほど、できることが増えます。", callBtn: "今すぐ電話", consultBtn: "相談する", note: "24時間対応 · 完全な匿名性を保証" },
    legalSection: { tag: "法的地位", title: "法の枠内で。効率に上限なし。", p1: "「カスケード」はロシア連邦の法令および国際法の規範を厳格に遵守して活動しています。", p2: "あらゆる作戦は対象となる管轄区域に応じて構築されます。通常の手続きが行き詰まる領域でも、私たちは法的手段とチャネルを有し——常に合法的な形で結果を達成します。", points: [ { icon: "Scale", text: "ロシア連邦法令への準拠" }, { icon: "Globe2", text: "国際法の規範" }, { icon: "KeyRound", text: "各管轄区域に合わせた法的ソリューション" }, { icon: "ShieldCheck", text: "依頼者の完全な機密保持と法的保護" } ] },
    contact: { tag: "連絡先", title: "お問い合わせ", desc: "すべてのお問い合わせは機密として扱われます。緊急時は24時間対応。", callBtn: "電話する", mailBtn: "メール", info: [ { icon: "Phone", label: "電話", value: "+7 913 364-57-48" }, { icon: "Mail", label: "メール", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "拠点", value: "モスクワ · 全世界" }, { icon: "Clock", label: "対応時間", value: "24 / 7" } ] },
    footer: { rights: "© 2015 民間諜報会社「カスケード」。無断転載禁止。", legal: "ロシア連邦法に基づく認可された活動。", hint: "ロシア連邦法および国際法の枠内で——あらゆる任務に合法的な形を見出します。" },
  },
};