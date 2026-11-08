import type { Post } from '../types/content';

export const essays: Post[] = [
{
  id: 'company-os',
  type: 'essay',
  topic: 'ai-native-architecture',
  status: 'publicado',
  publishedAt: '2026-11-03',
  updatedAt: '2026-11-05',
  readingTime: 7,
  coverImage: {
    seed: 3,
    alt: {
      en: 'Line-art orbits nested around a bright core, suggesting the layers of a company operating system',
      es: 'Órbitas lineales anidadas alrededor de un núcleo brillante, que sugieren las capas de un sistema operativo empresarial'
    }
  },
  en: {
    slug: 'company-as-operating-system',
    title: 'The Company as an Operating System',
    subtitle: 'If agents do the work, the org chart becomes a scheduler. Design it like one.',
    excerpt: 'Companies already allocate scarce resources, schedule work and enforce permissions. AI makes the operating-system metaphor literal.',
    tldr: [
    'A company is a runtime for decisions: it schedules work, allocates resources and enforces permissions.',
    'AI agents turn roles into processes, so the operating model must be designed like a kernel.',
    'Leaders who win will specify interfaces, policies and observability, not just headcount.'],

    tags: ['operating model', 'agents', 'governance'],
    body: [
    { type: 'h2', id: 'kernel', text: 'The kernel nobody designed' },
    { type: 'p', text: 'Every company runs on a kernel it never wrote down. It decides who can approve what, which requests jump the queue and where information may flow. Most of it lives in habit, email threads and the memory of long-tenured people.[^1]' },
    { type: 'p', text: 'That worked while every process was a person. People absorb ambiguity. They negotiate priorities in hallways. They notice when a rule no longer makes sense. Agents do none of this unless we tell them how.' },
    { type: 'pullquote', text: 'When work is executed by software, the operating model stops being culture and becomes code.' },
    { type: 'h2', id: 'processes', text: 'Roles become processes' },
    { type: 'p', text: 'In an operating system, a process has an identity, a set of permissions, a resource budget and a defined way to communicate. Replace "process" with "agent" and you have the design brief for an AI-native company.' },
    { type: 'list', items: ['Identity: which capability is acting, and on whose behalf.', 'Permissions: what it can read, write, spend and commit to.', 'Scheduling: what runs first when everything is urgent.', 'Communication: how agents hand work to each other and to humans.'] },
    { type: 'h3', id: 'scheduler', text: 'The scheduler is strategy' },
    { type: 'p', text: 'Prioritization is where strategy becomes real. A scheduler that always serves the loudest request belongs to a company without a strategy. Making priorities explicit, and machine-readable, forces the conversation most leadership teams avoid.' },
    { type: 'code', lang: 'yaml', code: 'policy: quarterly-priorities\nrules:\n  - match: { segment: smb, intent: churn-risk }\n    priority: critical\n    escalate_to: human.account-lead\n  - match: { intent: feature-request }\n    priority: normal\n    batch: weekly' },
    { type: 'h2', id: 'observability', text: 'Observability is governance' },
    { type: 'p', text: 'An operating system you cannot inspect is a liability. So is a company run partly by agents. Logs, traces and escalation paths are not engineering details. They are how a board knows what the company actually did.' },
    { type: 'quote', text: 'Simple, clear purpose and principles give rise to complex and intelligent behavior.', cite: 'Dee Hock' },
    { type: 'figure', seed: 11, alt: 'Concentric orbits labelled as policy, scheduling, execution and observation layers', caption: 'Fig. 1 — The company as a layered runtime: policy, scheduling, execution, observation.' },
    { type: 'p', text: 'The leader’s work becomes architectural: define interfaces, write policies, instrument everything. Headcount planning turns into capacity planning across people and machines.' }],

    footnotes: ['Conway’s law is the closest classical description: systems mirror the communication structures of the organizations that build them.']
  },
  es: {
    slug: 'la-empresa-como-sistema-operativo',
    title: 'La empresa como sistema operativo',
    subtitle: 'Si los agentes hacen el trabajo, el organigrama se convierte en un planificador. Diséñalo como tal.',
    excerpt: 'Las empresas ya asignan recursos escasos, planifican trabajo y aplican permisos. La IA convierte la metáfora del sistema operativo en literal.',
    tldr: [
    'Una empresa es un entorno de ejecución de decisiones: planifica trabajo, asigna recursos y aplica permisos.',
    'Los agentes de IA convierten roles en procesos, así que el modelo operativo debe diseñarse como un núcleo.',
    'Ganará quien especifique interfaces, políticas y observabilidad, no solo plantilla.'],

    tags: ['modelo operativo', 'agentes', 'gobernanza'],
    body: [
    { type: 'h2', id: 'nucleo', text: 'El núcleo que nadie diseñó' },
    { type: 'p', text: 'Toda empresa funciona sobre un núcleo que nunca puso por escrito. Decide quién aprueba qué, qué peticiones se adelantan en la cola y por dónde puede circular la información. Casi todo vive en hábitos, hilos de correo y la memoria de las personas veteranas.[^1]' },
    { type: 'p', text: 'Eso funcionaba mientras cada proceso era una persona. Las personas absorben ambigüedad, negocian prioridades en el pasillo y detectan cuándo una regla ya no tiene sentido. Los agentes no hacen nada de eso si no se lo explicamos.' },
    { type: 'pullquote', text: 'Cuando el trabajo lo ejecuta software, el modelo operativo deja de ser cultura y pasa a ser código.' },
    { type: 'h2', id: 'procesos', text: 'Los roles se convierten en procesos' },
    { type: 'p', text: 'En un sistema operativo, un proceso tiene identidad, permisos, un presupuesto de recursos y una forma definida de comunicarse. Sustituye «proceso» por «agente» y tienes el encargo de diseño de una empresa IA-nativa.' },
    { type: 'list', items: ['Identidad: qué capacidad actúa y en nombre de quién.', 'Permisos: qué puede leer, escribir, gastar y comprometer.', 'Planificación: qué va primero cuando todo es urgente.', 'Comunicación: cómo se pasan trabajo los agentes entre sí y con las personas.'] },
    { type: 'h3', id: 'planificador', text: 'El planificador es la estrategia' },
    { type: 'p', text: 'La priorización es donde la estrategia se vuelve real. Un planificador que siempre atiende la petición más ruidosa pertenece a una empresa sin estrategia. Hacer explícitas las prioridades, y legibles por máquina, fuerza la conversación que muchos comités evitan.' },
    { type: 'code', lang: 'yaml', code: 'policy: prioridades-trimestrales\nrules:\n  - match: { segmento: pyme, intencion: riesgo-baja }\n    priority: critica\n    escalate_to: humano.responsable-cuenta\n  - match: { intencion: peticion-funcionalidad }\n    priority: normal\n    batch: semanal' },
    { type: 'h2', id: 'observabilidad', text: 'La observabilidad es gobernanza' },
    { type: 'p', text: 'Un sistema operativo que no puedes inspeccionar es un riesgo. También lo es una empresa operada en parte por agentes. Registros, trazas y rutas de escalado no son detalles de ingeniería: son la forma en que un consejo sabe qué hizo realmente la empresa.' },
    { type: 'quote', text: 'Un propósito y unos principios simples y claros dan lugar a un comportamiento complejo e inteligente.', cite: 'Dee Hock' },
    { type: 'figure', seed: 11, alt: 'Órbitas concéntricas etiquetadas como capas de política, planificación, ejecución y observación', caption: 'Fig. 1 — La empresa como entorno de ejecución por capas: política, planificación, ejecución, observación.' },
    { type: 'p', text: 'El trabajo de quien lidera se vuelve arquitectónico: definir interfaces, escribir políticas, instrumentarlo todo. La planificación de plantilla pasa a ser planificación de capacidad entre personas y máquinas.' }],

    footnotes: ['La ley de Conway es la descripción clásica más cercana: los sistemas reflejan las estructuras de comunicación de las organizaciones que los construyen.']
  }
},
{
  id: 'agents-replace-interfaces',
  type: 'essay',
  topic: 'agentic-systems',
  status: 'publicado',
  publishedAt: '2026-10-20',
  updatedAt: '2026-10-22',
  readingTime: 6,
  coverImage: {
    seed: 7,
    alt: {
      en: 'A grid of faint rectangles dissolving into a single connected constellation line',
      es: 'Una retícula de rectángulos tenues que se disuelve en una única línea de constelación conectada'
    }
  },
  en: {
    slug: 'why-agents-will-replace-interfaces',
    title: 'Why Agents Will Replace Interfaces',
    subtitle: 'The screen was a workaround for machines that could not understand intent.',
    excerpt: 'Interfaces exist because software could not understand what we meant. As agents learn intent, the interface recedes into a contract.',
    tldr: [
    'Graphical interfaces translate human intent into machine steps; agents perform that translation themselves.',
    'The durable product surface becomes the contract: goals, constraints, permissions and proof of work.',
    'Design effort shifts from screens to delegation, review and recovery.'],

    tags: ['agents', 'interaction design', 'product'],
    body: [
    { type: 'h2', id: 'translation', text: 'Interfaces are translation layers' },
    { type: 'p', text: 'Every form, menu and dashboard is a translation. The human holds an intent, such as "renew the contracts that are about to expire", and the interface breaks it into steps a machine can follow. We learned to think in those steps because the machine could not.' },
    { type: 'p', text: 'Agents remove the need for that translation. When software can parse an intent, plan the steps and execute them, the screen stops being the place where work happens. It becomes the place where work is checked.' },
    { type: 'h2', id: 'contract', text: 'From screens to contracts' },
    { type: 'p', text: 'What replaces the interface is a contract between the person and the agent. It answers four questions before any action is taken:' },
    { type: 'list', ordered: true, items: ['What outcome is wanted?', 'What constraints must hold?', 'What is the agent allowed to do?', 'What evidence will show the work was done well?'] },
    { type: 'pullquote', text: 'The best interface for a task you delegate is a receipt.' },
    { type: 'h3', id: 'review', text: 'Review becomes the primary surface' },
    { type: 'p', text: 'If the agent acts, the human reviews. The craft moves to summaries that can be trusted at a glance, diffs that show what changed and undo paths that are always one step away.[^1]' },
    { type: 'h2', id: 'what-remains', text: 'What remains' },
    { type: 'p', text: 'Interfaces will not disappear. They will specialize. Creative tools, exploration and anything where the doing is the point will keep rich surfaces. Routine operational work will move behind contracts and receipts.' },
    { type: 'p', text: 'For product teams, the question changes from "what should this screen show?" to "what should this agent be trusted with, and how will we know?"' }],

    footnotes: ['Undo is the most underrated feature of agentic products. Reversibility is what makes delegation safe.']
  },
  es: {
    slug: 'por-que-los-agentes-reemplazaran-las-interfaces',
    title: 'Por qué los agentes reemplazarán las interfaces',
    subtitle: 'La pantalla fue un apaño para máquinas que no entendían la intención.',
    excerpt: 'Las interfaces existen porque el software no entendía lo que queríamos decir. A medida que los agentes aprenden la intención, la interfaz se repliega en un contrato.',
    tldr: [
    'Las interfaces gráficas traducen la intención humana en pasos de máquina; los agentes hacen esa traducción por sí mismos.',
    'La superficie duradera del producto pasa a ser el contrato: objetivos, restricciones, permisos y prueba del trabajo.',
    'El esfuerzo de diseño se desplaza de las pantallas a la delegación, la revisión y la recuperación.'],

    tags: ['agentes', 'diseño de interacción', 'producto'],
    body: [
    { type: 'h2', id: 'traduccion', text: 'Las interfaces son capas de traducción' },
    { type: 'p', text: 'Cada formulario, menú y panel es una traducción. La persona tiene una intención, como «renovar los contratos que están a punto de vencer», y la interfaz la divide en pasos que una máquina puede seguir. Aprendimos a pensar en esos pasos porque la máquina no podía.' },
    { type: 'p', text: 'Los agentes eliminan esa traducción. Cuando el software interpreta una intención, planifica los pasos y los ejecuta, la pantalla deja de ser el lugar donde ocurre el trabajo. Pasa a ser el lugar donde se comprueba.' },
    { type: 'h2', id: 'contrato', text: 'De pantallas a contratos' },
    { type: 'p', text: 'Lo que sustituye a la interfaz es un contrato entre la persona y el agente. Responde a cuatro preguntas antes de cualquier acción:' },
    { type: 'list', ordered: true, items: ['¿Qué resultado se busca?', '¿Qué restricciones deben cumplirse?', '¿Qué puede hacer el agente?', '¿Qué evidencia mostrará que el trabajo se hizo bien?'] },
    { type: 'pullquote', text: 'La mejor interfaz para una tarea que delegas es un recibo.' },
    { type: 'h3', id: 'revision', text: 'La revisión se convierte en la superficie principal' },
    { type: 'p', text: 'Si el agente actúa, la persona revisa. El oficio se traslada a resúmenes fiables de un vistazo, comparaciones que muestran qué cambió y caminos para deshacer siempre a un paso.[^1]' },
    { type: 'h2', id: 'lo-que-queda', text: 'Lo que queda' },
    { type: 'p', text: 'Las interfaces no desaparecerán. Se especializarán. Las herramientas creativas, la exploración y todo aquello donde hacer es el objetivo mantendrán superficies ricas. El trabajo operativo rutinario pasará detrás de contratos y recibos.' },
    { type: 'p', text: 'Para los equipos de producto, la pregunta cambia de «¿qué debe mostrar esta pantalla?» a «¿qué debemos confiar a este agente y cómo lo sabremos?».' }],

    footnotes: ['Deshacer es la funcionalidad más infravalorada de los productos agénticos. La reversibilidad es lo que hace segura la delegación.']
  }
},
{
  id: 'foresight-discipline',
  type: 'essay',
  topic: 'philosophy-of-technology',
  status: 'publicado',
  publishedAt: '2026-09-28',
  updatedAt: '2026-10-01',
  readingTime: 8,
  coverImage: {
    seed: 12,
    alt: {
      en: 'A thin telescope-like line pointing toward a distant cluster of stars along a dashed trajectory',
      es: 'Una línea fina, como un telescopio, que apunta a un cúmulo lejano de estrellas siguiendo una trayectoria discontinua'
    }
  },
  en: {
    slug: 'foresight-is-a-discipline',
    title: 'Foresight Is a Discipline, Not a Talent',
    subtitle: 'Nobody sees the future. Some organizations simply rehearse it more often.',
    excerpt: 'We treat foresight as a gift that visionaries are born with. It is closer to fitness: a set of exercises, practiced on a schedule.',
    tldr: [
    'Foresight is not prediction; it is preparing for several plausible futures at once.',
    'It can be practiced weekly through signal scanning, scenario building and premortems.',
    'Organizations that rehearse futures respond faster when one of them arrives.'],

    tags: ['foresight', 'strategy', 'scenarios'],
    body: [
    { type: 'h2', id: 'not-prediction', text: 'Foresight is not prediction' },
    { type: 'p', text: 'Prediction asks what will happen. Foresight asks what could happen, and what we would do in each case. The first is a bet. The second is preparation, and preparation compounds.' },
    { type: 'p', text: 'The myth of the visionary hides this. We remember the founder who "saw it coming" and forget the dozens who saw something else. The useful skill is not being right. It is being ready across a range of outcomes.' },
    { type: 'quote', text: 'The best way to predict the future is to invent it.', cite: 'Alan Kay' },
    { type: 'h2', id: 'practice', text: 'A weekly practice' },
    { type: 'p', text: 'Disciplines have routines. Foresight can be reduced to a rhythm small enough to survive a busy calendar:' },
    { type: 'list', ordered: true, items: ['Scan: collect five weak signals from outside your industry.', 'Cluster: group them into forces that might shape the next decade.', 'Imagine: write one paragraph describing a future where a force wins.', 'Ask: what would we regret not starting today?'] },
    { type: 'h3', id: 'premortem', text: 'The premortem' },
    { type: 'p', text: 'Imagine the strategy has failed, three years from now. Write the story of why. This simple exercise surfaces assumptions that optimism hides, and it takes thirty minutes.[^1]' },
    { type: 'pullquote', text: 'The future is not predicted. It is rehearsed.' },
    { type: 'h2', id: 'ai-and-foresight', text: 'Why AI raises the stakes' },
    { type: 'p', text: 'AI compresses the time between a signal and its consequences. Capabilities that were speculative last year are commodities today. In that environment, the organizations that rehearse are the only ones that react in time.' },
    { type: 'p', text: 'Foresight is not a department. It is a habit leaders model, one scenario at a time.' }],

    footnotes: ['The premortem technique is commonly credited to the psychologist Gary Klein.']
  },
  es: {
    slug: 'la-prospectiva-es-una-disciplina',
    title: 'La prospectiva es una disciplina, no un talento',
    subtitle: 'Nadie ve el futuro. Algunas organizaciones simplemente lo ensayan más a menudo.',
    excerpt: 'Tratamos la prospectiva como un don con el que nacen los visionarios. Se parece más al entrenamiento físico: ejercicios practicados con regularidad.',
    tldr: [
    'La prospectiva no es predicción; es prepararse para varios futuros plausibles a la vez.',
    'Se puede practicar cada semana con escaneo de señales, escenarios y análisis premortem.',
    'Las organizaciones que ensayan futuros reaccionan antes cuando uno de ellos llega.'],

    tags: ['prospectiva', 'estrategia', 'escenarios'],
    body: [
    { type: 'h2', id: 'no-es-prediccion', text: 'La prospectiva no es predicción' },
    { type: 'p', text: 'La predicción pregunta qué ocurrirá. La prospectiva pregunta qué podría ocurrir y qué haríamos en cada caso. Lo primero es una apuesta. Lo segundo es preparación, y la preparación se acumula.' },
    { type: 'p', text: 'El mito del visionario lo oculta. Recordamos a quien «lo vio venir» y olvidamos a los muchos que vieron otra cosa. La habilidad útil no es acertar, sino estar preparado ante un abanico de resultados.' },
    { type: 'quote', text: 'La mejor forma de predecir el futuro es inventarlo.', cite: 'Alan Kay' },
    { type: 'h2', id: 'practica', text: 'Una práctica semanal' },
    { type: 'p', text: 'Las disciplinas tienen rutinas. La prospectiva cabe en un ritmo lo bastante pequeño para sobrevivir a una agenda llena:' },
    { type: 'list', ordered: true, items: ['Escanear: reúne cinco señales débiles de fuera de tu sector.', 'Agrupar: ordénalas en fuerzas que podrían marcar la próxima década.', 'Imaginar: escribe un párrafo sobre un futuro donde gana una fuerza.', 'Preguntar: ¿qué lamentaríamos no haber empezado hoy?'] },
    { type: 'h3', id: 'premortem', text: 'El premortem' },
    { type: 'p', text: 'Imagina que la estrategia ha fracasado dentro de tres años. Escribe la historia de por qué. Este ejercicio sencillo saca a la luz supuestos que el optimismo oculta, y lleva treinta minutos.[^1]' },
    { type: 'pullquote', text: 'El futuro no se predice. Se ensaya.' },
    { type: 'h2', id: 'ia-y-prospectiva', text: 'Por qué la IA eleva lo que está en juego' },
    { type: 'p', text: 'La IA comprime el tiempo entre una señal y sus consecuencias. Capacidades especulativas el año pasado son hoy una mercancía. En ese entorno, solo las organizaciones que ensayan reaccionan a tiempo.' },
    { type: 'p', text: 'La prospectiva no es un departamento. Es un hábito que quien lidera ejemplifica, escenario a escenario.' }],

    footnotes: ['La técnica premortem se atribuye habitualmente al psicólogo Gary Klein.']
  }
},
{
  id: 'non-human-colleagues',
  type: 'essay',
  topic: 'future-of-work',
  status: 'publicado',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 7,
  coverImage: {
    seed: 19,
    alt: {
      en: 'Two clusters of nodes, one round and one angular, joined by several fine bridges',
      es: 'Dos grupos de nodos, uno redondeado y otro angular, unidos por varios puentes finos'
    }
  },
  en: {
    slug: 'designing-organizations-for-non-human-colleagues',
    title: 'Designing Organizations for Non-Human Colleagues',
    subtitle: 'Onboarding, accountability and trust, rewritten for teams that include agents.',
    excerpt: 'When an agent joins a team, it needs what any colleague needs: a clear role, context, a manager and a way to be corrected.',
    tldr: [
    'Agents should be onboarded like colleagues: role, context, permissions and a named human owner.',
    'Accountability stays human; execution can be shared.',
    'Team rituals must make agent work visible, reviewable and improvable.'],

    tags: ['organization design', 'agents', 'teams'],
    body: [
    { type: 'h2', id: 'onboarding', text: 'Onboarding an agent' },
    { type: 'p', text: 'Most agent deployments fail for the same reason most new hires struggle: no one explained the job. A prompt is not a role description. An agent needs to know what good looks like, which tools it may use and who to ask when it is unsure.' },
    { type: 'list', items: ['A written role with scope and boundaries.', 'Curated context: documents, examples, past decisions.', 'Explicit permissions, starting narrow.', 'A named human owner who reviews its work.'] },
    { type: 'h2', id: 'accountability', text: 'Accountability stays human' },
    { type: 'p', text: 'An agent can execute. It cannot be accountable. Every agent should map to a person who answers for its outcomes. This is not bureaucracy. It is what makes it safe to give the agent more room over time.' },
    { type: 'pullquote', text: 'Execution can be shared. Responsibility cannot.' },
    { type: 'h3', id: 'rituals', text: 'Rituals that include agents' },
    { type: 'p', text: 'Weekly reviews should include agent output the same way they include human output: what shipped, what failed, what we learned. Teams that hide agent work behind a black box never learn how to improve it.' },
    { type: 'h2', id: 'trust', text: 'Earning trust in steps' },
    { type: 'p', text: 'Trust is granted the way it is with people: in increments, based on track record. Start with drafts that a human approves. Move to actions with easy reversal. Only then allow autonomous execution, with sampling audits.[^1]' },
    { type: 'p', text: 'The organizations that do this well will not look radically different. They will simply have more capacity, and a clearer understanding of where human judgment adds the most value.' }],

    footnotes: ['Sampling audits review a random share of autonomous actions. They keep oversight affordable as volume grows.']
  },
  es: {
    slug: 'disenar-organizaciones-para-colegas-no-humanos',
    title: 'Diseñar organizaciones para colegas no humanos',
    subtitle: 'Incorporación, responsabilidad y confianza, reescritas para equipos que incluyen agentes.',
    excerpt: 'Cuando un agente se une a un equipo necesita lo mismo que cualquier colega: un rol claro, contexto, una responsable y una forma de ser corregido.',
    tldr: [
    'Los agentes deben incorporarse como colegas: rol, contexto, permisos y una persona responsable.',
    'La responsabilidad sigue siendo humana; la ejecución puede compartirse.',
    'Los rituales del equipo deben hacer visible, revisable y mejorable el trabajo de los agentes.'],

    tags: ['diseño organizativo', 'agentes', 'equipos'],
    body: [
    { type: 'h2', id: 'incorporacion', text: 'Incorporar a un agente' },
    { type: 'p', text: 'La mayoría de los despliegues de agentes fallan por la misma razón por la que sufren muchas incorporaciones: nadie explicó el trabajo. Un prompt no es una descripción de puesto. Un agente necesita saber qué es un buen resultado, qué herramientas puede usar y a quién preguntar cuando duda.' },
    { type: 'list', items: ['Un rol escrito, con alcance y límites.', 'Contexto curado: documentos, ejemplos, decisiones previas.', 'Permisos explícitos, empezando por pocos.', 'Una persona responsable que revisa su trabajo.'] },
    { type: 'h2', id: 'responsabilidad', text: 'La responsabilidad sigue siendo humana' },
    { type: 'p', text: 'Un agente puede ejecutar. No puede responder. Cada agente debe corresponder a una persona que rinde cuentas de sus resultados. No es burocracia: es lo que permite darle más margen con el tiempo.' },
    { type: 'pullquote', text: 'La ejecución puede compartirse. La responsabilidad, no.' },
    { type: 'h3', id: 'rituales', text: 'Rituales que incluyen agentes' },
    { type: 'p', text: 'Las revisiones semanales deben incluir el trabajo de los agentes igual que el humano: qué salió, qué falló, qué aprendimos. Los equipos que esconden ese trabajo en una caja negra nunca aprenden a mejorarlo.' },
    { type: 'h2', id: 'confianza', text: 'Ganar confianza por etapas' },
    { type: 'p', text: 'La confianza se concede como con las personas: por incrementos, según el historial. Empieza con borradores que una persona aprueba. Pasa a acciones fáciles de revertir. Solo entonces permite la ejecución autónoma, con auditorías por muestreo.[^1]' },
    { type: 'p', text: 'Las organizaciones que lo hagan bien no parecerán radicalmente distintas. Simplemente tendrán más capacidad y una idea más clara de dónde aporta más el juicio humano.' }],

    footnotes: ['Las auditorías por muestreo revisan una parte aleatoria de las acciones autónomas. Mantienen asumible la supervisión cuando crece el volumen.']
  }
},
{
  id: 'delegation-machines',
  type: 'essay',
  topic: 'philosophy-of-technology',
  status: 'publicado',
  publishedAt: '2026-08-12',
  updatedAt: '2026-08-20',
  readingTime: 6,
  coverImage: {
    seed: 24,
    alt: {
      en: 'A single hand-drawn orbit passing a small node from one larger body to another',
      es: 'Una única órbita dibujada a mano que traslada un pequeño nodo de un cuerpo mayor a otro'
    }
  },
  en: {
    slug: 'on-delegation-to-machines',
    title: 'On Delegation to Machines',
    subtitle: 'What we hand over to machines reveals what we believe judgment is for.',
    excerpt: 'Delegation is a moral act before it is a technical one. Choosing what to give machines forces us to say what we value.',
    tldr: [
    'Delegating to machines requires stating purposes precisely, which humans rarely do.',
    'What we refuse to delegate reveals what we consider essentially human.',
    'Good delegation keeps humans in charge of purpose, while machines handle process.'],

    tags: ['philosophy', 'delegation', 'ethics'],
    body: [
    { type: 'h2', id: 'purpose', text: 'The problem of purpose' },
    { type: 'p', text: 'When we delegate to a person, we rely on shared context to fill gaps in our instructions. Machines have no such context. Delegation to them forces a precision about purpose that most organizations have never needed.' },
    { type: 'quote', text: 'We had better be quite sure that the purpose put into the machine is the purpose which we really desire.', cite: 'Norbert Wiener, 1960' },
    { type: 'p', text: 'Wiener’s warning has aged into an operating manual. Objectives that are merely approximate become dangerous when executed tirelessly and at scale.' },
    { type: 'h2', id: 'what-we-keep', text: 'What we refuse to delegate' },
    { type: 'p', text: 'Every delegation decision draws a line. On one side, tasks we consider process. On the other, decisions we consider ours. Where we draw that line is a statement of values, whether we admit it or not.' },
    { type: 'list', items: ['Choosing goals and the trade-offs between them.', 'Deciding what counts as fair.', 'Taking responsibility when things go wrong.'] },
    { type: 'pullquote', text: 'Machines can own the process. Humans must own the purpose.' },
    { type: 'h3', id: 'erosion', text: 'The quiet erosion of skill' },
    { type: 'p', text: 'There is a cost to delegation that rarely appears in business cases: the skills we stop practicing. Pilots train manually so automation does not erode their judgment.[^1] Organizations need equivalents.' },
    { type: 'h2', id: 'principle', text: 'A working principle' },
    { type: 'p', text: 'Delegate the repeatable. Keep the meaningful. Review the boundary every quarter, because capabilities move and values should not drift with them unnoticed.' }],

    footnotes: ['Aviation research on "automation complacency" is a useful reference for any organization introducing autonomous systems.']
  },
  es: {
    slug: 'sobre-delegar-en-maquinas',
    title: 'Sobre delegar en máquinas',
    subtitle: 'Lo que entregamos a las máquinas revela para qué creemos que sirve el juicio.',
    excerpt: 'Delegar es un acto moral antes que técnico. Elegir qué damos a las máquinas nos obliga a decir qué valoramos.',
    tldr: [
    'Delegar en máquinas exige formular propósitos con precisión, algo que rara vez hacemos.',
    'Lo que nos negamos a delegar revela lo que consideramos esencialmente humano.',
    'Una buena delegación deja a las personas a cargo del propósito y a las máquinas del proceso.'],

    tags: ['filosofía', 'delegación', 'ética'],
    body: [
    { type: 'h2', id: 'proposito', text: 'El problema del propósito' },
    { type: 'p', text: 'Cuando delegamos en una persona, confiamos en un contexto compartido para rellenar los huecos de nuestras instrucciones. Las máquinas no tienen ese contexto. Delegar en ellas obliga a una precisión sobre el propósito que la mayoría de las organizaciones nunca ha necesitado.' },
    { type: 'quote', text: 'Más nos vale estar muy seguros de que el propósito que introducimos en la máquina es el propósito que realmente deseamos.', cite: 'Norbert Wiener, 1960' },
    { type: 'p', text: 'La advertencia de Wiener se ha convertido en un manual de operaciones. Los objetivos aproximados se vuelven peligrosos cuando se ejecutan sin descanso y a escala.' },
    { type: 'h2', id: 'lo-que-guardamos', text: 'Lo que nos negamos a delegar' },
    { type: 'p', text: 'Cada decisión de delegar traza una línea. A un lado, tareas que consideramos proceso. Al otro, decisiones que consideramos nuestras. Dónde trazamos esa línea es una declaración de valores, lo admitamos o no.' },
    { type: 'list', items: ['Elegir objetivos y los equilibrios entre ellos.', 'Decidir qué se considera justo.', 'Asumir la responsabilidad cuando algo sale mal.'] },
    { type: 'pullquote', text: 'Las máquinas pueden encargarse del proceso. Las personas deben encargarse del propósito.' },
    { type: 'h3', id: 'erosion', text: 'La erosión silenciosa de la habilidad' },
    { type: 'p', text: 'Delegar tiene un coste que rara vez aparece en los planes de negocio: las habilidades que dejamos de practicar. Los pilotos entrenan en manual para que la automatización no erosione su criterio.[^1] Las organizaciones necesitan equivalentes.' },
    { type: 'h2', id: 'principio', text: 'Un principio de trabajo' },
    { type: 'p', text: 'Delega lo repetible. Conserva lo significativo. Revisa la frontera cada trimestre, porque las capacidades avanzan y los valores no deberían desplazarse con ellas sin que nadie lo note.' }],

    footnotes: ['La investigación aeronáutica sobre la «complacencia ante la automatización» es una referencia útil para cualquier organización que introduzca sistemas autónomos.']
  }
}];