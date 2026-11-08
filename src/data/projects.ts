import type { Post } from '../types/content';

export const projects: Post[] = [
{
  id: 'epica-works',
  type: 'project',
  topic: 'ai-native-architecture',
  status: 'publicado',
  publishedAt: '2026-10-08',
  updatedAt: '2026-10-30',
  readingTime: 5,
  coverImage: {
    seed: 31,
    alt: {
      en: 'A small planet with three orbiting nodes, each linked to a storefront-like outline',
      es: 'Un pequeño planeta con tres nodos en órbita, cada uno unido a un contorno similar a un escaparate'
    }
  },
  project: {
    code: 'EW-01',
    status: 'inOrbit',
    brief: {
      en: {
        objective: 'Give small businesses a website that answers, qualifies and books on its own.',
        role: 'Founder · product and systems architecture',
        stack: 'React, TypeScript, LLM orchestration, headless CMS, Netlify',
        outcome: 'Agentic sites live for early SMB clients; first replies in seconds instead of days.'
      },
      es: {
        objective: 'Dar a las pequeñas empresas una web que responda, cualifique y reserve por sí sola.',
        role: 'Fundador · producto y arquitectura de sistemas',
        stack: 'React, TypeScript, orquestación de LLM, CMS headless, Netlify',
        outcome: 'Webs agénticas activas para los primeros clientes pyme; primeras respuestas en segundos en lugar de días.'
      }
    }
  },
  en: {
    slug: 'epica-works',
    title: 'Epica Works — Agentic Websites for SMBs',
    subtitle: 'A website that works the front desk, not just the shop window.',
    excerpt: 'Small businesses lose leads after hours. Epica Works turns their website into an agent that answers, qualifies and books.',
    tldr: [
    'Most SMB websites are brochures; enquiries wait until someone has time.',
    'Epica Works adds an agent layer that answers, qualifies and schedules within clear permissions.',
    'The design principle: the owner stays in control of tone, pricing and commitments.'],

    tags: ['SMB', 'agents', 'web'],
    body: [
    { type: 'h2', id: 'problem', text: 'The problem' },
    { type: 'p', text: 'A plumber, a clinic or a small studio gets most enquiries when nobody is at the desk. By the time someone replies, the lead has called a competitor. The website looked good. It just did not work.' },
    { type: 'h2', id: 'approach', text: 'The approach' },
    { type: 'p', text: 'Each site ships with an agent bound by a short, owner-approved policy. It knows the services, the prices it may quote and the calendar it may book into. Anything outside the policy is escalated with a summary.' },
    { type: 'code', lang: 'json', code: '{\n  "may_quote": ["standard-visit", "inspection"],\n  "may_book": true,\n  "max_discount": 0,\n  "escalate": ["complaints", "custom-work"]\n}' },
    { type: 'h3', id: 'tone', text: 'Owner-controlled tone' },
    { type: 'p', text: 'Owners write five example replies. The agent learns their voice from those examples, not from a generic persona.' },
    { type: 'h2', id: 'learned', text: 'What we learned' },
    { type: 'list', items: ['Narrow permissions earn trust faster than impressive demos.', 'A daily digest matters more to owners than a dashboard.', 'Escalation summaries are the feature clients mention most.'] }]

  },
  es: {
    slug: 'epica-works',
    title: 'Epica Works — Webs agénticas para pymes',
    subtitle: 'Una web que atiende el mostrador, no solo el escaparate.',
    excerpt: 'Las pequeñas empresas pierden contactos fuera de horario. Epica Works convierte su web en un agente que responde, cualifica y reserva.',
    tldr: [
    'La mayoría de las webs de pymes son folletos; las consultas esperan a que alguien tenga tiempo.',
    'Epica Works añade una capa de agente que responde, cualifica y agenda dentro de permisos claros.',
    'Principio de diseño: el propietario controla el tono, los precios y los compromisos.'],

    tags: ['pymes', 'agentes', 'web'],
    body: [
    { type: 'h2', id: 'problema', text: 'El problema' },
    { type: 'p', text: 'Un fontanero, una clínica o un pequeño estudio recibe la mayoría de las consultas cuando no hay nadie en el mostrador. Cuando alguien responde, el cliente ya ha llamado a la competencia. La web era bonita. Simplemente no trabajaba.' },
    { type: 'h2', id: 'enfoque', text: 'El enfoque' },
    { type: 'p', text: 'Cada web incluye un agente sujeto a una política breve aprobada por el propietario. Conoce los servicios, los precios que puede indicar y la agenda en la que puede reservar. Todo lo que queda fuera se escala con un resumen.' },
    { type: 'code', lang: 'json', code: '{\n  "puede_presupuestar": ["visita-estandar", "inspeccion"],\n  "puede_reservar": true,\n  "descuento_maximo": 0,\n  "escalar": ["quejas", "trabajo-a-medida"]\n}' },
    { type: 'h3', id: 'tono', text: 'Tono controlado por el propietario' },
    { type: 'p', text: 'El propietario escribe cinco respuestas de ejemplo. El agente aprende su voz de esos ejemplos, no de una personalidad genérica.' },
    { type: 'h2', id: 'aprendizajes', text: 'Qué aprendimos' },
    { type: 'list', items: ['Los permisos acotados generan confianza antes que las demos espectaculares.', 'Un resumen diario importa más al propietario que un panel.', 'Los resúmenes de escalado son la función que más mencionan los clientes.'] }]

  }
},
{
  id: 'jarvis-home',
  type: 'project',
  topic: 'agentic-systems',
  status: 'publicado',
  publishedAt: '2026-07-15',
  updatedAt: '2026-10-12',
  readingTime: 5,
  coverImage: {
    seed: 42,
    alt: {
      en: 'Concentric sound-wave arcs radiating from a single node inside a simple house outline',
      es: 'Arcos concéntricos de ondas sonoras que irradian desde un nodo dentro del contorno sencillo de una casa'
    }
  },
  project: {
    code: 'JH-02',
    status: 'inDevelopment',
    brief: {
      en: {
        objective: 'A private voice layer that coordinates the devices and routines of a home.',
        role: 'Builder · hardware, speech pipeline, agent design',
        stack: 'Raspberry Pi, on-device speech recognition, Home Assistant, Python',
        outcome: 'Prototype running locally; routines handled without cloud round-trips.'
      },
      es: {
        objective: 'Una capa de voz privada que coordina los dispositivos y rutinas del hogar.',
        role: 'Constructor · hardware, cadena de voz, diseño de agentes',
        stack: 'Raspberry Pi, reconocimiento de voz local, Home Assistant, Python',
        outcome: 'Prototipo funcionando en local; rutinas resueltas sin pasar por la nube.'
      }
    }
  },
  en: {
    slug: 'jarvis-home',
    title: 'Jarvis Home — A Voice Layer for the Home',
    subtitle: 'An experiment in ambient agents that stay local and stay quiet.',
    excerpt: 'Jarvis Home explores what a household agent looks like when privacy and restraint are design constraints, not afterthoughts.',
    tldr: [
    'Home assistants are reactive and cloud-dependent; Jarvis Home is local-first and routine-aware.',
    'The agent coordinates devices through intents rather than individual commands.',
    'Restraint is the core feature: it speaks only when it adds value.'],

    tags: ['voice', 'home', 'privacy'],
    body: [
    { type: 'h2', id: 'premise', text: 'The premise' },
    { type: 'p', text: 'Most voice assistants wait for a command and send it to the cloud. Jarvis Home inverts that: it runs locally and understands routines, so "I’m heading out" can mean lights, heating and locks at once.' },
    { type: 'h2', id: 'architecture', text: 'Architecture' },
    { type: 'p', text: 'Speech is transcribed on the device. A small planner maps intents to routines, and a policy file defines what may happen without confirmation.' },
    { type: 'code', lang: 'python', code: 'ROUTINES = {\n    "leaving": ["lights.off", "heating.eco", "locks.engage"],\n    "arriving": ["lights.entry", "heating.comfort"],\n}\nCONFIRM = {"locks.disengage"}' },
    { type: 'h3', id: 'restraint', text: 'Designing restraint' },
    { type: 'p', text: 'The hardest part was deciding when not to speak. The current rule: speak only to confirm something irreversible or to report a failure.' },
    { type: 'h2', id: 'next', text: 'Next' },
    { type: 'list', items: ['Multi-voice recognition for shared homes.', 'Energy-aware scheduling.', 'A weekly summary instead of constant notifications.'] }]

  },
  es: {
    slug: 'jarvis-home',
    title: 'Jarvis Home — Una capa de voz para el hogar',
    subtitle: 'Un experimento de agentes ambientales que se quedan en local y en silencio.',
    excerpt: 'Jarvis Home explora cómo es un agente doméstico cuando la privacidad y la contención son restricciones de diseño, no añadidos.',
    tldr: [
    'Los asistentes domésticos son reactivos y dependen de la nube; Jarvis Home es local y entiende rutinas.',
    'El agente coordina dispositivos mediante intenciones, no órdenes sueltas.',
    'La contención es la función central: solo habla cuando aporta valor.'],

    tags: ['voz', 'hogar', 'privacidad'],
    body: [
    { type: 'h2', id: 'premisa', text: 'La premisa' },
    { type: 'p', text: 'La mayoría de los asistentes de voz esperan una orden y la envían a la nube. Jarvis Home lo invierte: funciona en local y entiende rutinas, de modo que «me voy» puede significar luces, calefacción y cerraduras a la vez.' },
    { type: 'h2', id: 'arquitectura', text: 'Arquitectura' },
    { type: 'p', text: 'La voz se transcribe en el dispositivo. Un pequeño planificador traduce intenciones en rutinas y un archivo de políticas define qué puede ocurrir sin confirmación.' },
    { type: 'code', lang: 'python', code: 'RUTINAS = {\n    "salir": ["luces.off", "calefaccion.eco", "cerraduras.activar"],\n    "llegar": ["luces.entrada", "calefaccion.confort"],\n}\nCONFIRMAR = {"cerraduras.desactivar"}' },
    { type: 'h3', id: 'contencion', text: 'Diseñar la contención' },
    { type: 'p', text: 'Lo más difícil fue decidir cuándo no hablar. La regla actual: hablar solo para confirmar algo irreversible o para informar de un fallo.' },
    { type: 'h2', id: 'siguiente', text: 'Próximos pasos' },
    { type: 'list', items: ['Reconocimiento de varias voces en hogares compartidos.', 'Planificación según el consumo energético.', 'Un resumen semanal en lugar de notificaciones constantes.'] }]

  }
},
{
  id: 'hal149-lab',
  type: 'project',
  topic: 'agentic-systems',
  status: 'publicado',
  publishedAt: '2026-06-10',
  updatedAt: '2026-08-01',
  readingTime: 6,
  coverImage: {
    seed: 56,
    alt: {
      en: 'A laboratory-style grid with several small trajectories, some completed and some fading out',
      es: 'Una retícula de laboratorio con varias trayectorias pequeñas, algunas completas y otras desvaneciéndose'
    }
  },
  project: {
    code: 'HL-03',
    status: 'archived',
    brief: {
      en: {
        objective: 'Test how far autonomous agents can run a marketing function end to end.',
        role: 'Researcher · experiment design and evaluation',
        stack: 'Agent frameworks, analytics APIs, content pipelines, evaluation rubrics',
        outcome: 'Autonomy worked for research and drafting, not for brand judgment. Findings folded into Epica Works.'
      },
      es: {
        objective: 'Probar hasta dónde pueden llevar los agentes autónomos una función de marketing de principio a fin.',
        role: 'Investigador · diseño de experimentos y evaluación',
        stack: 'Frameworks de agentes, APIs de analítica, cadenas de contenido, rúbricas de evaluación',
        outcome: 'La autonomía funcionó en investigación y borradores, no en criterio de marca. Aprendizajes integrados en Epica Works.'
      }
    }
  },
  en: {
    slug: 'hal149-lab-autonomous-marketing',
    title: 'HAL149 Lab — Experiments in Autonomous Marketing',
    subtitle: 'Six months of letting agents run campaigns, and what they could not do.',
    excerpt: 'A structured experiment: give agents a budget, a brand and a goal. Measure where autonomy helps and where it quietly fails.',
    tldr: [
    'Agents excelled at research, segmentation and first drafts.',
    'They failed at brand judgment and at knowing when not to publish.',
    'The right model is autonomy for volume, humans for taste.'],

    tags: ['marketing', 'experiments', 'autonomy'],
    body: [
    { type: 'h2', id: 'setup', text: 'The setup' },
    { type: 'p', text: 'Three small brands, one agent team each, a fixed weekly budget and a single goal per brand. Humans reviewed outcomes but did not intervene unless a safety rule was triggered.' },
    { type: 'h2', id: 'worked', text: 'What worked' },
    { type: 'list', items: ['Market research summaries were faster and broader than manual work.', 'Audience segmentation improved after two weeks of feedback.', 'Draft volume made A/B testing practical for tiny teams.'] },
    { type: 'h2', id: 'failed', text: 'What failed' },
    { type: 'p', text: 'Agents optimized for the metric and drifted from the brand. Posts were technically on-message and emotionally wrong. They also published too much: silence was never an option they considered.' },
    { type: 'pullquote', text: 'An agent will always find something to say. Brands are built on what they choose not to.' },
    { type: 'h3', id: 'why-archived', text: 'Why it was archived' },
    { type: 'p', text: 'The lab answered its question. The useful parts, research and drafting under human editorial control, now live inside Epica Works.' }]

  },
  es: {
    slug: 'hal149-lab-marketing-autonomo',
    title: 'HAL149 Lab — Experimentos de marketing autónomo',
    subtitle: 'Seis meses dejando que los agentes llevaran campañas, y lo que no supieron hacer.',
    excerpt: 'Un experimento estructurado: dar a los agentes un presupuesto, una marca y un objetivo. Medir dónde ayuda la autonomía y dónde falla sin hacer ruido.',
    tldr: [
    'Los agentes destacaron en investigación, segmentación y primeros borradores.',
    'Fallaron en criterio de marca y en saber cuándo no publicar.',
    'El modelo correcto: autonomía para el volumen, personas para el gusto.'],

    tags: ['marketing', 'experimentos', 'autonomía'],
    body: [
    { type: 'h2', id: 'planteamiento', text: 'El planteamiento' },
    { type: 'p', text: 'Tres marcas pequeñas, un equipo de agentes para cada una, un presupuesto semanal fijo y un único objetivo por marca. Las personas revisaban resultados, pero no intervenían salvo que saltara una regla de seguridad.' },
    { type: 'h2', id: 'funciono', text: 'Qué funcionó' },
    { type: 'list', items: ['Los resúmenes de investigación de mercado fueron más rápidos y amplios que el trabajo manual.', 'La segmentación mejoró tras dos semanas de retroalimentación.', 'El volumen de borradores hizo viables los test A/B para equipos mínimos.'] },
    { type: 'h2', id: 'fallo', text: 'Qué falló' },
    { type: 'p', text: 'Los agentes optimizaron la métrica y se alejaron de la marca. Las publicaciones eran técnicamente correctas y emocionalmente erróneas. Además publicaban demasiado: el silencio nunca fue una opción para ellos.' },
    { type: 'pullquote', text: 'Un agente siempre encontrará algo que decir. Las marcas se construyen con lo que eligen no decir.' },
    { type: 'h3', id: 'por-que-archivado', text: 'Por qué se archivó' },
    { type: 'p', text: 'El laboratorio respondió a su pregunta. Las partes útiles, investigación y borradores bajo control editorial humano, viven ahora dentro de Epica Works.' }]

  }
}];