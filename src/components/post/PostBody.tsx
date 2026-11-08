import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import type { Block } from '../../types/content';
import { CoverArt } from '../CoverArt';

/** Renders text with [^n] footnote references as accessible superscript links. */
function renderInline(text: string): React.ReactNode[] {
  return text.split(/(\[\^\d+\])/g).map((part, i) => {
    const m = part.match(/^\[\^(\d+)\]$/);
    if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
    const n = m[1];
    return (
      <sup key={i}>
        <a href={`#fn-${n}`} id={`fnref-${n}`} aria-describedby="footnotes-label">
          [{n}]
        </a>
      </sup>);

  });
}

export function PostBody({ blocks, footnotes }: {blocks: Block[];footnotes?: string[];}) {
  const { t } = useT();

  return (
    <div className="prose-hal">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i}>{renderInline(b.text)}</p>;
          case 'h2':
            return (
              <h2 key={i} id={b.id}>
                {b.text}
              </h2>);

          case 'h3':
            return (
              <h3 key={i} id={b.id}>
                {b.text}
              </h3>);

          case 'quote':
            return (
              <blockquote key={i}>
                <p>{b.text}</p>
                {b.cite && <cite>— {b.cite}</cite>}
              </blockquote>);

          case 'pullquote':
            return (
              <p key={i} className="pullquote">
                {b.text}
              </p>);

          case 'list':
            return b.ordered ?
            <ol key={i}>
                {b.items.map((it) =>
              <li key={it}>{renderInline(it)}</li>
              )}
              </ol> :

            <ul key={i}>
                {b.items.map((it) =>
              <li key={it}>{renderInline(it)}</li>
              )}
              </ul>;

          case 'code':
            return (
              <pre key={i} aria-label={b.lang} tabIndex={0}>
                <code>{b.code}</code>
              </pre>);

          case 'figure':
            return (
              <figure key={i} className="!mt-10">
                <div className="overflow-hidden rounded-2xl border border-line">
                  <CoverArt seed={b.seed} alt={b.alt} width={1200} height={600} />
                </div>
                <figcaption>{b.caption}</figcaption>
              </figure>);

          default:
            return null;
        }
      })}

      {footnotes && footnotes.length > 0 &&
      <section aria-labelledby="footnotes-label" className="!mt-14 border-t border-line pt-6">
          <h2 id="footnotes-label" className="meta !mt-0 !font-mono !text-[11px] !font-normal !tracking-[0.14em] !text-muted">
            {t.post.footnotes}
          </h2>
          <ol className="mt-4 text-sm text-muted">
            {footnotes.map((note, i) =>
          <li key={i} id={`fn-${i + 1}`}>
                {note}{' '}
                <a href={`#fnref-${i + 1}`} aria-label={t.post.backToRef}>
                  ↩
                </a>
              </li>
          )}
          </ol>
        </section>
      }
    </div>);

}