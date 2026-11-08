/**
 * HAL149 — single source of truth for brand text, UI strings (EN + ES),
 * localized route segments, contact details, social links and colors.
 * Every component reads from here. Do not hardcode brand copy in markup.
 */

export type Lang = 'en' | 'es';
export type RouteKey = 'home' | 'blog' | 'topics' | 'about' | 'contact' | 'legalNotice' | 'privacy' | 'cookies';
export type ThemeName = 'dark' | 'light';

export interface ColorSet {
  background: string;
  surface: string;
  surface2: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  /** Accent used for small text — tuned for AA contrast on the background. */
  accentText: string;
  accent2: string;
  /** Text color placed on solid accent fills. */
  onAccent: string;
}

const en = {
  meta: {
    locale: 'en_US',
    siteTitle: 'HAL149 — Architecting the future of business with AI',
    siteDescription:
    'Essays, projects and field notes on agentic systems, AI-native business architecture and long-horizon thinking. By Luis, founder of HAL149.',
    titleSuffix: ' — HAL149',
    ogImageAlt: 'The HAL149 constellation mark over a deep-space field'
  },
  a11y: {
    skip: 'Skip to content',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    breadcrumb: 'Breadcrumb',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    language: 'Language',
    home: 'HAL149 home',
    newTab: 'opens in a new tab',
    loading: 'Loading'
  },
  languageNames: { en: 'English', es: 'Español' },
  nav: { home: 'Home', blog: 'Blog', topics: 'Topics', about: 'About', contact: 'Contact' },
  hero: {
    title: 'Architecting the future of business with AI and foresight.',
    subhead:
    'Essays, projects and field notes on redesigning organizations around autonomous capabilities. Long horizons, precise systems, no hype.',
    ctaPrimary: 'Read the transmissions',
    ctaSecondary: 'Explore topics',
    markLabel: 'The HAL149 mark drawn as a slowly orbiting constellation'
  },
  telemetry: {
    label: 'Mission telemetry',
    status: 'Status',
    statusValue: 'Transmitting',
    lastSignal: 'Last signal',
    daysAgo: (n: number) => n <= 0 ? 'Today' : n === 1 ? '1 day ago' : `${n} days ago`,
    essays: 'Essays',
    projects: 'Projects',
    notes: 'Notes'
  },
  manifesto: {
    heading: 'The thesis',
    intro: 'Three principles behind every transmission.',
    principles: [
    { title: 'Agents, not apps', body: 'Software is shifting from tools we operate to agents that act for us. Design for delegation, not for clicks.' },
    { title: 'Systems over tools', body: 'A model is a component, not a strategy. Advantage comes from how capabilities are composed, governed and measured.' },
    { title: 'Foresight is a discipline', body: 'The future is not predicted. It is rehearsed, through scenarios, signals and second-order thinking practiced every week.' }]

  },
  latest: { heading: 'Latest transmissions', viewAll: 'All transmissions' },
  constellation: {
    heading: 'Topic constellation',
    intro: 'Four hubs map the territory. Each explains one idea in depth.',
    count: (n: number) => `${n} ${n === 1 ? 'transmission' : 'transmissions'}`,
    enter: 'Enter hub',
    hint: 'Hover or focus a node to read its definition.'
  },
  projects: {
    heading: 'Selected projects',
    intro: 'Missions in flight, in assembly and in the archive.',
    status: { inOrbit: 'In orbit', inDevelopment: 'In development', archived: 'Archived' },
    view: 'Read mission brief'
  },
  subscribe: {
    heading: 'Receive the next transmission',
    body: 'One email when something new is published. Nothing else.',
    label: 'Email address',
    placeholder: 'you@company.com',
    submit: 'Subscribe',
    sending: 'Transmitting…',
    success: 'Signal received. You will hear from HAL149 at the next transmission.',
    error: 'The signal did not go through. Please try again.',
    invalid: 'Enter a valid email address.'
  },
  contactBand: { title: 'Building something that needs to exist in 2035?', cta: "Let's talk" },
  blog: {
    title: 'Transmissions',
    metaTitle: 'Transmissions: essays, projects and notes',
    metaDescription: 'Essays, project write-ups and field notes on agentic systems, AI-native business architecture and the philosophy of technology.',
    intro: 'Essays, project write-ups and field notes on AI, business architecture and long-horizon thinking.',
    searchLabel: 'Search transmissions',
    searchPlaceholder: 'Search titles and excerpts',
    typeFilter: 'Filter by type',
    topicFilter: 'Filter by topic',
    all: 'All',
    allTopics: 'All topics',
    types: { essay: 'Essay', project: 'Project', note: 'Note' },
    typesPlural: { essay: 'Essays', project: 'Projects', note: 'Notes' },
    results: (n: number) => `${n} ${n === 1 ? 'transmission' : 'transmissions'}`,
    empty: 'No transmissions match these filters.',
    clear: 'Clear filters',
    paginationLabel: 'Pagination',
    prev: 'Previous',
    next: 'Next',
    page: (n: number) => `Page ${n}`
  },
  post: {
    tldr: 'TL;DR · Key takeaways',
    toc: 'On this page',
    published: 'Published',
    updated: 'Updated',
    minRead: (n: number) => `${n} min read`,
    by: 'By',
    tags: 'Tags',
    related: 'Related transmissions',
    share: 'Share',
    shareX: 'Share on X',
    shareLinkedIn: 'Share on LinkedIn',
    copyLink: 'Copy link',
    copied: 'Link copied',
    prev: 'Previous',
    next: 'Next',
    aboutAuthor: 'About the author',
    moreAbout: 'More about Luis',
    missionBrief: 'Mission brief',
    brief: { objective: 'Objective', role: 'Role', stack: 'Stack', status: 'Status', outcome: 'Outcome' },
    footnotes: 'Notes',
    backToRef: 'Back to reference'
  },
  topics: {
    title: 'Topics',
    metaTitle: 'Topics: the four hubs of HAL149',
    metaDescription: 'Pillar pages on agentic systems, AI-native business architecture, the philosophy of technology and the future of work.',
    intro:
    'Four hubs organize everything published here. Each one defines a concept, explains it in depth and links to the essays and projects that test it in practice.',
    count: (n: number) => `${n} ${n === 1 ? 'transmission' : 'transmissions'}`,
    definition: 'Definition',
    explainer: 'In depth',
    keyConcepts: 'Key concepts',
    faq: 'Frequently asked questions',
    related: 'Transmissions in this hub',
    other: 'Other hubs',
    open: 'Open hub'
  },
  about: {
    title: 'About',
    metaTitle: 'About Luis, founder of HAL149',
    metaDescription: 'Luis is a strategist and builder designing AI-native organizations. Mission log, areas of focus and current explorations.',
    heading: 'Strategist. Builder. Long-horizon thinker.',
    longBio: 'The longer version',
    missionLog: 'Mission log',
    missionLogIntro: 'Career milestones, logged as missions.',
    active: 'Active',
    focus: 'Areas of focus',
    exploring: 'Currently exploring',
    speaking: 'Speaking & media',
    speakingBody: 'Talks, podcasts and interviews will appear here. Available for keynotes and workshops on AI-native organizations.',
    speakingCta: 'Propose a talk',
    elsewhere: 'Elsewhere',
    portraitAlt: 'Portrait placeholder: line-art silhouette of Luis inside an orbital ring'
  },
  contact: {
    title: 'Contact',
    metaTitle: 'Contact HAL149',
    metaDescription: 'Collaboration, advisory, speaking or press. Write to Luis at HAL149. Based in Spain, working remotely worldwide.',
    intro: 'Tell me what you are building and why it matters. I read every message.',
    fields: { name: 'Name', email: 'Email', organization: 'Organization', optional: 'optional', reason: 'Reason', message: 'Message' },
    reasonPlaceholder: 'Select a reason',
    reasons: { collaboration: 'Collaboration', advisory: 'Advisory', speaking: 'Speaking', press: 'Press', other: 'Other' },
    consentPre: 'I have read and accept the ',
    consentLink: 'privacy policy',
    consentPost: '.',
    submit: 'Send transmission',
    sending: 'Sending…',
    successTitle: 'Transmission received',
    successBody: 'Thank you. Expect a reply within two working days.',
    sendAnother: 'Send another message',
    errorBody: 'Something went wrong and your message was not sent. Please try again, or write directly to',
    summaryError: (n: number) => `Please review ${n} ${n === 1 ? 'field' : 'fields'}.`,
    errors: {
      name: 'Enter your name.',
      email: 'Enter a valid email address.',
      reason: 'Choose a reason.',
      message: 'Write a message of at least 20 characters.',
      consent: 'Please accept the privacy policy.'
    },
    aside: { email: 'Email', location: 'Location', response: 'Response time', social: 'Elsewhere' }
  },
  legal: {
    contents: 'Contents',
    lastUpdated: 'Last updated',
    notice: { title: 'Legal notice', metaDescription: 'Legal notice for hal149.com: site owner identification, terms of use, intellectual property and applicable law.' },
    privacy: { title: 'Privacy policy', metaDescription: 'How HAL149 processes personal data under the GDPR: purposes, legal bases, retention, recipients and your rights.' },
    cookies: { title: 'Cookie policy', metaDescription: 'Which cookies hal149.com uses, why, and how to manage your consent at any time.' }
  },
  cookies: {
    label: 'Cookie consent',
    text: 'Only essential cookies are used by default. With your consent, privacy-friendly analytics help improve this site.',
    accept: 'Accept',
    reject: 'Reject',
    settings: 'Settings',
    save: 'Save choices',
    policy: 'Cookie policy',
    reopen: 'Cookie settings',
    categories: {
      necessary: { title: 'Essential', desc: 'Required for the site to work. Always on.' },
      analytics: { title: 'Analytics', desc: 'Anonymous, aggregated usage statistics.' },
      preferences: { title: 'Preferences', desc: 'Remember theme and language choices.' }
    }
  },
  notFound: {
    metaTitle: 'Lost in space',
    metaDescription: 'This page could not be found.',
    code: 'Signal lost · 404',
    title: 'Lost in space',
    body: 'This coordinate does not exist, or it drifted out of range. Return to base or browse the transmissions.',
    home: 'Return home',
    blog: 'Read the transmissions'
  },
  footer: {
    mission: 'Architecting the future of business with AI and foresight.',
    explore: 'Explore',
    topics: 'Topics',
    legal: 'Legal',
    rights: '© 2026 HAL149',
    coordinates: '40.4168° N, 3.7038° W · EARTH'
  }
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    locale: 'es_ES',
    siteTitle: 'HAL149 — Arquitectura del futuro empresarial con IA',
    siteDescription:
    'Ensayos, proyectos y notas de campo sobre sistemas agénticos, arquitectura empresarial IA-nativa y pensamiento a largo plazo. Por Luis, fundador de HAL149.',
    titleSuffix: ' — HAL149',
    ogImageAlt: 'La marca constelación de HAL149 sobre un campo de espacio profundo'
  },
  a11y: {
    skip: 'Saltar al contenido',
    primaryNav: 'Principal',
    footerNav: 'Pie de página',
    breadcrumb: 'Ruta de navegación',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toDark: 'Cambiar a tema oscuro',
    toLight: 'Cambiar a tema claro',
    language: 'Idioma',
    home: 'Inicio de HAL149',
    newTab: 'se abre en una pestaña nueva',
    loading: 'Cargando'
  },
  languageNames: { en: 'English', es: 'Español' },
  nav: { home: 'Inicio', blog: 'Blog', topics: 'Temas', about: 'Sobre mí', contact: 'Contacto' },
  hero: {
    title: 'Arquitectura del futuro empresarial con IA y prospectiva.',
    subhead:
    'Ensayos, proyectos y notas de campo sobre cómo rediseñar organizaciones en torno a capacidades autónomas. Horizontes largos, sistemas precisos, sin ruido.',
    ctaPrimary: 'Leer las transmisiones',
    ctaSecondary: 'Explorar temas',
    markLabel: 'La marca de HAL149 dibujada como una constelación en órbita lenta'
  },
  telemetry: {
    label: 'Telemetría de la misión',
    status: 'Estado',
    statusValue: 'Transmitiendo',
    lastSignal: 'Última señal',
    daysAgo: (n: number) => n <= 0 ? 'Hoy' : n === 1 ? 'Hace 1 día' : `Hace ${n} días`,
    essays: 'Ensayos',
    projects: 'Proyectos',
    notes: 'Notas'
  },
  manifesto: {
    heading: 'La tesis',
    intro: 'Tres principios detrás de cada transmisión.',
    principles: [
    { title: 'Agentes, no aplicaciones', body: 'El software pasa de ser herramienta que operamos a agente que actúa por nosotros. Diseña para delegar, no para hacer clic.' },
    { title: 'Sistemas sobre herramientas', body: 'Un modelo es un componente, no una estrategia. La ventaja está en cómo se combinan, gobiernan y miden las capacidades.' },
    { title: 'La prospectiva es una disciplina', body: 'El futuro no se predice. Se ensaya, con escenarios, señales y pensamiento de segundo orden practicados cada semana.' }]

  },
  latest: { heading: 'Últimas transmisiones', viewAll: 'Todas las transmisiones' },
  constellation: {
    heading: 'Constelación de temas',
    intro: 'Cuatro núcleos trazan el territorio. Cada uno explica una idea en profundidad.',
    count: (n: number) => `${n} ${n === 1 ? 'transmisión' : 'transmisiones'}`,
    enter: 'Entrar al núcleo',
    hint: 'Pasa el cursor o enfoca un nodo para leer su definición.'
  },
  projects: {
    heading: 'Proyectos seleccionados',
    intro: 'Misiones en vuelo, en montaje y en el archivo.',
    status: { inOrbit: 'En órbita', inDevelopment: 'En desarrollo', archived: 'Archivado' },
    view: 'Leer informe de misión'
  },
  subscribe: {
    heading: 'Recibe la próxima transmisión',
    body: 'Un correo cuando se publica algo nuevo. Nada más.',
    label: 'Correo electrónico',
    placeholder: 'tu@empresa.com',
    submit: 'Suscribirme',
    sending: 'Transmitiendo…',
    success: 'Señal recibida. Sabrás de HAL149 en la próxima transmisión.',
    error: 'La señal no llegó. Inténtalo de nuevo.',
    invalid: 'Introduce un correo electrónico válido.'
  },
  contactBand: { title: '¿Construyes algo que debe existir en 2035?', cta: 'Hablemos' },
  blog: {
    title: 'Transmisiones',
    metaTitle: 'Transmisiones: ensayos, proyectos y notas',
    metaDescription: 'Ensayos, proyectos y notas de campo sobre sistemas agénticos, arquitectura empresarial IA-nativa y filosofía de la tecnología.',
    intro: 'Ensayos, proyectos y notas de campo sobre IA, arquitectura de negocio y pensamiento a largo plazo.',
    searchLabel: 'Buscar transmisiones',
    searchPlaceholder: 'Buscar en títulos y extractos',
    typeFilter: 'Filtrar por tipo',
    topicFilter: 'Filtrar por tema',
    all: 'Todo',
    allTopics: 'Todos los temas',
    types: { essay: 'Ensayo', project: 'Proyecto', note: 'Nota' },
    typesPlural: { essay: 'Ensayos', project: 'Proyectos', note: 'Notas' },
    results: (n: number) => `${n} ${n === 1 ? 'transmisión' : 'transmisiones'}`,
    empty: 'Ninguna transmisión coincide con estos filtros.',
    clear: 'Quitar filtros',
    paginationLabel: 'Paginación',
    prev: 'Anterior',
    next: 'Siguiente',
    page: (n: number) => `Página ${n}`
  },
  post: {
    tldr: 'TL;DR · Ideas clave',
    toc: 'En esta página',
    published: 'Publicado',
    updated: 'Actualizado',
    minRead: (n: number) => `${n} min de lectura`,
    by: 'Por',
    tags: 'Etiquetas',
    related: 'Transmisiones relacionadas',
    share: 'Compartir',
    shareX: 'Compartir en X',
    shareLinkedIn: 'Compartir en LinkedIn',
    copyLink: 'Copiar enlace',
    copied: 'Enlace copiado',
    prev: 'Anterior',
    next: 'Siguiente',
    aboutAuthor: 'Sobre el autor',
    moreAbout: 'Más sobre Luis',
    missionBrief: 'Informe de misión',
    brief: { objective: 'Objetivo', role: 'Rol', stack: 'Tecnología', status: 'Estado', outcome: 'Resultado' },
    footnotes: 'Notas',
    backToRef: 'Volver a la referencia'
  },
  topics: {
    title: 'Temas',
    metaTitle: 'Temas: los cuatro núcleos de HAL149',
    metaDescription: 'Páginas pilar sobre sistemas agénticos, arquitectura empresarial IA-nativa, filosofía de la tecnología y el futuro del trabajo.',
    intro:
    'Cuatro núcleos organizan todo lo que se publica aquí. Cada uno define un concepto, lo explica en profundidad y enlaza los ensayos y proyectos que lo ponen a prueba.',
    count: (n: number) => `${n} ${n === 1 ? 'transmisión' : 'transmisiones'}`,
    definition: 'Definición',
    explainer: 'En profundidad',
    keyConcepts: 'Conceptos clave',
    faq: 'Preguntas frecuentes',
    related: 'Transmisiones de este núcleo',
    other: 'Otros núcleos',
    open: 'Abrir núcleo'
  },
  about: {
    title: 'Sobre mí',
    metaTitle: 'Sobre Luis, fundador de HAL149',
    metaDescription: 'Luis es estratega y constructor de organizaciones IA-nativas. Bitácora de misiones, áreas de enfoque y exploraciones actuales.',
    heading: 'Estratega. Constructor. Pensador de largo plazo.',
    longBio: 'La versión larga',
    missionLog: 'Bitácora de misiones',
    missionLogIntro: 'Hitos profesionales, registrados como misiones.',
    active: 'Activa',
    focus: 'Áreas de enfoque',
    exploring: 'Explorando ahora',
    speaking: 'Conferencias y medios',
    speakingBody: 'Aquí aparecerán charlas, pódcasts y entrevistas. Disponible para ponencias y talleres sobre organizaciones IA-nativas.',
    speakingCta: 'Proponer una charla',
    elsewhere: 'En otros sitios',
    portraitAlt: 'Retrato provisional: silueta lineal de Luis dentro de un anillo orbital'
  },
  contact: {
    title: 'Contacto',
    metaTitle: 'Contacto con HAL149',
    metaDescription: 'Colaboración, asesoría, conferencias o prensa. Escribe a Luis en HAL149. Desde España, en remoto para todo el mundo.',
    intro: 'Cuéntame qué estás construyendo y por qué importa. Leo todos los mensajes.',
    fields: { name: 'Nombre', email: 'Correo electrónico', organization: 'Organización', optional: 'opcional', reason: 'Motivo', message: 'Mensaje' },
    reasonPlaceholder: 'Elige un motivo',
    reasons: { collaboration: 'Colaboración', advisory: 'Asesoría', speaking: 'Conferencias', press: 'Prensa', other: 'Otro' },
    consentPre: 'He leído y acepto la ',
    consentLink: 'política de privacidad',
    consentPost: '.',
    submit: 'Enviar transmisión',
    sending: 'Enviando…',
    successTitle: 'Transmisión recibida',
    successBody: 'Gracias. Recibirás respuesta en un máximo de dos días laborables.',
    sendAnother: 'Enviar otro mensaje',
    errorBody: 'Algo falló y tu mensaje no se envió. Inténtalo de nuevo o escribe directamente a',
    summaryError: (n: number) => `Revisa ${n} ${n === 1 ? 'campo' : 'campos'}.`,
    errors: {
      name: 'Introduce tu nombre.',
      email: 'Introduce un correo electrónico válido.',
      reason: 'Elige un motivo.',
      message: 'Escribe un mensaje de al menos 20 caracteres.',
      consent: 'Acepta la política de privacidad.'
    },
    aside: { email: 'Correo', location: 'Ubicación', response: 'Tiempo de respuesta', social: 'En otros sitios' }
  },
  legal: {
    contents: 'Contenido',
    lastUpdated: 'Última actualización',
    notice: { title: 'Aviso legal', metaDescription: 'Aviso legal de hal149.com: identificación del titular, condiciones de uso, propiedad intelectual y legislación aplicable.' },
    privacy: { title: 'Política de privacidad', metaDescription: 'Cómo trata HAL149 los datos personales según el RGPD: finalidades, bases jurídicas, conservación, destinatarios y derechos.' },
    cookies: { title: 'Política de cookies', metaDescription: 'Qué cookies utiliza hal149.com, para qué y cómo gestionar tu consentimiento en cualquier momento.' }
  },
  cookies: {
    label: 'Consentimiento de cookies',
    text: 'Por defecto solo se usan cookies esenciales. Con tu consentimiento, una analítica respetuosa con la privacidad ayuda a mejorar el sitio.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    settings: 'Configurar',
    save: 'Guardar selección',
    policy: 'Política de cookies',
    reopen: 'Configurar cookies',
    categories: {
      necessary: { title: 'Esenciales', desc: 'Necesarias para que el sitio funcione. Siempre activas.' },
      analytics: { title: 'Analítica', desc: 'Estadísticas de uso anónimas y agregadas.' },
      preferences: { title: 'Preferencias', desc: 'Recuerdan el tema y el idioma.' }
    }
  },
  notFound: {
    metaTitle: 'Perdido en el espacio',
    metaDescription: 'No se ha encontrado esta página.',
    code: 'Señal perdida · 404',
    title: 'Perdido en el espacio',
    body: 'Esta coordenada no existe o se ha salido de alcance. Vuelve a la base o explora las transmisiones.',
    home: 'Volver al inicio',
    blog: 'Leer las transmisiones'
  },
  footer: {
    mission: 'Arquitectura del futuro empresarial con IA y prospectiva.',
    explore: 'Explorar',
    topics: 'Temas',
    legal: 'Legal',
    rights: '© 2026 HAL149',
    coordinates: '40.4168° N, 3.7038° O · TIERRA'
  }
};

export const brand = {
  name: 'HAL149',
  siteUrl: 'https://hal149.com',
  ogImage: '/og-image.png',
  logoPath: '/favicon.svg',
  author: {
    name: 'Luis', // verify full name before launch
    initials: 'L',
    role: { en: 'Founder, HAL149', es: 'Fundador, HAL149' },
    bio: {
      en: 'Strategist and builder working at the intersection of AI, business architecture and philosophy. He designs organizations where autonomous capabilities do real work, and writes about what that demands of leaders.',
      es: 'Estratega y constructor en la intersección entre IA, arquitectura de negocio y filosofía. Diseña organizaciones donde las capacidades autónomas hacen trabajo real y escribe sobre lo que eso exige a quien lidera.'
    },
    avatarAlt: { en: 'Avatar placeholder for Luis', es: 'Avatar provisional de Luis' }
  },
  contact: {
    email: 'hello@hal149.com',
    endpoint: '/api/contact',
    location: { en: 'Spain · remote worldwide', es: 'España · remoto en todo el mundo' },
    responseTime: { en: 'Within 2 working days', es: 'En 2 días laborables' }
  },
  social: {
    linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-handle' },
    x: { label: 'X', url: 'https://x.com/your-handle' },
    github: { label: 'GitHub', url: 'https://github.com/your-handle' }
  },
  colors: {
    dark: {
      background: '#050B1A',
      surface: '#0A1A33',
      surface2: '#102445',
      border: '#1C3358',
      text: '#E6EEF8',
      textMuted: '#8DA2C0',
      accent: '#00E5D1',
      accentText: '#00E5D1',
      accent2: '#3D7BFF',
      onAccent: '#050B1A'
    },
    light: {
      background: '#F5F8FC',
      surface: '#FFFFFF',
      surface2: '#EAF0F8',
      border: '#D6E0EE',
      text: '#0A1A33',
      textMuted: '#4A5D7A',
      accent: '#00A894',
      accentText: '#007A6B',
      accent2: '#2F64D9',
      onAccent: '#04111F'
    }
  } as Record<ThemeName, ColorSet>,
  fonts: { heading: 'Space Grotesk', body: 'Inter', mono: 'JetBrains Mono' },
  routes: {
    en: {
      home: '/',
      blog: '/blog',
      topics: '/topics',
      about: '/about',
      contact: '/contact',
      legalNotice: '/legal/notice',
      privacy: '/legal/privacy',
      cookies: '/legal/cookies'
    },
    es: {
      home: '/es',
      blog: '/es/blog',
      topics: '/es/temas',
      about: '/es/sobre-mi',
      contact: '/es/contacto',
      legalNotice: '/es/legal/aviso-legal',
      privacy: '/es/legal/privacidad',
      cookies: '/es/legal/cookies'
    }
  } as Record<Lang, Record<RouteKey, string>>,
  i18n: { en, es } as Record<Lang, Dictionary>
};

export const languages: Lang[] = ['en', 'es'];