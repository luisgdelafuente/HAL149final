import type { Post } from '../types/content';

export const notes: Post[] = [
{
  id: 'agent-week-notes',
  type: 'note',
  topic: 'future-of-work',
  status: 'publicado',
  publishedAt: '2026-10-29',
  updatedAt: '2026-10-29',
  readingTime: 4,
  coverImage: {
    seed: 64,
    alt: {
      en: 'Seven small markers along a dashed horizontal trajectory, like daily log entries',
      es: 'Siete pequeños marcadores a lo largo de una trayectoria horizontal discontinua, como entradas diarias de una bitácora'
    }
  },
  en: {
    slug: 'field-notes-week-of-agent-building',
    title: 'Field notes from a week of agent building',
    subtitle: 'Seven days, one agent, and the gap between a demo and a colleague.',
    excerpt: 'A daily log from building a research agent for a real team. Less magic than expected, more management.',
    tldr: [
    'Demos take a day; dependable agents take a week of edge cases.',
    'Most failures came from missing context, not weak models.',
    'The final version was simpler than the first, and far more useful.'],

    tags: ['field notes', 'agents', 'practice'],
    body: [
    { type: 'h2', id: 'log', text: 'The log' },
    { type: 'list', items: ['Day 1: working demo by lunch. Overconfident by dinner.', 'Day 2: first real task. The agent cited a document that did not exist.', 'Day 3: added a retrieval step and a rule to quote sources.', 'Day 4: users asked for shorter answers. Cut the output in half.', 'Day 5: the agent started escalating unclear requests. Trust went up.', 'Day 6: removed three tools nobody used.', 'Day 7: wrote the role description I should have started with.'] },
    { type: 'h2', id: 'lesson', text: 'The lesson' },
    { type: 'p', text: 'Building the agent was the easy part. Managing it, defining scope, setting expectations and reviewing work, was the job. It felt much more like onboarding a junior colleague than shipping software.' },
    { type: 'code', lang: 'md', code: '## Role: research agent\n- Answer only from approved sources.\n- Quote the source for every claim.\n- If unsure, ask. Never guess.' },
    { type: 'p', text: 'Next week: the same agent, a second team, and a test of whether the role description travels.' }]

  },
  es: {
    slug: 'notas-de-campo-una-semana-construyendo-agentes',
    title: 'Notas de campo de una semana construyendo agentes',
    subtitle: 'Siete días, un agente y la distancia entre una demo y un colega.',
    excerpt: 'Una bitácora diaria de la construcción de un agente de investigación para un equipo real. Menos magia de la esperada, más gestión.',
    tldr: [
    'Una demo lleva un día; un agente fiable lleva una semana de casos límite.',
    'La mayoría de los fallos vinieron de falta de contexto, no de modelos débiles.',
    'La versión final fue más simple que la primera y mucho más útil.'],

    tags: ['notas de campo', 'agentes', 'práctica'],
    body: [
    { type: 'h2', id: 'bitacora', text: 'La bitácora' },
    { type: 'list', items: ['Día 1: demo funcionando antes de comer. Exceso de confianza a la hora de cenar.', 'Día 2: primera tarea real. El agente citó un documento que no existía.', 'Día 3: añadí un paso de recuperación y una regla para citar fuentes.', 'Día 4: los usuarios pidieron respuestas más cortas. Reduje la salida a la mitad.', 'Día 5: el agente empezó a escalar peticiones ambiguas. Subió la confianza.', 'Día 6: eliminé tres herramientas que nadie usaba.', 'Día 7: escribí la descripción del rol con la que debí empezar.'] },
    { type: 'h2', id: 'leccion', text: 'La lección' },
    { type: 'p', text: 'Construir el agente fue lo fácil. Gestionarlo, definir alcance, fijar expectativas y revisar su trabajo, fue el verdadero trabajo. Se pareció mucho más a incorporar a un colega junior que a publicar software.' },
    { type: 'code', lang: 'md', code: '## Rol: agente de investigación\n- Responde solo con fuentes aprobadas.\n- Cita la fuente de cada afirmación.\n- Si dudas, pregunta. Nunca adivines.' },
    { type: 'p', text: 'La semana que viene: el mismo agente, un segundo equipo y una prueba de si la descripción del rol funciona en otro contexto.' }]

  }
}];