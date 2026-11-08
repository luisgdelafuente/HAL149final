import React from 'react';
import { useT } from '../../contexts/LanguageContext';

export function TldrBox({ items }: {items: string[];}) {
  const { t } = useT();
  return (
    <section aria-labelledby="tldr-title" className="rounded-2xl border border-line bg-surface p-6 md:p-7">
      <h2 id="tldr-title" className="meta text-accent-ink">
        {t.post.tldr}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) =>
        <li key={i} className="grid grid-cols-[1.75rem_1fr] text-[15px] leading-relaxed text-ink">
            <span aria-hidden="true" className="pt-0.5 font-mono text-xs text-muted">
              0{i + 1}
            </span>
            <span>{item}</span>
          </li>
        )}
      </ul>
    </section>);

}