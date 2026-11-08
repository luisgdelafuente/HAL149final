import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import type { Crumb, LegalDoc } from '../../types/content';
import { formatDate } from '../../utils/format';
import { PageHeader } from '../PageHeader';
import { TableOfContents } from '../post/TableOfContents';

/** Shared long-form layout for the three legal pages. */
export function LegalDocument({ title, doc, crumbs }: {title: string;doc: LegalDoc;crumbs: Crumb[];}) {
  const { t, lang } = useT();
  const sections = doc.sections[lang];

  return (
    <>
      <PageHeader crumbs={crumbs} title={title} meta={`${t.legal.lastUpdated}: ${formatDate(doc.updatedAt, lang)}`} />
      <div className="shell grid gap-10 pb-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <div>
          <TableOfContents items={sections.map((s) => ({ id: s.id, text: s.heading, level: 2 as const }))} />
        </div>
        <article className="prose-hal max-w-[68ch] [&>h2:first-child]:!mt-0">
          {sections.map((s) =>
          <React.Fragment key={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {s.paragraphs.map((p) =>
            <p key={p.slice(0, 40)}>{p}</p>
            )}
            </React.Fragment>
          )}
        </article>
      </div>
    </>);

}