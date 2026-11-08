import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import { pad2 } from '../../utils/format';
import { Reveal } from '../Reveal';

export function Manifesto() {
  const { t } = useT();

  return (
    <section aria-labelledby="thesis-title" className="border-t border-line">
      <div className="shell grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 id="thesis-title" className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {t.manifesto.heading}
          </h2>
          <p className="mt-3 max-w-xs text-muted">{t.manifesto.intro}</p>
        </div>
        <Reveal className="lg:col-span-8">
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {t.manifesto.principles.map((p, i) =>
            <li key={p.title} className="flex flex-col bg-surface p-6 md:p-7">
                <span className="font-mono text-xs tracking-[0.14em] text-accent-ink">{pad2(i + 1)} —</span>
                <h3 className="mt-10 font-display text-xl font-medium leading-snug tracking-tight text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            )}
          </ol>
        </Reveal>
      </div>
    </section>);

}