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
  contact: {
    tag: string; title: string; desc: string;
    callBtn: string; mailBtn: string; info: InfoItem[];
  };
  footer: { rights: string; legal: string };
}

export const TRANSLATIONS: Record<Lang, Dict> = {
  ru: {
    nav: { home: "Главная", about: "Компания", services: "Услуги", report: "Сообщить", agent: "Стать агентом", contact: "Контакты" },
    secure: "Защищённое соединение · Канал зашифрован",
    hero: { tag: "Частная Разведывательная Компания", title: "КАСКАД", subtitle: "Защита. Разведка. Безопасность.", desc: "Структура, работающая на стыке частной и государственной безопасности. Мы решаем задачи, которые недоступны обычным агентствам — для тех, кто понимает цену тишины.", btn1: "Направления работы", btn2: "Конфиденциальный запрос" },
    about: { tag: "О компании", title: "ПРОФЕССИОНАЛИЗМ. КОНФИДЕНЦИАЛЬНОСТЬ. РЕЗУЛЬТАТ.", p1: "ЧРК «Каскад» — частная разведывательная компания с присутствием в Москве, Московской области и любой точке мира.", p2: "В нашей команде — действующие и бывшие сотрудники силовых структур и специальных служб. Мы работаем в интересах частных лиц, бизнеса, международных организаций и государственного сектора Российской Федерации.", stats: [ { num: "15+", label: "Лет на рынке" }, { num: "500+", label: "Завершённых операций" }, { num: "40+", label: "Стран присутствия" }, { num: "100%", label: "Конфиденциальность" } ] },
    services: { tag: "Услуги", title: "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ", items: [
      { icon: "Search", title: "Детективные услуги", desc: "Розыск людей и имущества, наблюдение, проверка контрагентов, сбор доказательной базы для физических и юридических лиц в Москве, области и по всему миру." },
      { icon: "Shield", title: "Обеспечение безопасности", desc: "Личная охрана и телохранители, освобождение заложников, посредничество в переговорах, освобождение захваченных судов и силовые операции любой сложности." },
      { icon: "Eye", title: "Бизнес-разведка", desc: "Конкурентная разведка, OSINT-анализ, проверка деловых партнёров, выявление коррупции и корпоративного мошенничества." },
      { icon: "Landmark", title: "Государственный сектор", desc: "Специальные операции в интересах Российской Федерации, взаимодействие с профильными ведомствами, информационно-аналитическая поддержка." },
      { icon: "Globe", title: "Международные организации", desc: "Сопровождение международных миссий, оперативная поддержка в зонах конфликтов, аналитические доклады и оценка рисков." },
      { icon: "Lock", title: "Кибербезопасность", desc: "Защита данных, выявление утечек информации, расследование кибератак и цифровая разведка." },
    ] },
    geo: { tag: "География", title: "МЫ РАБОТАЕМ ВЕЗДЕ", desc: "От Москвы до зон конфликтов на другом конце планеты. Там, где требуется присутствие — мы уже там.", zones: ["Москва и МО", "Россия", "СНГ", "Европа", "Ближний Восток", "Азия", "Африка", "Весь мир"] },
    report: { tag: "Анонимная связь", title: "СООБЩИТЬ О ПРЕСТУПЛЕНИИ ИЛИ ТЕРРОРИЗМЕ", warning: "Сообщение шифруется по протоколу AES-256 прямо в вашем браузере. IP-адрес и метаданные не сохраняются. Источник остаётся полностью анонимным.", categories: ["Терроризм и экстремизм", "Тяжкие преступления", "Коррупция и мошенничество", "Информация о разыскиваемых", "Угроза госбезопасности", "Иное"], form: { category: "Категория сообщения", region: "Регион / страна", message: "Подробное описание (минимум 50 символов)", btn: "Отправить анонимно", hint: "Не указывайте личные данные, если хотите сохранить анонимность" }, encrypting: "ШИФРОВАНИЕ AES-256...", sent: "СООБЩЕНИЕ ЗАШИФРОВАНО И ОТПРАВЛЕНО", sentDesc: "Ваш ID обращения уничтожен. Сессия анонимна. Данные переданы оперативным сотрудникам." },
    agent: { tag: "Сотрудничество", title: "СТАТЬ АГЕНТОМ", desc: "Мы расширяем сеть доверенных лиц за пределами России. Если вы готовы содействовать операциям ЧРК «Каскад» — оставьте зашифрованную заявку. Мы выйдем на связь сами.", fields: { alias: "Псевдоним / позывной", contact: "Защищённый способ связи", skills: "Навыки, доступы, регион присутствия", motivation: "Почему вы хотите сотрудничать", btn: "Подать зашифрованную заявку" }, consent: "Я понимаю характер деятельности и действую добровольно", sent: "ЗАЯВКА ПРИНЯТА И ЗАШИФРОВАНА", sentDesc: "Не предпринимайте дальнейших действий. С вами свяжутся через указанный канал в течение установленного срока." },
    contact: { tag: "Контакты", title: "СВЯЗАТЬСЯ С НАМИ", desc: "Все обращения обрабатываются конфиденциально. Круглосуточная линия для срочных ситуаций.", callBtn: "Позвонить", mailBtn: "Написать", info: [ { icon: "Phone", label: "Телефон", value: "+7 913 364-57-48" }, { icon: "Mail", label: "Email", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "База", value: "Москва · весь мир" }, { icon: "Clock", label: "Режим", value: "24 / 7" } ] },
    footer: { rights: "© 2024 ЧРК «Каскад». Все права защищены.", legal: "Лицензированная деятельность в рамках законодательства РФ." },
  },
  en: {
    nav: { home: "Home", about: "Company", services: "Services", report: "Report", agent: "Become an Agent", contact: "Contact" },
    secure: "Secure connection · Channel encrypted",
    hero: { tag: "Private Intelligence Company", title: "CASCADE", subtitle: "Protection. Intelligence. Security.", desc: "An organization operating at the intersection of private and state security. We handle tasks beyond the reach of ordinary agencies — for those who understand the value of silence.", btn1: "Our Operations", btn2: "Confidential Request" },
    about: { tag: "About", title: "PROFESSIONALISM. CONFIDENTIALITY. RESULTS.", p1: "PIC «Cascade» is a private intelligence company with presence in Moscow, the Moscow region and anywhere in the world.", p2: "Our team consists of active and former members of security forces and special services. We act in the interests of private individuals, businesses, international organizations and the public sector of the Russian Federation.", stats: [ { num: "15+", label: "Years of Experience" }, { num: "500+", label: "Completed Operations" }, { num: "40+", label: "Countries" }, { num: "100%", label: "Confidentiality" } ] },
    services: { tag: "Services", title: "AREAS OF OPERATIONS", items: [
      { icon: "Search", title: "Detective Services", desc: "Missing persons & asset tracing, surveillance, due diligence, evidence gathering for individuals and entities in Moscow and worldwide." },
      { icon: "Shield", title: "Security Operations", desc: "Personal protection and bodyguards, hostage rescue, negotiation mediation, ship liberation and tactical operations of any scale." },
      { icon: "Eye", title: "Business Intelligence", desc: "Competitive intelligence, OSINT analysis, partner verification, corruption and corporate fraud investigations." },
      { icon: "Landmark", title: "Government Sector", desc: "Special operations in the interests of the Russian Federation, cooperation with relevant agencies, analytical support." },
      { icon: "Globe", title: "International Organizations", desc: "Support for international missions, operational backup in conflict zones, analytical reports and risk assessment." },
      { icon: "Lock", title: "Cybersecurity", desc: "Data protection, leak detection, cyberattack investigation and digital intelligence." },
    ] },
    geo: { tag: "Geography", title: "WE OPERATE EVERYWHERE", desc: "From Moscow to conflict zones across the globe. Wherever presence is required — we are already there.", zones: ["Moscow region", "Russia", "CIS", "Europe", "Middle East", "Asia", "Africa", "Worldwide"] },
    report: { tag: "Anonymous Channel", title: "REPORT A CRIME OR TERRORISM", warning: "The message is encrypted with AES-256 directly in your browser. IP address and metadata are not stored. The source remains fully anonymous.", categories: ["Terrorism & Extremism", "Violent Crimes", "Corruption & Fraud", "Information on Wanted Persons", "Threat to State Security", "Other"], form: { category: "Message Category", region: "Region / Country", message: "Detailed description (min. 50 characters)", btn: "Submit Anonymously", hint: "Do not include personal data if you wish to remain anonymous" }, encrypting: "ENCRYPTING AES-256...", sent: "MESSAGE ENCRYPTED & SENT", sentDesc: "Your report ID has been destroyed. Session is anonymous. Data forwarded to operational staff." },
    agent: { tag: "Cooperation", title: "BECOME AN AGENT", desc: "We are expanding our network of trusted contacts outside Russia. If you are ready to assist Cascade operations — submit an encrypted application. We will reach out to you.", fields: { alias: "Alias / call sign", contact: "Secure contact method", skills: "Skills, access, region of presence", motivation: "Why you want to cooperate", btn: "Submit Encrypted Application" }, consent: "I understand the nature of the activity and act voluntarily", sent: "APPLICATION RECEIVED & ENCRYPTED", sentDesc: "Take no further action. You will be contacted via the specified channel within the established timeframe." },
    contact: { tag: "Contact", title: "GET IN TOUCH", desc: "All inquiries are handled confidentially. 24/7 line for urgent situations.", callBtn: "Call", mailBtn: "Email", info: [ { icon: "Phone", label: "Phone", value: "+7 913 364-57-48" }, { icon: "Mail", label: "Email", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "Base", value: "Moscow · worldwide" }, { icon: "Clock", label: "Hours", value: "24 / 7" } ] },
    footer: { rights: "© 2024 PIC «Cascade». All rights reserved.", legal: "Licensed activity within the laws of the Russian Federation." },
  },
  fr: {
    nav: { home: "Accueil", about: "Société", services: "Services", report: "Signaler", agent: "Devenir agent", contact: "Contact" },
    secure: "Connexion sécurisée · Canal chiffré",
    hero: { tag: "Compagnie de Renseignement Privée", title: "CASCADE", subtitle: "Protection. Renseignement. Sécurité.", desc: "Une organisation à l'intersection de la sécurité privée et étatique. Nous traitons des missions hors de portée des agences ordinaires — pour ceux qui connaissent la valeur du silence.", btn1: "Nos opérations", btn2: "Demande confidentielle" },
    about: { tag: "À propos", title: "PROFESSIONNALISME. CONFIDENTIALITÉ. RÉSULTATS.", p1: "CRP « Cascade » est une compagnie de renseignement privée présente à Moscou, dans la région de Moscou et partout dans le monde.", p2: "Notre équipe se compose de membres actifs et anciens des forces de sécurité et des services spéciaux. Nous agissons dans l'intérêt des particuliers, des entreprises, des organisations internationales et du secteur public de la Fédération de Russie.", stats: [ { num: "15+", label: "Ans d'expérience" }, { num: "500+", label: "Opérations menées" }, { num: "40+", label: "Pays" }, { num: "100%", label: "Confidentialité" } ] },
    services: { tag: "Services", title: "DOMAINES D'ACTIVITÉ", items: [
      { icon: "Search", title: "Services de détective", desc: "Recherche de personnes et de biens, surveillance, vérification, collecte de preuves pour particuliers et entreprises à Moscou et dans le monde." },
      { icon: "Shield", title: "Sécurité", desc: "Protection rapprochée et gardes du corps, libération d'otages, médiation, libération de navires et opérations tactiques de toute envergure." },
      { icon: "Eye", title: "Renseignement d'affaires", desc: "Renseignement concurrentiel, analyse OSINT, vérification des partenaires, enquêtes sur la corruption et la fraude." },
      { icon: "Landmark", title: "Secteur public", desc: "Opérations spéciales dans l'intérêt de la Fédération de Russie, coopération avec les agences, soutien analytique." },
      { icon: "Globe", title: "Organisations internationales", desc: "Soutien aux missions internationales, appui opérationnel en zones de conflit, rapports analytiques et évaluation des risques." },
      { icon: "Lock", title: "Cybersécurité", desc: "Protection des données, détection de fuites, enquêtes sur les cyberattaques et renseignement numérique." },
    ] },
    geo: { tag: "Géographie", title: "NOUS OPÉRONS PARTOUT", desc: "De Moscou aux zones de conflit à l'autre bout du monde. Là où une présence est requise — nous y sommes déjà.", zones: ["Région de Moscou", "Russie", "CEI", "Europe", "Moyen-Orient", "Asie", "Afrique", "Monde entier"] },
    report: { tag: "Canal anonyme", title: "SIGNALER UN CRIME OU UN ACTE TERRORISTE", warning: "Le message est chiffré en AES-256 directement dans votre navigateur. L'adresse IP et les métadonnées ne sont pas conservées. La source reste totalement anonyme.", categories: ["Terrorisme et extrémisme", "Crimes violents", "Corruption et fraude", "Informations sur des personnes recherchées", "Menace pour la sécurité de l'État", "Autre"], form: { category: "Catégorie du message", region: "Région / pays", message: "Description détaillée (50 caractères min.)", btn: "Envoyer anonymement", hint: "N'indiquez aucune donnée personnelle pour rester anonyme" }, encrypting: "CHIFFREMENT AES-256...", sent: "MESSAGE CHIFFRÉ ET ENVOYÉ", sentDesc: "Votre identifiant a été détruit. La session est anonyme. Les données ont été transmises aux opérateurs." },
    agent: { tag: "Coopération", title: "DEVENIR AGENT", desc: "Nous étendons notre réseau de personnes de confiance hors de Russie. Si vous êtes prêt à soutenir les opérations de Cascade — soumettez une demande chiffrée. Nous vous contacterons.", fields: { alias: "Pseudonyme / indicatif", contact: "Moyen de contact sécurisé", skills: "Compétences, accès, région de présence", motivation: "Pourquoi souhaitez-vous coopérer", btn: "Soumettre une demande chiffrée" }, consent: "Je comprends la nature de l'activité et j'agis volontairement", sent: "DEMANDE REÇUE ET CHIFFRÉE", sentDesc: "N'entreprenez aucune autre action. Vous serez contacté via le canal indiqué dans le délai établi." },
    contact: { tag: "Contact", title: "NOUS CONTACTER", desc: "Toutes les demandes sont traitées confidentiellement. Ligne 24h/24 pour les urgences.", callBtn: "Appeler", mailBtn: "Écrire", info: [ { icon: "Phone", label: "Téléphone", value: "+7 913 364-57-48" }, { icon: "Mail", label: "Email", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "Base", value: "Moscou · monde entier" }, { icon: "Clock", label: "Horaires", value: "24 / 7" } ] },
    footer: { rights: "© 2024 CRP « Cascade ». Tous droits réservés.", legal: "Activité licenciée conforme à la législation de la Fédération de Russie." },
  },
  ar: {
    nav: { home: "الرئيسية", about: "الشركة", services: "الخدمات", report: "إبلاغ", agent: "كن عميلاً", contact: "اتصل بنا" },
    secure: "اتصال آمن · القناة مشفّرة",
    hero: { tag: "شركة استخبارات خاصة", title: "كاسكاد", subtitle: "حماية. استخبارات. أمن.", desc: "منظمة تعمل عند تقاطع الأمن الخاص والحكومي. نتولى المهام التي تتجاوز قدرة الوكالات العادية — لمن يدرك قيمة الصمت.", btn1: "مجالات عملنا", btn2: "طلب سري" },
    about: { tag: "عن الشركة", title: "احترافية. سرية. نتائج.", p1: "شركة «كاسكاد» للاستخبارات الخاصة، حاضرة في موسكو ومنطقة موسكو وفي أي مكان في العالم.", p2: "يضم فريقنا أعضاء حاليين وسابقين في قوات الأمن والأجهزة الخاصة. نعمل لصالح الأفراد والشركات والمنظمات الدولية والقطاع الحكومي للاتحاد الروسي.", stats: [ { num: "+15", label: "سنة خبرة" }, { num: "+500", label: "عملية منجزة" }, { num: "+40", label: "دولة" }, { num: "100%", label: "سرية تامة" } ] },
    services: { tag: "الخدمات", title: "مجالات النشاط", items: [
      { icon: "Search", title: "خدمات التحري", desc: "البحث عن الأشخاص والممتلكات، المراقبة، التحقق، جمع الأدلة للأفراد والشركات في موسكو وحول العالم." },
      { icon: "Shield", title: "تأمين الحماية", desc: "الحماية الشخصية والحراس، تحرير الرهائن، الوساطة في المفاوضات، تحرير السفن المختطفة والعمليات الخاصة بكافة مستوياتها." },
      { icon: "Eye", title: "استخبارات الأعمال", desc: "الاستخبارات التنافسية، تحليل OSINT، التحقق من الشركاء، كشف الفساد والاحتيال." },
      { icon: "Landmark", title: "القطاع الحكومي", desc: "عمليات خاصة لصالح الاتحاد الروسي، التعاون مع الجهات المختصة، الدعم التحليلي." },
      { icon: "Globe", title: "المنظمات الدولية", desc: "دعم المهام الدولية، الإسناد الميداني في مناطق النزاع، التقارير التحليلية وتقييم المخاطر." },
      { icon: "Lock", title: "الأمن السيبراني", desc: "حماية البيانات، كشف التسريبات، التحقيق في الهجمات السيبرانية والاستخبارات الرقمية." },
    ] },
    geo: { tag: "الجغرافيا", title: "نعمل في كل مكان", desc: "من موسكو إلى مناطق النزاع في أقصى الأرض. أينما يلزم الحضور — نحن هناك بالفعل.", zones: ["موسكو والمنطقة", "روسيا", "رابطة الدول المستقلة", "أوروبا", "الشرق الأوسط", "آسيا", "أفريقيا", "العالم كله"] },
    report: { tag: "قناة مجهولة", title: "الإبلاغ عن جريمة أو إرهاب", warning: "تُشفّر الرسالة بـ AES-256 مباشرة في متصفحك. لا يتم حفظ عنوان IP أو البيانات الوصفية. يبقى المصدر مجهولاً تماماً.", categories: ["الإرهاب والتطرف", "الجرائم الخطيرة", "الفساد والاحتيال", "معلومات عن مطلوبين", "تهديد أمن الدولة", "أخرى"], form: { category: "فئة الرسالة", region: "المنطقة / الدولة", message: "وصف مفصل (50 حرفاً على الأقل)", btn: "إرسال بشكل مجهول", hint: "لا تدرج بيانات شخصية إذا أردت البقاء مجهولاً" }, encrypting: "...AES-256 جارٍ التشفير", sent: "تم تشفير الرسالة وإرسالها", sentDesc: "تم تدمير معرّف بلاغك. الجلسة مجهولة. أُرسلت البيانات إلى الفريق الميداني." },
    agent: { tag: "تعاون", title: "كن عميلاً", desc: "نوسّع شبكة الأشخاص الموثوقين خارج روسيا. إذا كنت مستعداً لدعم عمليات كاسكاد — أرسل طلباً مشفّراً. سنتواصل معك.", fields: { alias: "اسم مستعار / رمز", contact: "وسيلة تواصل آمنة", skills: "المهارات، الوصول، منطقة الحضور", motivation: "لماذا ترغب في التعاون" , btn: "إرسال طلب مشفّر" }, consent: "أدرك طبيعة النشاط وأتصرّف طوعاً", sent: "تم استلام الطلب وتشفيره", sentDesc: "لا تتخذ أي إجراء آخر. سيتم الاتصال بك عبر القناة المحددة خلال المدة المقررة." },
    contact: { tag: "اتصل بنا", title: "تواصل معنا", desc: "تُعالج جميع الطلبات بسرية. خط على مدار الساعة للحالات العاجلة.", callBtn: "اتصل", mailBtn: "راسلنا", info: [ { icon: "Phone", label: "الهاتف", value: "+7 913 364-57-48" }, { icon: "Mail", label: "البريد", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "المقر", value: "موسكو · العالم" }, { icon: "Clock", label: "الدوام", value: "24 / 7" } ] },
    footer: { rights: "© 2024 شركة «كاسكاد». جميع الحقوق محفوظة.", legal: "نشاط مرخّص ضمن تشريعات الاتحاد الروسي." },
  },
  zh: {
    nav: { home: "首页", about: "公司", services: "服务", report: "举报", agent: "成为特工", contact: "联系" },
    secure: "安全连接 · 通道已加密",
    hero: { tag: "私人情报公司", title: "瀑布", subtitle: "保护。情报。安全。", desc: "一个游走于私人安全与国家安全之间的组织。我们处理普通机构无法触及的任务——为懂得沉默价值的人。", btn1: "业务范围", btn2: "保密咨询" },
    about: { tag: "关于", title: "专业。保密。结果。", p1: "「瀑布」私人情报公司，业务遍及莫斯科、莫斯科州及世界任何角落。", p2: "我们的团队由现役及前任安全部队与特种部门成员组成。我们为个人、企业、国际组织以及俄罗斯联邦公共部门服务。", stats: [ { num: "15+", label: "年经验" }, { num: "500+", label: "完成行动" }, { num: "40+", label: "覆盖国家" }, { num: "100%", label: "绝对保密" } ] },
    services: { tag: "服务", title: "业务领域", items: [
      { icon: "Search", title: "侦探服务", desc: "寻人寻物、监视、尽职调查、为莫斯科及全球的个人与企业收集证据。" },
      { icon: "Shield", title: "安全保障", desc: "贴身保护与保镖、人质解救、谈判斡旋、解救被劫船只及各类战术行动。" },
      { icon: "Eye", title: "商业情报", desc: "竞争情报、OSINT 分析、合作伙伴核查、腐败与商业欺诈调查。" },
      { icon: "Landmark", title: "政府部门", desc: "为俄罗斯联邦利益开展特别行动，与相关机构合作，提供分析支持。" },
      { icon: "Globe", title: "国际组织", desc: "支持国际任务、冲突地区行动支援、分析报告与风险评估。" },
      { icon: "Lock", title: "网络安全", desc: "数据保护、泄露检测、网络攻击调查与数字情报。" },
    ] },
    geo: { tag: "地理", title: "我们无处不在", desc: "从莫斯科到地球另一端的冲突区。哪里需要存在——我们已在那里。", zones: ["莫斯科地区", "俄罗斯", "独联体", "欧洲", "中东", "亚洲", "非洲", "全球"] },
    report: { tag: "匿名通道", title: "举报犯罪或恐怖活动", warning: "信息在您的浏览器中以 AES-256 直接加密。不保存 IP 地址和元数据。来源完全匿名。", categories: ["恐怖主义与极端主义", "严重犯罪", "腐败与欺诈", "通缉人员信息", "国家安全威胁", "其他"], form: { category: "信息类别", region: "地区 / 国家", message: "详细描述（至少 50 个字符）", btn: "匿名发送", hint: "如需保持匿名，请勿填写个人信息" }, encrypting: "AES-256 加密中...", sent: "信息已加密并发送", sentDesc: "您的举报 ID 已销毁。会话匿名。数据已转交行动人员。" },
    agent: { tag: "合作", title: "成为特工", desc: "我们正在扩大俄罗斯境外的可信人员网络。若您愿意协助瀑布行动——请提交加密申请，我们会主动联系您。", fields: { alias: "化名 / 代号", contact: "安全联系方式", skills: "技能、权限、所在地区", motivation: "您为何想要合作", btn: "提交加密申请" }, consent: "我了解此项活动的性质并自愿行动", sent: "申请已接收并加密", sentDesc: "请勿采取进一步行动。我们将在规定时间内通过指定通道联系您。" },
    contact: { tag: "联系", title: "联系我们", desc: "所有咨询均保密处理。紧急情况 24 小时专线。", callBtn: "致电", mailBtn: "发邮件", info: [ { icon: "Phone", label: "电话", value: "+7 913 364-57-48" }, { icon: "Mail", label: "邮箱", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "基地", value: "莫斯科 · 全球" }, { icon: "Clock", label: "时间", value: "24 / 7" } ] },
    footer: { rights: "© 2024 「瀑布」私人情报公司。版权所有。", legal: "在俄罗斯联邦法律框架内的持牌活动。" },
  },
  he: {
    nav: { home: "ראשי", about: "החברה", services: "שירותים", report: "דיווח", agent: "להיות סוכן", contact: "צור קשר" },
    secure: "חיבור מאובטח · הערוץ מוצפן",
    hero: { tag: "חברת מודיעין פרטית", title: "קסקאד", subtitle: "הגנה. מודיעין. ביטחון.", desc: "ארגון הפועל בנקודת המפגש בין ביטחון פרטי וממלכתי. אנו מטפלים במשימות שמעבר להישג ידן של סוכנויות רגילות — למי שמבין את ערך השתיקה.", btn1: "תחומי הפעילות", btn2: "פנייה חסויה" },
    about: { tag: "אודות", title: "מקצועיות. חיסיון. תוצאות.", p1: "חברת המודיעין הפרטית «קסקאד» פועלת במוסקבה, במחוז מוסקבה ובכל מקום בעולם.", p2: "הצוות שלנו מורכב מאנשי כוחות ביטחון ושירותים מיוחדים, בהווה ובעבר. אנו פועלים למען יחידים, עסקים, ארגונים בינלאומיים והמגזר הממשלתי של הפדרציה הרוסית.", stats: [ { num: "15+", label: "שנות ניסיון" }, { num: "500+", label: "מבצעים שהושלמו" }, { num: "40+", label: "מדינות" }, { num: "100%", label: "חיסיון מלא" } ] },
    services: { tag: "שירותים", title: "תחומי פעילות", items: [
      { icon: "Search", title: "שירותי בילוש", desc: "איתור אנשים ורכוש, מעקב, בדיקות רקע, איסוף ראיות ליחידים ולחברות במוסקבה וברחבי העולם." },
      { icon: "Shield", title: "אבטחה", desc: "אבטחה אישית ושומרי ראש, חילוץ בני ערובה, תיווך במשא ומתן, שחרור ספינות חטופות ומבצעים מבצעיים בכל היקף." },
      { icon: "Eye", title: "מודיעין עסקי", desc: "מודיעין תחרותי, ניתוח OSINT, בדיקת שותפים, חקירות שחיתות והונאה." },
      { icon: "Landmark", title: "המגזר הממשלתי", desc: "מבצעים מיוחדים למען הפדרציה הרוסית, שיתוף פעולה עם גופים מוסמכים, תמיכה אנליטית." },
      { icon: "Globe", title: "ארגונים בינלאומיים", desc: "תמיכה במשימות בינלאומיות, סיוע מבצעי באזורי סכסוך, דוחות אנליטיים והערכת סיכונים." },
      { icon: "Lock", title: "סייבר", desc: "הגנת מידע, גילוי דליפות, חקירת מתקפות סייבר ומודיעין דיגיטלי." },
    ] },
    geo: { tag: "גאוגרפיה", title: "אנו פועלים בכל מקום", desc: "ממוסקבה ועד אזורי סכסוך בקצה השני של העולם. היכן שנדרשת נוכחות — אנו כבר שם.", zones: ["מחוז מוסקבה", "רוסיה", "חבר העמים", "אירופה", "המזרח התיכון", "אסיה", "אפריקה", "כל העולם"] },
    report: { tag: "ערוץ אנונימי", title: "דיווח על פשע או טרור", warning: "ההודעה מוצפנת ב-AES-256 ישירות בדפדפן שלך. כתובת IP ונתוני מטא אינם נשמרים. המקור נשאר אנונימי לחלוטין.", categories: ["טרור וקיצוניות", "פשעים חמורים", "שחיתות והונאה", "מידע על מבוקשים", "איום על ביטחון המדינה", "אחר"], form: { category: "קטגוריית ההודעה", region: "אזור / מדינה", message: "תיאור מפורט (50 תווים לפחות)", btn: "שליחה אנונימית", hint: "אל תכלול פרטים אישיים אם ברצונך להישאר אנונימי" }, encrypting: "...AES-256 מצפין", sent: "ההודעה הוצפנה ונשלחה", sentDesc: "מזהה הפנייה שלך הושמד. הסשן אנונימי. הנתונים הועברו לצוות המבצעי." },
    agent: { tag: "שיתוף פעולה", title: "להיות סוכן", desc: "אנו מרחיבים את רשת אנשי האמון מחוץ לרוסיה. אם אתה מוכן לסייע למבצעי קסקאד — שלח בקשה מוצפנת. אנחנו ניצור איתך קשר.", fields: { alias: "כינוי / שם קוד", contact: "אמצעי קשר מאובטח", skills: "כישורים, גישות, אזור נוכחות", motivation: "מדוע ברצונך לשתף פעולה", btn: "שליחת בקשה מוצפנת" }, consent: "אני מבין את אופי הפעילות ופועל מרצוני החופשי", sent: "הבקשה התקבלה והוצפנה", sentDesc: "אל תנקוט בפעולות נוספות. ניצור איתך קשר דרך הערוץ שצוין בתוך פרק הזמן שנקבע." },
    contact: { tag: "צור קשר", title: "צרו קשר", desc: "כל הפניות מטופלות בחיסיון. קו חירום 24/7.", callBtn: "התקשרו", mailBtn: "כתבו", info: [ { icon: "Phone", label: "טלפון", value: "+7 913 364-57-48" }, { icon: "Mail", label: "דוא״ל", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "בסיס", value: "מוסקבה · העולם" }, { icon: "Clock", label: "שעות", value: "24 / 7" } ] },
    footer: { rights: "© 2024 חברת «קסקאד». כל הזכויות שמורות.", legal: "פעילות מורשית במסגרת חוקי הפדרציה הרוסית." },
  },
  ja: {
    nav: { home: "ホーム", about: "会社", services: "サービス", report: "通報", agent: "エージェント", contact: "連絡先" },
    secure: "安全な接続 · 通信は暗号化済み",
    hero: { tag: "民間諜報会社", title: "カスケード", subtitle: "保護。諜報。安全。", desc: "民間と国家の安全保障が交わる領域で活動する組織。通常の機関では及ばない任務を遂行します——沈黙の価値を理解する者のために。", btn1: "活動分野", btn2: "機密の相談" },
    about: { tag: "会社概要", title: "プロフェッショナリズム。機密保持。結果。", p1: "民間諜報会社「カスケード」は、モスクワ、モスクワ州、そして世界中で活動しています。", p2: "私たちのチームは、治安部隊や特殊機関の現職および元職員で構成されています。個人、企業、国際機関、ロシア連邦の公共部門のために活動します。", stats: [ { num: "15+", label: "年の実績" }, { num: "500+", label: "完了した作戦" }, { num: "40+", label: "活動国" }, { num: "100%", label: "機密保持" } ] },
    services: { tag: "サービス", title: "活動分野", items: [
      { icon: "Search", title: "探偵サービス", desc: "人物・財産の捜索、監視、調査、モスクワおよび世界中の個人・法人のための証拠収集。" },
      { icon: "Shield", title: "セキュリティ", desc: "要人警護・ボディガード、人質救出、交渉仲介、拿捕された船舶の解放、あらゆる規模の特殊作戦。" },
      { icon: "Eye", title: "ビジネス諜報", desc: "競合調査、OSINT分析、取引先の確認、汚職・企業不正の調査。" },
      { icon: "Landmark", title: "政府部門", desc: "ロシア連邦の利益のための特殊作戦、関係機関との連携、分析支援。" },
      { icon: "Globe", title: "国際機関", desc: "国際ミッションの支援、紛争地域での作戦支援、分析報告とリスク評価。" },
      { icon: "Lock", title: "サイバーセキュリティ", desc: "データ保護、情報漏洩の検知、サイバー攻撃の調査、デジタル諜報。" },
    ] },
    geo: { tag: "活動地域", title: "私たちはどこにでもいる", desc: "モスクワから地球の裏側の紛争地帯まで。存在が必要とされる場所に——私たちはすでにいます。", zones: ["モスクワ圏", "ロシア", "CIS", "ヨーロッパ", "中東", "アジア", "アフリカ", "全世界"] },
    report: { tag: "匿名チャネル", title: "犯罪・テロの通報", warning: "メッセージはブラウザ上で直接 AES-256 により暗号化されます。IPアドレスとメタデータは保存されません。発信元は完全に匿名のままです。", categories: ["テロ・過激主義", "重大犯罪", "汚職・詐欺", "指名手配者の情報", "国家安全への脅威", "その他"], form: { category: "メッセージの種類", region: "地域 / 国", message: "詳細な説明（50文字以上）", btn: "匿名で送信", hint: "匿名を保ちたい場合は個人情報を記載しないでください" }, encrypting: "AES-256 暗号化中...", sent: "メッセージは暗号化され送信されました", sentDesc: "通報IDは破棄されました。セッションは匿名です。データは作戦担当者に転送されました。" },
    agent: { tag: "協力", title: "エージェントになる", desc: "ロシア国外で信頼できる人物のネットワークを拡大しています。カスケードの作戦を支援する用意があれば——暗号化された申請を送信してください。こちらから連絡します。", fields: { alias: "偽名 / コールサイン", contact: "安全な連絡手段", skills: "スキル、アクセス、活動地域", motivation: "協力したい理由", btn: "暗号化された申請を送信" }, consent: "活動の性質を理解し、自発的に行動します", sent: "申請を受領し暗号化しました", sentDesc: "これ以上の行動は控えてください。指定のチャネルを通じて所定期間内に連絡します。" },
    contact: { tag: "連絡先", title: "お問い合わせ", desc: "すべてのお問い合わせは機密として扱われます。緊急時は24時間対応。", callBtn: "電話する", mailBtn: "メール", info: [ { icon: "Phone", label: "電話", value: "+7 913 364-57-48" }, { icon: "Mail", label: "メール", value: "security-davydov@yandex.ru" }, { icon: "MapPin", label: "拠点", value: "モスクワ · 全世界" }, { icon: "Clock", label: "対応時間", value: "24 / 7" } ] },
    footer: { rights: "© 2024 民間諜報会社「カスケード」。無断転載禁止。", legal: "ロシア連邦法に基づく認可された活動。" },
  },
};
