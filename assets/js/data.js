export const navConfig = {
  home:      { mode: "anchor", href: "#home" },
  about:     { mode: "anchor", href: "#about" },
  cases:     { mode: "anchor", href: "#cases" },
  stack:     { mode: "anchor", href: "#stack" },
  freelance: { mode: "anchor", href: "#freelance" },
  contact:   { mode: "anchor", href: "#contact" },
};

export const cases = [
  {
    title: "EdTech-платформа · интерактивные тетради",
    tag: "Platform",
    bg: "https://staff.admin.ox.ac.uk/sites/default/files/staff/images/media/customer_relationship_management_crm_platform_1.png",
    teaser: "От контента → к продукту: сценарии, метрики, масштабирование и устойчивый выпуск функционала.",
    meta: { role:"Product Owner", scope:"Платформа / контент / UX", users:"ученики / преподаватели", stage:"MVP → scale" },
    details: [
      ["Контекст", "Нужно перевести часть учебного контента в цифровой формат и сделать основу для дальнейшего масштабирования."],
      ["Цель/метрики", "Вовлечённость, completion по заданиям, retention, time-to-value (заглушки — вставишь свои KPI)."],
      ["Решение", "Сценарии пользователей → интерактивные блоки → аналитика событий → итерации по данным."],
      ["Результат", "Платформа готова к расширению линейки продуктов; контент интегрирован и управляется масштабируемо."]
    ]
  },
  {
    title: "CRM & Ops · автоматизация процессов",
    tag: "Automation",
    bg: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1400&q=70",
    teaser: "Снижение ручной работы и прозрачная воронка: статусы, SLA, маршрутизация, уведомления.",
    meta: { role:"PO / Ops", scope:"CRM + процессы", users:"sales/ops", stage:"оптимизация" },
    details: [
      ["Проблема", "Ручные операции, разрозненные статусы, потери на стыках и сложный контроль качества."],
      ["Цель/метрики", "Cycle time, % автоматизации, ошибки/возвраты, SLA по этапам (заглушки)."],
      ["Решение", "Процессная модель + триггеры/интеграции + логирование и мониторинг ошибок."],
      ["Результат", "Ускорение обработки и повышение предсказуемости: меньше ошибок, понятные статусы, отчётность."]
    ]
  },
  {
    title: "Продуктовая аналитика · KPI / воронки / когорты",
    tag: "Analytics",
    bg: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=70",
    teaser: "Единое окно управления продуктом: KPI, сегменты, сигналы и решения на данных.",
    meta: { role:"PO / Analyst", scope:"BI & data-model", users:"product/stakeholders", stage:"операционализация" },
    details: [
      ["Цель", "Сделать метрики читаемыми и действия — быстрыми: от вопроса к решению без “ручного ада”."],
      ["Состав", "North Star, KPI, воронки, когорты, сегменты, аномалии (event-based)."],
      ["Инструменты", "SQL / DAX / Power BI / DataLens."],
      ["Результат", "Единый язык метрик для команды и стейкхолдеров, ускорение приоритизации."]
    ]
  },
  {
    title: "Mobile ecosystem · удержание и сценарии",
    tag: "Product",
    bg: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=70",
    teaser: "Сценарии → ценность → ретеншн: улучшение UX по данным и внятные эксперименты.",
    meta: { role:"Product Owner", scope:"Mobile + funnels", users:"B2C", stage:"growth" },
    details: [
      ["Задача", "Усилить ключевые сценарии и снизить потери в воронке."],
      ["Метрики", "Activation, retention, conversion, time-to-value (заглушки)."],
      ["Подход", "Гипотезы → A/B / квазиэксперименты → релизы → контроль влияния."],
      ["Результат", "Улучшения UX с контролем влияния на ключевые метрики."]
    ]
  },
  {
    title: "Integrations · системы в связке",
    tag: "Integrations",
    bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=70",
    teaser: "Стабильный data-flow: синхронизация, статусы, обработка ошибок и контроль качества.",
    meta: { role:"PO / Tech", scope:"integration layer", users:"ops", stage:"stability" },
    details: [
      ["Проблема", "Данные расходятся, статусы теряются, ручной контроль, нет прозрачности."],
      ["Решение", "Единые справочники, идемпотентность, мониторинг, retry, аудит-лог."],
      ["Метрики", "Error rate, latency, % ручных исправлений (заглушки)."],
      ["Результат", "Меньше ручной работы, выше надёжность, понятный контроль качества."]
    ]
  },
  {
    title: "Product ops · поставка ценности",
    tag: "Delivery",
    bg: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=70",
    teaser: "Предсказуемая поставка: бэклог, приоритизация, статусы, коммуникация со стейкхолдерами.",
    meta: { role:"Senior PO", scope:"process & roadmap", users:"team/stakeholders", stage:"system" },
    details: [
      ["Цель", "Снизить хаос: понятный roadmap, прозрачные приоритеты, управляемые риски."],
      ["Подход", "Discovery/Delivery, Definition of Ready/Done, cadence, статус-репорты."],
      ["Метрики", "Lead time, throughput, predictability (заглушки)."],
      ["Результат", "Команда быстрее доставляет ценность, меньше “пожаров”, выше прозрачность."]
    ]
  },
];

export const freelance = [
  {
    title: "Tilda · кастомный блок (web-app feel)",
    tag:"UI",
    bg:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=70",
    teaser:"Изолированные стили, аккуратный UX и интерактивная механика без конфликтов CSS.",
    meta: { role:"Product/Frontend", scope:"Tilda custom", users:"маркетинг", stage:"production" },
    details:[
      ["Задача","Сделать блок, который выглядит как отдельное мини-приложение на странице."],
      ["Решение","Изоляция стилей, состояния, адаптив, микроанимации, доступность."],
      ["Результат","Блок “держит” внимание и не ломает верстку сайта."]
    ]
  },
  {
    title: "Лендинг · структура и конверсия",
    tag:"Web",
    bg:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1400&q=70",
    teaser:"Сильная структура: value → proof → CTA, микроинтерактивы и быстрый time-to-value.",
    meta: { role:"PO/UX", scope:"landing", users:"B2B/B2C", stage:"launch" },
    details:[
      ["Подход","JTBD, структура смыслов, визуальная иерархия, CTA."],
      ["Метрики","CTR/CR, scroll depth, CTA clicks (заглушки)."],
      ["Результат","Лендинг читается как продуктовая страница, проще принимать решение."]
    ]
  },
  {
    title: "Dashboard · KPI для решений",
    tag:"Data",
    bg:"https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1400&q=70",
    teaser:"KPI-панель, сегменты и фильтры — чтобы бизнес понимал “что делать дальше”.",
    meta: { role:"Analyst", scope:"BI", users:"management", stage:"ops" },
    details:[
      ["Состав","KPI, тренды, сегментации, сигналы аномалий."],
      ["UX","Чёткая логика чтения метрик, минимум когнитивной нагрузки."],
      ["Результат","Быстрее цикл “вопрос → ответ → действие”."]
    ]
  },
  {
    title: "Automation · операционка без рутины",
    tag:"Ops",
    bg:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=70",
    teaser:"Уведомления, статусы, маршрутизация и контроль ошибок — меньше ручного труда.",
    meta: { role:"Ops/PO", scope:"automation", users:"ops", stage:"stability" },
    details:[
      ["Что","Триггеры, сценарии, интеграции, мониторинг."],
      ["Зачем","Снизить ошибки и ускорить цикл выполнения задач."],
      ["Результат","Процесс работает устойчиво и прозрачно."]
    ]
  },
  {
    title: "Prototype · проверка гипотез",
    tag:"Product",
    bg:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70",
    teaser:"Быстрый прототип → тест → выводы → итерации. Экономия времени и денег.",
    meta: { role:"Product", scope:"prototype", users:"customers", stage:"discovery" },
    details:[
      ["Цель","Понять, что реально нужно пользователю."],
      ["Процесс","Сценарии → прототип → тесты → аналитика."],
      ["Результат","Более точный roadmap и меньше неверных ставок."]
    ]
  },
  {
    title: "Design system · чистый премиум UI",
    tag:"Design",
    bg:"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=70",
    teaser:"Типографика, сетка, состояния компонентов — чтобы интерфейс был системным.",
    meta: { role:"Product/UX", scope:"UI kit", users:"team", stage:"system" },
    details:[
      ["Принцип","Контраст, структура, повторяемость компонентов."],
      ["Состав","Buttons, cards, modals, states, spacing."],
      ["Результат","Быстрее разработка и единый визуальный язык."]
    ]
  },
];

export const stackItems = [
  { group:"Аналитика", name:"SQL", value:100 },
  { group:"Аналитика", name:"DAX", value:100 },
  { group:"Аналитика", name:"Power BI", value:100 },
  { group:"Аналитика", name:"Yandex DataLens", value:100 },
  { group:"Аналитика", name:"Python", value:100 },
  { group:"CRM & Ops", name:"MS Dynamics", value:100 },
  { group:"CRM & Ops", name:"Bitrix24", value:100 },
  { group:"CRM & Ops", name:"Power Automate", value:100 },
  { group:"CRM & Ops", name:"Integrations", value:100 },
];