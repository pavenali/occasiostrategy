// Occasio Strategy — full EN/ES translation dictionary.
// Keep keys flat-namespaced (section.key) so components can read t('hero.title') etc.

export const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.work': 'Engagements',
    'nav.capabilities': 'Capabilities',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a conversation',

    // Hero
    'hero.badge': 'Boutique strategy & analytics advisory',
    'hero.title.a': 'Turning enterprise data into ',
    'hero.title.b': 'measurable business outcomes.',
    'hero.subtitle':
      'Occasio Strategy is a boutique advisory partnering with executive teams to design analytics, BI and AI systems that move revenue, retention and operating cost — not dashboards that sit unused.',
    'hero.cta.primary': "Let's talk",
    'hero.cta.secondary': 'See our work',
    'hero.stat.years': 'Years of senior experience',
    'hero.stat.revenue': 'Client revenue uplift delivered',
    'hero.stat.cost': 'Cloud cost reduction achieved',
    'hero.stat.churn': 'Customer churn reduced',

    // About
    'about.eyebrow': 'About',
    'about.title.a': 'Senior judgement, ',
    'about.title.b': 'engineered into every engagement.',
    'about.p1':
      'Occasio Strategy was founded to bridge two worlds that rarely sit at the same table: executive finance and applied data science. Our work begins where most analytics projects end — at the moment a business case needs to be defended in front of a CFO.',
    'about.p2':
      'We partner with global companies that want their data, BI and AI stack to behave like a strategic asset — measurable, defensible, and tied to a P&L. Every engagement is led personally, with senior practitioners in the room from day one.',
    'about.p3':
      'Our cross-industry pattern recognition is one of our biggest assets — a churn model in retail finance teaches us something useful about banking wealth management, and vice versa.',
    'about.founder.label': 'Founder & Principal',
    'about.founder.name': 'Pablo Avenali',
    'about.founder.bio':
      "20+ years inside the rooms where multinational companies decide where to grow, what to launch, and where to cut. Career across Accenture, Cencosud, HSBC, Movistar and Telefónica. MBA · CPA · Berkeley · ENEB Master in Business AI. Has led cross-functional teams across LATAM, the US, the UK, Canada and India.",
    'about.location.label': 'Headquartered',
    'about.location.value': 'Argentina · Operating globally',
    'about.languages.label': 'Working languages',
    'about.languages.value': 'EN · ES · PT · IT',
    'about.education.label': 'Credentials',
    'about.education.value': 'MBA · CPA · Scrum Master · Berkeley · ENEB',

    // Services
    'services.eyebrow': 'Services',
    'services.title.a': 'What we build for ',
    'services.title.b': 'leadership teams.',
    'services.intro':
      'Nine focused capabilities, sequenced into engagements that deliver visible business impact in the first 90 days.',
    'services.s1.title': 'Financial Analytics',
    'services.s1.body':
      'P&L forecasting, margin analysis and FP&A automation that gives finance teams a real-time grip on performance.',
    'services.s2.title': 'BI Dashboards',
    'services.s2.body':
      'Executive-grade Power BI and cloud dashboards that replace 40-tab spreadsheets with one source of truth.',
    'services.s3.title': 'AI Implementation',
    'services.s3.body':
      'From scoping to deployment — GenAI assistants, RAG systems and agentic workflows on GPT, Claude and Copilot.',
    'services.s4.title': 'Process Optimization',
    'services.s4.body':
      "We find the bottlenecks executives suspect but can't prove, then re-engineer them with data and automation.",
    'services.s5.title': 'Predictive Modeling',
    'services.s5.body':
      'Churn, propensity, demand and revenue models that have multiplied campaign response rates up to 3×.',
    'services.s6.title': 'Data Strategy',
    'services.s6.body':
      'Governance, warehouse design and cloud migration roadmaps tailored to your business — not a vendor catalog.',
    'services.s7.title': 'Automation Workflows',
    'services.s7.body':
      'n8n, Copilot Studio and Python pipelines that quietly remove hours of manual work every week.',
    'services.s8.title': 'Executive Reporting',
    'services.s8.body':
      'Narratives, not numbers. Board-ready insight packs that surface the decision, not the dataset.',
    'services.s9.title': 'Business Transformation',
    'services.s9.body':
      'End-to-end programs that move organizations from instinct-driven to data-driven — and make it stick.',

    // Industries
    'industries.eyebrow': 'Industries',
    'industries.title.a': 'Sectors where our work has ',
    'industries.title.b': 'moved the number.',
    'industries.intro':
      'Cross-industry pattern recognition compounds — methods proven in retail or banking transfer into telecom, logistics or healthcare with minimal adaptation.',
    'industries.retail': 'Retail',
    'industries.retail.note': 'Category, CRM & loyalty',
    'industries.finance': 'Finance & Banking',
    'industries.finance.note': 'Wealth, credit & P&L',
    'industries.agro': 'Agro',
    'industries.agro.note': 'Demand & yield analytics',
    'industries.fmcg': 'FMCG',
    'industries.fmcg.note': 'Supply & pricing',
    'industries.ecom': 'E-commerce',
    'industries.ecom.note': 'Conversion & LTV',
    'industries.log': 'Logistics',
    'industries.log.note': 'Network & routing',
    'industries.health': 'Healthcare',
    'industries.health.note': 'Operational intelligence',
    'industries.gov': 'Government',
    'industries.gov.note': 'Public-sector data programs',

    // Case Studies
    'work.eyebrow': 'Selected engagements',
    'work.title.a': 'Programs where data ',
    'work.title.b': 'paid for itself.',
    'work.intro':
      'Three representative engagements from the last decade. References available under standard confidentiality.',
    'work.challenge': 'Challenge',
    'work.solution': 'Solution',
    'work.impact': 'Impact',
    'work.confidential': 'Available as a confidential reference call',

    'work.case1.sector': 'Retail · LATAM',
    'work.case1.badge': 'Multi-format retail group',
    'work.case1.title': '$30M revenue uplift through CRM and predictive analytics',
    'work.case1.challenge':
      'A multi-format retailer (supermarkets, home improvement, financial retail, shopping centers, media) was making segmentation decisions on instinct, with rising churn in its loyalty base.',
    'work.case1.solution':
      'Redesigned the CRM analytics stack, built predictive churn and propensity models, and rewired campaign targeting around customer lifetime value. Led a cross-functional team of 8 analysts under an agile delivery model.',
    'work.case1.i1': '+$30M annual revenue uplift',
    'work.case1.i2': '+17% customer retention',
    'work.case1.i3': '−25% churn in priority segments',

    'work.case2.sector': 'Banking · Global',
    'work.case2.badge': 'Global banking group',
    'work.case2.title': 'P&L forecasting model that reshaped credit product strategy',
    'work.case2.challenge':
      "The bank's credit P&L forecasting was fragmented across regions and product lines, leading to missed return targets and overly defensive product mixes.",
    'work.case2.solution':
      'Built a unified global P&L forecasting model for credit-related products using time-series methods, ML-based propensity scoring, and Adobe Analytics behavioral signals. Presented monthly to senior management.',
    'work.case2.i1': '3× response rate on targeted campaigns',
    'work.case2.i2': 'Investment-return targets reached',
    'work.case2.i3': 'Adopted as monthly C-suite input',

    'work.case3.sector': 'Consulting · Global delivery',
    'work.case3.badge': 'Global consultancy',
    'work.case3.title': 'AI-automated analytics scaled across four regions',
    'work.case3.challenge':
      'A global consultancy needed to deliver executive-grade analytics to clients across India, UK, US and Canada — without proportionally scaling headcount.',
    'work.case3.solution':
      'Designed an automated analytics layer combining SQL, Power BI, Copilot Studio, n8n and GPT-class models. Insights are generated, narrated and routed to C-suite stakeholders with minimal human intervention.',
    'work.case3.i1': '+10% growth in targeted business areas',
    'work.case3.i2': 'Multi-region delivery without scale tax',
    'work.case3.i3': 'Insights signed off by global execs',

    // Tech Stack
    'stack.eyebrow': 'Tech stack',
    'stack.title.a': 'The tools, used in ',
    'stack.title.b': 'production.',
    'stack.intro':
      "Not a checklist — a stack we've deployed inside Fortune 500 environments, from data ingest to executive narrative.",
    'stack.group.data': 'Data & Databases',
    'stack.group.bi': 'BI & Visualization',
    'stack.group.cloud': 'Cloud Platforms',
    'stack.group.ai': 'AI & Automation',
    'stack.group.prog': 'Programming',
    'stack.group.erp': 'Enterprise & ERP',
    'stack.credentials.label': 'Credentials',
    'stack.credentials.body':
      'MBA · Certified Public Accountant · Scrum Master · DP-900 · Berkeley · ENEB Master in Business AI',
    'stack.credentials.cta': 'See full background',

    // AI Capabilities
    'ai.eyebrow': 'AI & analytics',
    'ai.title.a': 'Real AI capability, ',
    'ai.title.b': 'not slideware.',
    'ai.intro1':
      'Our AI work sits where most organizations need it — between the hype and the spreadsheet. Models that actually score customers, agents that actually answer questions, automations that actually reduce headcount on rework.',
    'ai.intro2':
      "Active in the field: Master in Business AI (ENEB, Barcelona) and Berkeley's Business Analytics for Leaders program.",
    'ai.cta': 'Scope an AI engagement',
    'ai.c1.title': 'Machine Learning models',
    'ai.c1.body':
      'Propensity, churn, demand and pricing models built on SAS Miner, AWS SageMaker and Python — deployed inside banks, telcos and retailers.',
    'ai.c2.title': 'Conversational AI & Agents',
    'ai.c2.body':
      'GPT and Claude-powered assistants integrated with Copilot Studio and n8n, embedded into existing analytics and reporting workflows.',
    'ai.c3.title': 'RAG & knowledge retrieval',
    'ai.c3.body':
      'Retrieval-augmented systems that turn fragmented enterprise documents and dashboards into a single ask-anything interface.',
    'ai.c4.title': 'Process automation',
    'ai.c4.body':
      'End-to-end workflow automation that connects data pipelines, business systems and AI models — quietly removing operational drag.',
    'ai.c5.title': 'NLP for business signal',
    'ai.c5.body':
      'Topic, sentiment and classification models that pull structured signal out of unstructured customer, sales and support data.',
    'ai.c6.title': 'AI governance & adoption',
    'ai.c6.body':
      'Guardrails, evaluation frameworks and change-management plans — so AI investments stick rather than become abandoned pilots.',

    // Testimonials
    'tst.eyebrow': 'Testimonials',
    'tst.title.a': 'What partners and ',
    'tst.title.b': 'stakeholders say.',
    'tst.disclaimer':
      'Names and full attributions available on request, under standard confidentiality.',
    'tst.q1':
      "Occasio doesn't deliver dashboards — they deliver decisions. They rebuilt our CRM analytics from the ground up and within two cycles retention was moving in the right direction.",
    'tst.r1.name': 'Director of CRM',
    'tst.r1.role': 'Multi-format retail group · LATAM',
    'tst.q2':
      'One of the few advisory teams that genuinely speaks finance. Our credit P&L forecasting went from a quarterly debate to a monthly fact, and product-mix decisions improved across regions.',
    'tst.r2.name': 'Head of Wealth Analytics',
    'tst.r2.role': 'Global banking group',
    'tst.q3':
      'They embedded AI automation into our delivery model without breaking anything. The team got faster, the C-suite got sharper outputs, and the cost line moved the right way.',
    'tst.r3.name': 'Senior Manager, Data & AI',
    'tst.r3.role': 'Global consultancy',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title.a': "Let's build something ",
    'contact.title.b': 'measurable.',
    'contact.intro':
      "We take on a small number of engagements each year — typically analytics transformations, AI implementations, or fractional leadership roles. If you're weighing a data or AI initiative and want a candid view before committing, the first conversation is free.",
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.instagram.label': 'Instagram',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.message': 'What are you exploring?',
    'contact.form.placeholder':
      'A quick paragraph on the business problem, your team, and any timing constraints.',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Opening your email client…',
    'contact.form.note':
      'Submissions open your email client with a pre-filled draft — nothing is stored or tracked.',

    // Footer
    'footer.tagline':
      'Boutique strategy, analytics and AI advisory for companies that want their data to behave like a strategic asset.',
    'footer.navigate': 'Navigate',
    'footer.connect': 'Connect',
    'footer.legal': 'All rights reserved.',
    'footer.built': 'Designed & developed in-house · React · Tailwind',

    // Language switcher
    'lang.label': 'Language',
  },

  es: {
    // Navigation
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.industries': 'Industrias',
    'nav.work': 'Casos',
    'nav.capabilities': 'Capacidades',
    'nav.contact': 'Contacto',
    'nav.cta': 'Iniciar una conversación',

    // Hero
    'hero.badge': 'Asesoría boutique en estrategia y analytics',
    'hero.title.a': 'Convertimos los datos de la empresa en ',
    'hero.title.b': 'resultados medibles del negocio.',
    'hero.subtitle':
      'Occasio Strategy es una consultora boutique que acompaña a equipos ejecutivos en el diseño de sistemas de analytics, BI e IA que mueven el revenue, la retención y el costo operativo — no dashboards que nadie mira.',
    'hero.cta.primary': 'Hablemos',
    'hero.cta.secondary': 'Ver nuestro trabajo',
    'hero.stat.years': 'Años de experiencia senior',
    'hero.stat.revenue': 'Revenue incremental entregado',
    'hero.stat.cost': 'Reducción de costos cloud',
    'hero.stat.churn': 'Reducción de churn de clientes',

    // About
    'about.eyebrow': 'Nosotros',
    'about.title.a': 'Criterio senior, ',
    'about.title.b': 'integrado en cada engagement.',
    'about.p1':
      'Occasio Strategy nace para tender un puente entre dos mundos que rara vez se sientan en la misma mesa: las finanzas ejecutivas y la ciencia de datos aplicada. Nuestro trabajo empieza donde la mayoría de los proyectos de analytics terminan — en el momento en que un business case se defiende frente a un CFO.',
    'about.p2':
      'Trabajamos con compañías globales que quieren que su stack de datos, BI e IA se comporte como un activo estratégico — medible, defendible y atado a un P&L. Cada engagement es liderado personalmente, con practitioners senior en la mesa desde el día uno.',
    'about.p3':
      'El reconocimiento de patrones cross-industria es uno de nuestros mayores activos — un modelo de churn en retail financiero nos enseña algo útil sobre wealth management bancario, y viceversa.',
    'about.founder.label': 'Founder & Principal',
    'about.founder.name': 'Pablo Avenali',
    'about.founder.bio':
      'Más de 20 años dentro de las salas donde las multinacionales deciden dónde crecer, qué lanzar y dónde recortar. Carrera en Accenture, Cencosud, HSBC, Movistar y Telefónica. MBA · CPA · Berkeley · ENEB Máster en Business AI. Ha liderado equipos cross-funcionales en LATAM, EE.UU., Reino Unido, Canadá e India.',
    'about.location.label': 'Sede',
    'about.location.value': 'Argentina · Operación global',
    'about.languages.label': 'Idiomas de trabajo',
    'about.languages.value': 'EN · ES · PT · IT',
    'about.education.label': 'Credenciales',
    'about.education.value': 'MBA · CPA · Scrum Master · Berkeley · ENEB',

    // Services
    'services.eyebrow': 'Servicios',
    'services.title.a': 'Lo que construimos para ',
    'services.title.b': 'los equipos de liderazgo.',
    'services.intro':
      'Nueve capacidades enfocadas, secuenciadas en engagements que entregan impacto visible en los primeros 90 días.',
    'services.s1.title': 'Financial Analytics',
    'services.s1.body':
      'Forecast de P&L, análisis de márgenes y automatización de FP&A que le dan a finanzas un control en tiempo real sobre la performance.',
    'services.s2.title': 'Dashboards de BI',
    'services.s2.body':
      'Dashboards ejecutivos en Power BI y cloud que reemplazan planillas de 40 pestañas con una única fuente de verdad.',
    'services.s3.title': 'Implementación de IA',
    'services.s3.body':
      'Del scoping al deployment — asistentes GenAI, sistemas RAG y workflows agénticos sobre GPT, Claude y Copilot.',
    'services.s4.title': 'Optimización de procesos',
    'services.s4.body':
      'Encontramos los cuellos de botella que los ejecutivos sospechan pero no pueden probar, y los rediseñamos con datos y automatización.',
    'services.s5.title': 'Modelado predictivo',
    'services.s5.body':
      'Modelos de churn, propensión, demanda y revenue que multiplicaron hasta 3× el response rate de campañas.',
    'services.s6.title': 'Data Strategy',
    'services.s6.body':
      'Gobierno del dato, diseño de warehouse y roadmaps de migración cloud hechos a medida del negocio — no del catálogo de un vendor.',
    'services.s7.title': 'Workflows de automatización',
    'services.s7.body':
      'Pipelines en n8n, Copilot Studio y Python que silenciosamente eliminan horas de trabajo manual cada semana.',
    'services.s8.title': 'Reporting ejecutivo',
    'services.s8.body':
      'Narrativas, no números. Paquetes de insight listos para directorio que muestran la decisión, no el dataset.',
    'services.s9.title': 'Transformación de negocio',
    'services.s9.body':
      'Programas end-to-end que mueven a las organizaciones del instinto a los datos — y lo sostienen en el tiempo.',

    // Industries
    'industries.eyebrow': 'Industrias',
    'industries.title.a': 'Sectores donde nuestro trabajo ',
    'industries.title.b': 'movió el número.',
    'industries.intro':
      'El reconocimiento de patrones cross-industria se acumula — métodos probados en retail o banca se trasladan a telco, logística o salud con mínima adaptación.',
    'industries.retail': 'Retail',
    'industries.retail.note': 'Categoría, CRM & loyalty',
    'industries.finance': 'Finanzas & Banca',
    'industries.finance.note': 'Wealth, crédito & P&L',
    'industries.agro': 'Agro',
    'industries.agro.note': 'Analytics de demanda y rinde',
    'industries.fmcg': 'FMCG',
    'industries.fmcg.note': 'Supply & pricing',
    'industries.ecom': 'E-commerce',
    'industries.ecom.note': 'Conversión & LTV',
    'industries.log': 'Logística',
    'industries.log.note': 'Red & ruteo',
    'industries.health': 'Salud',
    'industries.health.note': 'Inteligencia operativa',
    'industries.gov': 'Gobierno',
    'industries.gov.note': 'Programas de datos del sector público',

    // Case Studies
    'work.eyebrow': 'Casos seleccionados',
    'work.title.a': 'Programas donde los datos ',
    'work.title.b': 'se pagaron solos.',
    'work.intro':
      'Tres engagements representativos de la última década. Referencias disponibles bajo confidencialidad estándar.',
    'work.challenge': 'Desafío',
    'work.solution': 'Solución',
    'work.impact': 'Impacto',
    'work.confidential': 'Disponible como reference call confidencial',

    'work.case1.sector': 'Retail · LATAM',
    'work.case1.badge': 'Grupo retail multi-formato',
    'work.case1.title': 'Uplift de $30M en revenue mediante CRM y analytics predictivo',
    'work.case1.challenge':
      'Un retailer multi-formato (supermercados, mejoras del hogar, retail financiero, shopping centers, media) tomaba decisiones de segmentación por instinto, con churn creciente en su base de loyalty.',
    'work.case1.solution':
      'Rediseñamos el stack de CRM analytics, construimos modelos predictivos de churn y propensión, y reconfiguramos el targeting de campañas en torno al customer lifetime value. Liderazgo de un equipo cross-funcional de 8 analistas bajo entrega ágil.',
    'work.case1.i1': '+$30M de revenue anual',
    'work.case1.i2': '+17% de retención de clientes',
    'work.case1.i3': '−25% de churn en segmentos prioritarios',

    'work.case2.sector': 'Banca · Global',
    'work.case2.badge': 'Grupo bancario global',
    'work.case2.title': 'Modelo de forecast de P&L que redefinió la estrategia de productos de crédito',
    'work.case2.challenge':
      'El forecast del P&L de crédito estaba fragmentado entre regiones y líneas de producto, lo que llevaba a no alcanzar los targets de retorno y a un mix de productos demasiado defensivo.',
    'work.case2.solution':
      'Construimos un modelo unificado de forecast de P&L para productos de crédito usando series de tiempo, scoring de propensión basado en ML y señales de comportamiento de Adobe Analytics. Presentado mensualmente al management senior.',
    'work.case2.i1': '3× de response rate en campañas dirigidas',
    'work.case2.i2': 'Targets de retorno de inversión alcanzados',
    'work.case2.i3': 'Adoptado como input mensual del C-suite',

    'work.case3.sector': 'Consultoría · Entrega global',
    'work.case3.badge': 'Consultora global',
    'work.case3.title': 'Analytics automatizado con IA escalado en cuatro regiones',
    'work.case3.challenge':
      'Una consultora global necesitaba entregar analytics de nivel ejecutivo a clientes en India, Reino Unido, EE.UU. y Canadá — sin escalar headcount en la misma proporción.',
    'work.case3.solution':
      'Diseñamos una capa automatizada de analytics que combina SQL, Power BI, Copilot Studio, n8n y modelos GPT. Los insights se generan, narran y rutean al C-suite con mínima intervención humana.',
    'work.case3.i1': '+10% de crecimiento en áreas target',
    'work.case3.i2': 'Entrega multi-región sin scale tax',
    'work.case3.i3': 'Insights firmados por ejecutivos globales',

    // Tech Stack
    'stack.eyebrow': 'Stack técnico',
    'stack.title.a': 'Las herramientas, en ',
    'stack.title.b': 'producción.',
    'stack.intro':
      'No es un checklist — es un stack que hemos desplegado en entornos Fortune 500, del ingest del dato a la narrativa ejecutiva.',
    'stack.group.data': 'Datos & Bases de datos',
    'stack.group.bi': 'BI & Visualización',
    'stack.group.cloud': 'Plataformas Cloud',
    'stack.group.ai': 'IA & Automatización',
    'stack.group.prog': 'Programación',
    'stack.group.erp': 'Enterprise & ERP',
    'stack.credentials.label': 'Credenciales',
    'stack.credentials.body':
      'MBA · Contador Público · Scrum Master · DP-900 · Berkeley · ENEB Máster en Business AI',
    'stack.credentials.cta': 'Ver background completo',

    // AI Capabilities
    'ai.eyebrow': 'IA & analytics',
    'ai.title.a': 'Capacidad de IA real, ',
    'ai.title.b': 'no slideware.',
    'ai.intro1':
      'Nuestro trabajo en IA se ubica donde la mayoría de las organizaciones lo necesita — entre el hype y la planilla. Modelos que efectivamente scorean clientes, agentes que efectivamente responden, automatizaciones que efectivamente reducen retrabajo.',
    'ai.intro2':
      'Activos en la disciplina: Máster en Business AI (ENEB, Barcelona) y el programa Business Analytics for Leaders de Berkeley.',
    'ai.cta': 'Diseñar un engagement de IA',
    'ai.c1.title': 'Modelos de Machine Learning',
    'ai.c1.body':
      'Modelos de propensión, churn, demanda y pricing construidos sobre SAS Miner, AWS SageMaker y Python — desplegados en bancos, telcos y retailers.',
    'ai.c2.title': 'IA conversacional & Agentes',
    'ai.c2.body':
      'Asistentes basados en GPT y Claude integrados con Copilot Studio y n8n, embebidos en los workflows existentes de analytics y reporting.',
    'ai.c3.title': 'RAG & recuperación de conocimiento',
    'ai.c3.body':
      'Sistemas RAG que convierten documentos y dashboards corporativos fragmentados en una única interfaz para preguntar lo que sea.',
    'ai.c4.title': 'Automatización de procesos',
    'ai.c4.body':
      'Automatización end-to-end que conecta pipelines de datos, sistemas de negocio y modelos de IA — eliminando fricción operativa.',
    'ai.c5.title': 'NLP para señal de negocio',
    'ai.c5.body':
      'Modelos de tópico, sentimiento y clasificación que extraen señal estructurada de datos no estructurados de clientes, ventas y soporte.',
    'ai.c6.title': 'Gobierno y adopción de IA',
    'ai.c6.body':
      'Guardrails, frameworks de evaluación y planes de change-management — para que la inversión en IA se sostenga en vez de convertirse en pilotos abandonados.',

    // Testimonials
    'tst.eyebrow': 'Testimonios',
    'tst.title.a': 'Lo que dicen partners y ',
    'tst.title.b': 'stakeholders.',
    'tst.disclaimer':
      'Nombres y atribuciones completas disponibles a pedido, bajo confidencialidad estándar.',
    'tst.q1':
      'Occasio no entrega dashboards — entrega decisiones. Rediseñaron nuestro CRM analytics desde cero y en dos ciclos la retención empezó a moverse en la dirección correcta.',
    'tst.r1.name': 'Director de CRM',
    'tst.r1.role': 'Grupo retail multi-formato · LATAM',
    'tst.q2':
      'Uno de los pocos equipos de asesoría que realmente habla finanzas. Nuestro forecast de P&L de crédito pasó de ser un debate trimestral a un hecho mensual, y las decisiones de mix de producto mejoraron en todas las regiones.',
    'tst.r2.name': 'Head of Wealth Analytics',
    'tst.r2.role': 'Grupo bancario global',
    'tst.q3':
      'Embebieron automatización de IA en nuestro modelo de delivery sin romper nada. El equipo se aceleró, el C-suite recibió outputs más afilados y la línea de costos se movió en la dirección correcta.',
    'tst.r3.name': 'Senior Manager, Data & AI',
    'tst.r3.role': 'Consultora global',

    // Contact
    'contact.eyebrow': 'Contacto',
    'contact.title.a': 'Construyamos algo ',
    'contact.title.b': 'medible.',
    'contact.intro':
      'Tomamos un número limitado de engagements por año — habitualmente transformaciones de analytics, implementaciones de IA o roles de liderazgo fraccional. Si están evaluando una iniciativa de datos o IA y quieren una mirada honesta antes de comprometerse, la primera conversación no tiene costo.',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.instagram.label': 'Instagram',
    'contact.form.name': 'Nombre',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'Email',
    'contact.form.message': '¿Qué están evaluando?',
    'contact.form.placeholder':
      'Un párrafo breve sobre el problema de negocio, su equipo y los plazos relevantes.',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.sending': 'Abriendo tu cliente de email…',
    'contact.form.note':
      'El envío abre tu cliente de email con un borrador pre-cargado — no se almacena ni se trackea nada.',

    // Footer
    'footer.tagline':
      'Asesoría boutique en estrategia, analytics e IA para compañías que quieren que sus datos se comporten como un activo estratégico.',
    'footer.navigate': 'Navegación',
    'footer.connect': 'Conectar',
    'footer.legal': 'Todos los derechos reservados.',
    'footer.built': 'Diseñado y desarrollado in-house · React · Tailwind',

    // Language switcher
    'lang.label': 'Idioma',
  },
}
