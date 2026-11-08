import React from 'react';
import { brand } from '../../brand';
import { useT } from '../../contexts/LanguageContext';
import type { Crumb } from '../../types/content';
import { longBio } from '../../data/about';
import { Breadcrumbs } from '../Breadcrumbs';
import { PortraitPlaceholder } from './PortraitPlaceholder';

export function AboutIntro({ crumbs }: {crumbs: Crumb[];}) {
  const { t, lang } = useT();
  return (
    <section className="shell pb-16 pt-10 md:pt-14">
      <Breadcrumbs items={crumbs} />
      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-line">
            <PortraitPlaceholder />
          </div>
          <p className="meta mt-4">
            {brand.author.name} · {brand.author.role[lang]}
          </p>
        </div>
        <div className="lg:col-span-7">
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl">{t.about.heading}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink/90">{brand.author.bio[lang]}</p>
          <h2 className="meta mt-12">{t.about.longBio}</h2>
          <div className="mt-4 space-y-5 text-[17px] leading-relaxed text-muted">
            {longBio[lang].map((p) =>
            <p key={p.slice(0, 24)}>{p}</p>
            )}
          </div>
        </div>
      </div>
    </section>);

}