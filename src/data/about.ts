import type { Localized } from '../types/content';

export const longBio: Localized<string[]> = {
  en: [
  'Luis has spent his career between strategy and engineering, translating ambitious ideas into systems that actually run. He has led digital transformation programs, built data products and designed operating models for companies of very different sizes.',
  'HAL149 is where those threads meet. It is a publishing platform and a lab: a place to think in public about how organizations should be redesigned around autonomous, AI-native capabilities, and to test those ideas through real projects.',
  'He works from Spain with teams worldwide, and believes that good technology strategy is mostly about clarity: of purpose, of responsibility and of the time horizon you are designing for.'],

  es: [
  'Luis ha desarrollado su carrera entre la estrategia y la ingeniería, traduciendo ideas ambiciosas en sistemas que funcionan de verdad. Ha liderado programas de transformación digital, construido productos de datos y diseñado modelos operativos para empresas de tamaños muy distintos.',
  'HAL149 es donde esos hilos se encuentran. Es una plataforma de publicación y un laboratorio: un lugar para pensar en público sobre cómo rediseñar las organizaciones en torno a capacidades autónomas e IA-nativas, y para poner esas ideas a prueba con proyectos reales.',
  'Trabaja desde España con equipos de todo el mundo y cree que una buena estrategia tecnológica consiste sobre todo en claridad: de propósito, de responsabilidad y del horizonte temporal para el que se diseña.']

};

// Placeholder milestones — replace with verified history before launch.
export const missionLog: {year: string;code: string;title: Localized<string>;body: Localized<string>;}[] = [
{
  year: '2026',
  code: 'M-05',
  title: { en: 'HAL149 goes public', es: 'HAL149 se hace público' },
  body: { en: 'Launches the publishing platform and the first agentic products for SMBs.', es: 'Lanza la plataforma de publicación y los primeros productos agénticos para pymes.' }
},
{
  year: '2023',
  code: 'M-04',
  title: { en: 'First autonomous systems', es: 'Primeros sistemas autónomos' },
  body: { en: 'Designs early agent workflows for research, support and operations teams.', es: 'Diseña los primeros flujos con agentes para equipos de investigación, soporte y operaciones.' }
},
{
  year: '2019',
  code: 'M-03',
  title: { en: 'Data products and platforms', es: 'Productos y plataformas de datos' },
  body: { en: 'Builds data products that turn operational signals into decisions.', es: 'Construye productos de datos que convierten señales operativas en decisiones.' }
},
{
  year: '2014',
  code: 'M-02',
  title: { en: 'Digital strategy', es: 'Estrategia digital' },
  body: { en: 'Leads transformation programs connecting business models with technology.', es: 'Lidera programas de transformación que conectan modelos de negocio y tecnología.' }
},
{
  year: '2009',
  code: 'M-01',
  title: { en: 'Launch', es: 'Lanzamiento' },
  body: { en: 'Starts in engineering and founds a first company. Learns that systems are people too.', es: 'Empieza en ingeniería y funda una primera empresa. Aprende que los sistemas también son personas.' }
}];


export const focusAreas: Localized<string[]> = {
  en: ['AI-native operating models', 'Agentic product design', 'Strategic foresight', 'Governance of autonomous systems'],
  es: ['Modelos operativos IA-nativos', 'Diseño de productos agénticos', 'Prospectiva estratégica', 'Gobernanza de sistemas autónomos']
};

export const exploring: Localized<string[]> = {
  en: ['How small companies can run agent teams safely', 'Contracts and receipts as product surfaces', 'Long-horizon scenarios for work in 2035', 'Local-first, privacy-preserving agents'],
  es: ['Cómo pueden las pequeñas empresas operar equipos de agentes con seguridad', 'Contratos y recibos como superficies de producto', 'Escenarios de largo plazo para el trabajo en 2035', 'Agentes locales que preservan la privacidad']
};