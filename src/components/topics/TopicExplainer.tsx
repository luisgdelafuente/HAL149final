import React from 'react';
import type { TopicSection } from '../../types/content';

export function TopicExplainer({ sections }: {sections: TopicSection[];}) {
  return (
    <div className="prose-hal">
      {sections.map((s) =>
      <React.Fragment key={s.id}>
          <h2 id={s.id}>{s.heading}</h2>
          {s.paragraphs.map((p) =>
        <p key={p.slice(0, 32)}>{p}</p>
        )}
        </React.Fragment>
      )}
    </div>);

}