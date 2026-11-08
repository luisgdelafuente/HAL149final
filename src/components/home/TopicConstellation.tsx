import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import type { TopicId } from '../../types/content';
import { postsInTopic, topics } from '../../utils/content';
import { topicPath } from '../../utils/routes';
import { EASE_OUT } from '../../utils/ui';
import { SectionHeader } from '../SectionHeader';
import { TopicIcon } from '../topics/TopicIcon';

/** Node positions on the map, in percent of the map area. */
const POSITIONS: Record<TopicId, {x: number;y: number;}> = {
  'agentic-systems': { x: 18, y: 30 },
  'ai-native-architecture': { x: 60, y: 18 },
  'philosophy-of-technology': { x: 80, y: 66 },
  'future-of-work': { x: 32, y: 78 }
};

const LINKS: [TopicId, TopicId][] = [
['agentic-systems', 'ai-native-architecture'],
['ai-native-architecture', 'philosophy-of-technology'],
['philosophy-of-technology', 'future-of-work'],
['future-of-work', 'agentic-systems'],
['agentic-systems', 'philosophy-of-technology'],
['ai-native-architecture', 'future-of-work']];


export function TopicConstellation() {
  const { t, lang } = useT();
  const [active, setActive] = useState<TopicId>(topics[0].id);
  const activeTopic = topics.find((tp) => tp.id === active) ?? topics[0];

  return (
    <section aria-labelledby="constellation-title" className="border-t border-line">
      <div className="shell py-20 md:py-28">
        <SectionHeader id="constellation-title" title={t.constellation.heading} intro={t.constellation.intro} />

        {/* Desktop: interactive map */}
        <div className="mt-12 hidden overflow-hidden rounded-3xl border border-line bg-surface md:grid md:grid-cols-12">
          <div className="relative col-span-8 aspect-[16/10]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <ellipse cx="50" cy="50" rx="44" ry="38" fill="none" className="stroke-ink" strokeOpacity="0.08" strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
              <ellipse cx="50" cy="50" rx="28" ry="22" fill="none" className="stroke-ink" strokeOpacity="0.06" vectorEffect="non-scaling-stroke" />
              {LINKS.map(([a, b]) => {
                const lit = a === active || b === active;
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={POSITIONS[a].x}
                    y1={POSITIONS[a].y}
                    x2={POSITIONS[b].x}
                    y2={POSITIONS[b].y}
                    className={`transition-[stroke-opacity] duration-200 ${lit ? 'stroke-accent' : 'stroke-ink'}`}
                    strokeOpacity={lit ? 0.7 : 0.12}
                    strokeWidth={lit ? 1.5 : 1}
                    vectorEffect="non-scaling-stroke" />);


              })}
            </svg>
            <ul>
              {topics.map((topic) => {
                const pos = POSITIONS[topic.id];
                const isActive = topic.id === active;
                return (
                  <li key={topic.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>
                    <Link
                      to={topicPath(lang, topic)}
                      onMouseEnter={() => setActive(topic.id)}
                      onFocus={() => setActive(topic.id)}
                      aria-describedby="constellation-panel"
                      className="group flex flex-col items-center gap-3 rounded-xl p-2">
                      
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-full border bg-bg transition-[border-color,box-shadow,color] duration-200 ${
                        isActive ? 'border-accent text-accent-ink shadow-glow' : 'border-line text-muted group-hover:border-muted'}`
                        }>
                        
                        <TopicIcon id={topic.id} className="h-5 w-5" />
                      </span>
                      <span className={`whitespace-nowrap font-display text-sm transition-colors duration-200 ${isActive ? 'text-ink' : 'text-muted'}`}>
                        {topic[lang].title}
                      </span>
                    </Link>
                  </li>);

              })}
            </ul>
            <p className="meta absolute bottom-4 left-5">{t.constellation.hint}</p>
          </div>

          <div id="constellation-panel" aria-live="polite" className="col-span-4 flex flex-col border-l border-line p-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTopic.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="flex flex-1 flex-col">
                
                <p className="meta text-accent-ink">{activeTopic.code}</p>
                <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-ink">{activeTopic[lang].title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{activeTopic[lang].definition}</p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                  <span className="meta">{t.constellation.count(postsInTopic(activeTopic.id).length)}</span>
                  <Link to={topicPath(lang, activeTopic)} className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded text-sm text-accent-ink">
                    {t.constellation.enter}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked list */}
        <ul className="mt-10 divide-y divide-line border-y border-line md:hidden">
          {topics.map((topic) =>
          <li key={topic.id}>
              <Link to={topicPath(lang, topic)} className="group flex gap-4 py-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-accent-ink">
                  <TopicIcon id={topic.id} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-medium text-ink">{topic[lang].title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{topic[lang].summary}</span>
                  <span className="meta mt-3 block">{t.constellation.count(postsInTopic(topic.id).length)}</span>
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>);

}