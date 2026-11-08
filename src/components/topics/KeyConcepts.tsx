import React from 'react';
import { useT } from '../../contexts/LanguageContext';

export function KeyConcepts({ concepts }: {concepts: {term: string;definition: string;}[];}) {
  const { t } = useT();
  return (
    <section aria-labelledby="key-concepts">
      <h2 id="key-concepts" className="font-display text-2xl font-medium tracking-tight text-ink">
        {t.topics.keyConcepts}
      </h2>
      <dl className="mt-6 divide-y divide-line border-y border-line">
        {concepts.map((c) =>
        <div key={c.term} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6">
            <dt className="font-mono text-[13px] text-accent-ink">{c.term}</dt>
            <dd className="text-sm leading-relaxed text-muted">{c.definition}</dd>
          </div>
        )}
      </dl>
    </section>);

}