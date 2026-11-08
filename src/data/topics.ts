import type { Topic } from '../types/content';

export const topics: Topic[] = [
{
  id: 'agentic-systems',
  code: 'HUB-01',
  slug: { en: 'agentic-systems', es: 'sistemas-agenticos' },
  en: {
    title: 'Agentic Systems',
    definition: 'Agentic systems are software that pursues goals on a person’s behalf by planning steps, using tools and acting within defined permissions.',
    summary: 'Software that acts, not just responds.',
    metaDescription: 'What agentic systems are, how they differ from apps and chatbots, and how to design agents that can be trusted with real work.',
    sections: [
    { id: 'what', heading: 'What makes a system agentic', paragraphs: [
      'A chatbot answers. An agent acts. The difference is not the model behind it but the loop around it: an agent receives a goal, breaks it into steps, chooses tools, observes results and adjusts. It keeps going until the goal is met or a limit is reached.',
      'That loop changes what software is for. Instead of offering features for people to operate, it offers outcomes for people to delegate. The product surface shifts from buttons to contracts.']
    },
    { id: 'components', heading: 'The anatomy of an agent', paragraphs: [
      'Every reliable agent has the same parts: a clear goal, curated context, a set of tools, explicit permissions, memory of what it has done and a way to escalate. Missing any one of them is the most common source of failure.',
      'Of these, permissions and escalation matter most. They define the boundary between autonomy and risk, and they are what allow trust to grow over time.']
    },
    { id: 'design', heading: 'Designing agents people trust', paragraphs: [
      'Trust is earned in steps. Start with agents that draft and humans that approve. Move to reversible actions. Allow autonomy only where outcomes are measurable and mistakes are cheap to correct.',
      'Good agent design looks less like interface design and more like management: writing roles, setting expectations, reviewing work and improving instructions based on what went wrong.']
    }],

    concepts: [
    { term: 'Agent loop', definition: 'The cycle of planning, acting, observing and adjusting that an agent repeats until a goal is met.' },
    { term: 'Tool use', definition: 'An agent’s ability to call external functions, APIs or systems to act in the world.' },
    { term: 'Permission scope', definition: 'The explicit set of actions an agent may take without human approval.' },
    { term: 'Escalation', definition: 'Handing a decision back to a human, with context, when it falls outside scope or confidence.' }],

    faq: [
    { question: 'What is the difference between an agent and a chatbot?', answer: 'A chatbot generates responses. An agent pursues a goal by planning steps and taking actions with tools, within permissions you define.' },
    { question: 'Are agentic systems safe to use in business?', answer: 'They are safe when scoped: narrow permissions, reversible actions, clear escalation and a named human owner for every agent.' },
    { question: 'Do agents replace employees?', answer: 'They replace tasks, not accountability. Teams that use agents well gain capacity and focus human judgment where it matters most.' },
    { question: 'Where should a company start with agents?', answer: 'With a repetitive, well-documented process where results are easy to check, such as research summaries or first-line enquiries.' }]

  },
  es: {
    title: 'Sistemas agénticos',
    definition: 'Los sistemas agénticos son software que persigue objetivos en nombre de una persona planificando pasos, usando herramientas y actuando dentro de permisos definidos.',
    summary: 'Software que actúa, no solo responde.',
    metaDescription: 'Qué son los sistemas agénticos, en qué se diferencian de apps y chatbots y cómo diseñar agentes en los que se pueda confiar.',
    sections: [
    { id: 'que', heading: 'Qué hace agéntico a un sistema', paragraphs: [
      'Un chatbot responde. Un agente actúa. La diferencia no está en el modelo, sino en el ciclo que lo rodea: un agente recibe un objetivo, lo divide en pasos, elige herramientas, observa resultados y se ajusta. Continúa hasta cumplir el objetivo o alcanzar un límite.',
      'Ese ciclo cambia para qué sirve el software. En lugar de ofrecer funciones que las personas operan, ofrece resultados que las personas delegan. La superficie del producto pasa de botones a contratos.']
    },
    { id: 'componentes', heading: 'La anatomía de un agente', paragraphs: [
      'Todo agente fiable tiene las mismas piezas: un objetivo claro, contexto curado, un conjunto de herramientas, permisos explícitos, memoria de lo que ha hecho y una forma de escalar. La ausencia de cualquiera de ellas es la causa de fallo más común.',
      'De todas, los permisos y el escalado son las más importantes. Definen la frontera entre autonomía y riesgo, y permiten que la confianza crezca con el tiempo.']
    },
    { id: 'diseno', heading: 'Diseñar agentes de confianza', paragraphs: [
      'La confianza se gana por etapas. Empieza con agentes que redactan y personas que aprueban. Pasa a acciones reversibles. Permite autonomía solo donde los resultados se pueden medir y los errores son baratos de corregir.',
      'Un buen diseño de agentes se parece menos al diseño de interfaces y más a la gestión: escribir roles, fijar expectativas, revisar trabajo y mejorar instrucciones a partir de lo que falló.']
    }],

    concepts: [
    { term: 'Ciclo del agente', definition: 'La secuencia de planificar, actuar, observar y ajustar que un agente repite hasta cumplir un objetivo.' },
    { term: 'Uso de herramientas', definition: 'La capacidad de un agente para llamar a funciones, APIs o sistemas externos y actuar en el mundo.' },
    { term: 'Alcance de permisos', definition: 'El conjunto explícito de acciones que un agente puede realizar sin aprobación humana.' },
    { term: 'Escalado', definition: 'Devolver una decisión a una persona, con contexto, cuando queda fuera de alcance o de confianza.' }],

    faq: [
    { question: '¿Qué diferencia hay entre un agente y un chatbot?', answer: 'Un chatbot genera respuestas. Un agente persigue un objetivo planificando pasos y actuando con herramientas, dentro de los permisos que definas.' },
    { question: '¿Es seguro usar sistemas agénticos en una empresa?', answer: 'Lo es cuando están acotados: permisos estrechos, acciones reversibles, escalado claro y una persona responsable de cada agente.' },
    { question: '¿Los agentes sustituyen a las personas?', answer: 'Sustituyen tareas, no responsabilidad. Los equipos que los usan bien ganan capacidad y concentran el juicio humano donde más importa.' },
    { question: '¿Por dónde debería empezar una empresa?', answer: 'Por un proceso repetitivo y bien documentado cuyos resultados sean fáciles de comprobar, como resúmenes de investigación o consultas de primer nivel.' }]

  }
},
{
  id: 'ai-native-architecture',
  code: 'HUB-02',
  slug: { en: 'ai-native-business-architecture', es: 'arquitectura-empresarial-ia-nativa' },
  en: {
    title: 'AI-Native Business Architecture',
    definition: 'AI-native business architecture is the design of an organization’s structure, processes and governance on the assumption that autonomous capabilities do a meaningful share of the work.',
    summary: 'Organizations designed around autonomous capabilities from the start.',
    metaDescription: 'How to design AI-native organizations: capabilities, operating models, governance and the shift from headcount to capacity planning.',
    sections: [
    { id: 'adopted-vs-native', heading: 'AI-adopted versus AI-native', paragraphs: [
      'An AI-adopted company adds tools to existing processes. An AI-native company redesigns the processes themselves, asking which work should be done by people, which by agents and how the two should hand off.',
      'The difference shows up in structure. AI-native organizations have fewer handoffs, clearer ownership and explicit policies that both humans and machines can read.']
    },
    { id: 'capabilities', heading: 'Thinking in capabilities', paragraphs: [
      'Instead of mapping departments, AI-native architecture maps capabilities: the things the business must be able to do, such as qualifying demand, pricing risk or resolving complaints. Each capability can then be staffed by people, agents or both.',
      'This view makes investment decisions clearer. You fund capabilities and measure their performance, rather than adding headcount or licenses by habit.']
    },
    { id: 'governance', heading: 'Governance as architecture', paragraphs: [
      'When agents act, governance must be built in rather than added later. Permissions, audit trails and escalation paths belong in the design from the first day.',
      'Boards and leadership teams need a new kind of report: not only what people did, but what autonomous systems did, why and with what result.']
    }],

    concepts: [
    { term: 'Capability map', definition: 'A model of what a business must be able to do, independent of who or what does it.' },
    { term: 'Operating model', definition: 'How work, decisions and resources flow through an organization.' },
    { term: 'Capacity planning', definition: 'Allocating work across people and machines based on demand and capability.' },
    { term: 'Machine-readable policy', definition: 'Business rules written so that both humans and agents can apply them consistently.' }],

    faq: [
    { question: 'What does AI-native mean for a company?', answer: 'It means designing structure, processes and governance on the assumption that autonomous systems do a meaningful share of the work.' },
    { question: 'Can an existing company become AI-native?', answer: 'Yes, capability by capability. Start where work is repetitive and measurable, redesign it fully, then expand.' },
    { question: 'How is AI-native architecture governed?', answer: 'Through explicit permissions, audit trails, escalation paths and named human owners for every autonomous capability.' },
    { question: 'Does AI-native mean fewer people?', answer: 'Not necessarily. It usually means different work: more judgment, design and oversight, less routine execution.' }]

  },
  es: {
    title: 'Arquitectura empresarial IA-nativa',
    definition: 'La arquitectura empresarial IA-nativa es el diseño de la estructura, los procesos y la gobernanza de una organización partiendo de que las capacidades autónomas realizan una parte significativa del trabajo.',
    summary: 'Organizaciones diseñadas desde el inicio en torno a capacidades autónomas.',
    metaDescription: 'Cómo diseñar organizaciones IA-nativas: capacidades, modelos operativos, gobernanza y el paso de planificar plantilla a planificar capacidad.',
    sections: [
    { id: 'adoptada-vs-nativa', heading: 'IA adoptada frente a IA nativa', paragraphs: [
      'Una empresa que adopta IA añade herramientas a los procesos existentes. Una empresa IA-nativa rediseña los procesos, preguntándose qué trabajo deben hacer las personas, cuál los agentes y cómo deben pasarse el relevo.',
      'La diferencia se nota en la estructura. Las organizaciones IA-nativas tienen menos traspasos, una propiedad más clara y políticas explícitas que pueden leer tanto personas como máquinas.']
    },
    { id: 'capacidades', heading: 'Pensar en capacidades', paragraphs: [
      'En lugar de mapear departamentos, la arquitectura IA-nativa mapea capacidades: lo que el negocio debe saber hacer, como cualificar la demanda, valorar riesgos o resolver quejas. Cada capacidad puede cubrirse con personas, agentes o ambos.',
      'Esta visión aclara las decisiones de inversión. Se financian capacidades y se mide su rendimiento, en lugar de sumar plantilla o licencias por costumbre.']
    },
    { id: 'gobernanza', heading: 'La gobernanza como arquitectura', paragraphs: [
      'Cuando los agentes actúan, la gobernanza debe estar integrada y no añadirse después. Permisos, registros de auditoría y rutas de escalado forman parte del diseño desde el primer día.',
      'Consejos y comités de dirección necesitan un nuevo tipo de informe: no solo qué hicieron las personas, sino qué hicieron los sistemas autónomos, por qué y con qué resultado.']
    }],

    concepts: [
    { term: 'Mapa de capacidades', definition: 'Un modelo de lo que un negocio debe saber hacer, con independencia de quién o qué lo haga.' },
    { term: 'Modelo operativo', definition: 'Cómo fluyen el trabajo, las decisiones y los recursos en una organización.' },
    { term: 'Planificación de capacidad', definition: 'Repartir el trabajo entre personas y máquinas según la demanda y las capacidades.' },
    { term: 'Política legible por máquina', definition: 'Reglas de negocio escritas para que personas y agentes las apliquen de forma coherente.' }],

    faq: [
    { question: '¿Qué significa que una empresa sea IA-nativa?', answer: 'Significa diseñar su estructura, procesos y gobernanza partiendo de que los sistemas autónomos hacen una parte significativa del trabajo.' },
    { question: '¿Puede una empresa existente volverse IA-nativa?', answer: 'Sí, capacidad a capacidad. Empieza donde el trabajo es repetitivo y medible, rediséñalo por completo y luego amplía.' },
    { question: '¿Cómo se gobierna una arquitectura IA-nativa?', answer: 'Con permisos explícitos, registros de auditoría, rutas de escalado y una persona responsable de cada capacidad autónoma.' },
    { question: '¿IA-nativa significa menos personas?', answer: 'No necesariamente. Suele significar trabajo distinto: más criterio, diseño y supervisión, menos ejecución rutinaria.' }]

  }
},
{
  id: 'philosophy-of-technology',
  code: 'HUB-03',
  slug: { en: 'philosophy-of-technology', es: 'filosofia-de-la-tecnologia' },
  en: {
    title: 'Philosophy of Technology',
    definition: 'The philosophy of technology examines how tools shape human purpose, judgment and responsibility, and how we ought to decide what to build and delegate.',
    summary: 'Thinking clearly about what we build and why.',
    metaDescription: 'Philosophy of technology for builders: delegation, responsibility, foresight and the values embedded in AI systems.',
    sections: [
    { id: 'why', heading: 'Why builders need philosophy', paragraphs: [
      'Every system encodes a view of what matters. A recommendation engine decides what deserves attention. An agent decides which tasks are mere process. These are philosophical choices made by engineers and product teams, often without noticing.',
      'Philosophy does not slow building down. It makes the choices visible, which is the first step toward making them well.']
    },
    { id: 'delegation', heading: 'Delegation and responsibility', paragraphs: [
      'As machines take on more work, the question of who is responsible becomes harder and more important. Responsibility cannot be delegated to a system that cannot answer for its actions.',
      'The practical consequence is simple: every autonomous system needs a human who owns its purpose and its outcomes.']
    },
    { id: 'time', heading: 'Long horizons', paragraphs: [
      'Technology decisions compound over decades. Foresight, the disciplined exploration of possible futures, is how organizations take responsibility for consequences they cannot yet see.',
      'Thinking in long horizons is not pessimism or optimism. It is respect for the people who will live with what we build.']
    }],

    concepts: [
    { term: 'Value alignment', definition: 'Ensuring that a system’s objectives reflect the purposes its makers actually intend.' },
    { term: 'Moral responsibility', definition: 'The capacity to answer for actions and outcomes, which remains with humans.' },
    { term: 'Strategic foresight', definition: 'A discipline for exploring plausible futures and preparing for them.' },
    { term: 'Automation complacency', definition: 'The erosion of human skill and attention when automation handles routine work.' }],

    faq: [
    { question: 'Why does philosophy matter for AI strategy?', answer: 'Because every AI system encodes choices about purpose and responsibility. Making those choices explicit leads to better systems.' },
    { question: 'Who is responsible when an AI system makes a mistake?', answer: 'The people and organizations who deployed it and defined its purpose. Responsibility cannot be delegated to the machine.' },
    { question: 'What is strategic foresight?', answer: 'A structured practice of scanning signals, building scenarios and preparing for multiple plausible futures.' },
    { question: 'How can teams apply this in practice?', answer: 'Write down what each system is for, who owns it and what it must never do. Review those answers regularly.' }]

  },
  es: {
    title: 'Filosofía de la tecnología',
    definition: 'La filosofía de la tecnología estudia cómo las herramientas moldean el propósito, el juicio y la responsabilidad humanos, y cómo deberíamos decidir qué construir y qué delegar.',
    summary: 'Pensar con claridad sobre qué construimos y por qué.',
    metaDescription: 'Filosofía de la tecnología para quien construye: delegación, responsabilidad, prospectiva y los valores integrados en los sistemas de IA.',
    sections: [
    { id: 'por-que', heading: 'Por qué quien construye necesita filosofía', paragraphs: [
      'Todo sistema codifica una visión de lo que importa. Un motor de recomendaciones decide qué merece atención. Un agente decide qué tareas son mero proceso. Son decisiones filosóficas tomadas por equipos de ingeniería y producto, a menudo sin advertirlo.',
      'La filosofía no frena la construcción. Hace visibles las decisiones, que es el primer paso para tomarlas bien.']
    },
    { id: 'delegacion', heading: 'Delegación y responsabilidad', paragraphs: [
      'A medida que las máquinas asumen más trabajo, la pregunta de quién es responsable se vuelve más difícil y más importante. La responsabilidad no puede delegarse en un sistema que no puede responder de sus actos.',
      'La consecuencia práctica es sencilla: todo sistema autónomo necesita una persona dueña de su propósito y de sus resultados.']
    },
    { id: 'tiempo', heading: 'Horizontes largos', paragraphs: [
      'Las decisiones tecnológicas se acumulan durante décadas. La prospectiva, la exploración disciplinada de futuros posibles, es la forma en que las organizaciones asumen consecuencias que aún no pueden ver.',
      'Pensar a largo plazo no es pesimismo ni optimismo. Es respeto por las personas que vivirán con lo que construimos.']
    }],

    concepts: [
    { term: 'Alineación de valores', definition: 'Asegurar que los objetivos de un sistema reflejan los propósitos que realmente pretenden sus creadores.' },
    { term: 'Responsabilidad moral', definition: 'La capacidad de responder por acciones y resultados, que sigue siendo humana.' },
    { term: 'Prospectiva estratégica', definition: 'Una disciplina para explorar futuros plausibles y prepararse para ellos.' },
    { term: 'Complacencia ante la automatización', definition: 'La erosión de la habilidad y la atención humanas cuando la automatización asume el trabajo rutinario.' }],

    faq: [
    { question: '¿Por qué importa la filosofía en la estrategia de IA?', answer: 'Porque todo sistema de IA codifica decisiones sobre propósito y responsabilidad. Hacerlas explícitas produce mejores sistemas.' },
    { question: '¿Quién es responsable cuando un sistema de IA se equivoca?', answer: 'Las personas y organizaciones que lo desplegaron y definieron su propósito. La responsabilidad no se delega en la máquina.' },
    { question: '¿Qué es la prospectiva estratégica?', answer: 'Una práctica estructurada de escanear señales, construir escenarios y prepararse para varios futuros plausibles.' },
    { question: '¿Cómo pueden aplicarlo los equipos?', answer: 'Escribiendo para qué sirve cada sistema, quién es su responsable y qué no debe hacer nunca. Y revisando esas respuestas con regularidad.' }]

  }
},
{
  id: 'future-of-work',
  code: 'HUB-04',
  slug: { en: 'future-of-work-and-organizations', es: 'futuro-del-trabajo-y-las-organizaciones' },
  en: {
    title: 'The Future of Work & Organizations',
    definition: 'The future of work and organizations studies how roles, teams and management change when people collaborate with autonomous systems as part of everyday work.',
    summary: 'How teams change when some colleagues are not human.',
    metaDescription: 'How roles, teams and management evolve when people work alongside AI agents. Practical patterns for leaders and organization designers.',
    sections: [
    { id: 'roles', heading: 'From jobs to roles to tasks', paragraphs: [
      'Jobs are bundles of tasks. AI unbundles them. Some tasks move to agents, some become more important and new ones appear, mostly around judgment, review and coordination.',
      'Organizations that plan at the level of tasks, not job titles, see these shifts early and can redesign roles before they become frustrating.']
    },
    { id: 'teams', heading: 'Hybrid teams', paragraphs: [
      'A hybrid team includes people and agents with clear roles. The agents handle volume and consistency; the people handle exceptions, relationships and decisions that require context.',
      'Rituals adapt accordingly. Reviews include agent output, onboarding includes agent roles and every agent has a human owner.']
    },
    { id: 'management', heading: 'Management, rewritten', paragraphs: [
      'Managing agents looks surprisingly like managing people: setting goals, giving context, reviewing work and adjusting instructions. The skill of writing clear expectations becomes central.',
      'Leaders spend less time coordinating execution and more time designing systems, defining purpose and developing the judgment of their teams.']
    }],

    concepts: [
    { term: 'Task unbundling', definition: 'Separating a job into tasks to decide which should be automated, augmented or kept human.' },
    { term: 'Hybrid team', definition: 'A team in which people and AI agents share work under clear roles and ownership.' },
    { term: 'Agent owner', definition: 'The person accountable for an agent’s purpose, permissions and outcomes.' },
    { term: 'Review ritual', definition: 'A recurring team practice for inspecting and improving agent work.' }],

    faq: [
    { question: 'How will AI change work in the next decade?', answer: 'It will unbundle jobs into tasks, automate many routine ones and raise the value of judgment, review and coordination.' },
    { question: 'What is a hybrid team?', answer: 'A team where people and AI agents share work, each with defined roles, and every agent has a human owner.' },
    { question: 'What skills matter most in AI-native organizations?', answer: 'Writing clear expectations, reviewing work critically, systems thinking and the ability to decide under uncertainty.' },
    { question: 'How should managers prepare?', answer: 'By practicing delegation to agents on small tasks and learning to define roles, context and quality standards precisely.' }]

  },
  es: {
    title: 'El futuro del trabajo y las organizaciones',
    definition: 'El futuro del trabajo y las organizaciones estudia cómo cambian los roles, los equipos y la dirección cuando las personas colaboran con sistemas autónomos en su trabajo diario.',
    summary: 'Cómo cambian los equipos cuando algunos colegas no son humanos.',
    metaDescription: 'Cómo evolucionan roles, equipos y dirección cuando las personas trabajan con agentes de IA. Patrones prácticos para líderes y diseñadores organizativos.',
    sections: [
    { id: 'roles', heading: 'De puestos a roles y a tareas', paragraphs: [
      'Los puestos son paquetes de tareas. La IA los desagrega. Algunas tareas pasan a los agentes, otras ganan importancia y aparecen nuevas, sobre todo de criterio, revisión y coordinación.',
      'Las organizaciones que planifican a nivel de tareas, no de títulos, detectan estos cambios antes y pueden rediseñar los roles antes de que generen frustración.']
    },
    { id: 'equipos', heading: 'Equipos híbridos', paragraphs: [
      'Un equipo híbrido incluye personas y agentes con roles claros. Los agentes asumen volumen y consistencia; las personas, excepciones, relaciones y decisiones que requieren contexto.',
      'Los rituales se adaptan. Las revisiones incluyen el trabajo de los agentes, la incorporación incluye sus roles y cada agente tiene una persona responsable.']
    },
    { id: 'direccion', heading: 'La dirección, reescrita', paragraphs: [
      'Dirigir agentes se parece sorprendentemente a dirigir personas: fijar objetivos, dar contexto, revisar trabajo y ajustar instrucciones. Saber escribir expectativas claras se vuelve central.',
      'Quien lidera dedica menos tiempo a coordinar la ejecución y más a diseñar sistemas, definir el propósito y desarrollar el criterio de su equipo.']
    }],

    concepts: [
    { term: 'Desagregación de tareas', definition: 'Separar un puesto en tareas para decidir cuáles automatizar, aumentar o mantener humanas.' },
    { term: 'Equipo híbrido', definition: 'Un equipo en el que personas y agentes de IA comparten trabajo con roles y responsables claros.' },
    { term: 'Responsable del agente', definition: 'La persona que rinde cuentas del propósito, los permisos y los resultados de un agente.' },
    { term: 'Ritual de revisión', definition: 'Una práctica recurrente del equipo para inspeccionar y mejorar el trabajo de los agentes.' }],

    faq: [
    { question: '¿Cómo cambiará la IA el trabajo en la próxima década?', answer: 'Desagregará los puestos en tareas, automatizará muchas rutinarias y aumentará el valor del criterio, la revisión y la coordinación.' },
    { question: '¿Qué es un equipo híbrido?', answer: 'Un equipo donde personas y agentes de IA comparten trabajo, cada uno con un rol definido, y cada agente tiene una persona responsable.' },
    { question: '¿Qué habilidades importan más en organizaciones IA-nativas?', answer: 'Escribir expectativas claras, revisar con espíritu crítico, pensar en sistemas y decidir con incertidumbre.' },
    { question: '¿Cómo deberían prepararse los mánagers?', answer: 'Practicando la delegación en agentes con tareas pequeñas y aprendiendo a definir con precisión roles, contexto y estándares de calidad.' }]

  }
}];