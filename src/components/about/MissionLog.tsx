import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import { missionLog } from '../../data/about';

export function MissionLog() {
  const { t, lang } = useT();
  return (
    <section aria-labelledby="mission-log" className="border-t border-line">
      <div className="shell grid gap-10 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="mission-log" className="font-display text-3xl font-medium tracking-tight text-ink">
            {t.about.missionLog}
          </h2>
          <p className="mt-3 text-muted">{t.about.missionLogIntro}</p>
        </div>
        <ol className="relative lg:col-span-8">
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
          {missionLog.map((entry, i) =>
          <li key={entry.code} className="relative grid grid-cols-[1rem_1fr] gap-6 pb-10 last:pb-0">
              <span
              aria-hidden="true"
              className={`relative z-10 mt-1.5 h-[15px] w-[15px] rounded-full border-2 ${
              i === 0 ? 'border-accent bg-accent shadow-glow' : 'border-line bg-bg'}`
              } />
            
              <div>
                <p className="meta flex flex-wrap items-center gap-2">
                  <span className="text-ink">T-{entry.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{entry.code}</span>
                  {i === 0 && <span className="rounded-full border border-accent/50 px-2 py-0.5 text-accent-ink">{t.about.active}</span>}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">{entry.title[lang]}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{entry.body[lang]}</p>
              </div>
            </li>
          )}
        </ol>
      </div>
    </section>);

}