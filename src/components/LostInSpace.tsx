import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { routeFor } from '../utils/routes';
import { btnPrimary, btnSecondary } from '../utils/ui';
import { Starfield } from './Starfield';

export function LostInSpace() {
  const { t, lang } = useT();
  return (
    <section className="relative -mt-16 flex min-h-[80vh] items-center overflow-hidden pt-16">
      <Starfield className="absolute inset-0 h-full w-full" density={0.8} />
      <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-80">
        <circle cx="300" cy="300" r="290" fill="none" className="stroke-ink" strokeOpacity="0.06" />
        <circle cx="300" cy="300" r="200" fill="none" className="stroke-ink" strokeOpacity="0.08" strokeDasharray="2 9" />
        <path d="M 120 420 Q 300 120 520 160" fill="none" className="stroke-accent" strokeOpacity="0.5" strokeDasharray="4 8" />
        <circle cx="520" cy="160" r="5" className="fill-accent" />
      </svg>
      <div className="shell relative text-center">
        <p className="meta text-accent-ink">{t.notFound.code}</p>
        <h1 className="mt-6 font-display text-5xl font-medium tracking-[-0.03em] text-ink md:text-7xl">{t.notFound.title}</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted">{t.notFound.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to={routeFor(lang, 'home')} className={`group ${btnPrimary}`}>
            {t.notFound.home}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link to={routeFor(lang, 'blog')} className={btnSecondary}>
            {t.notFound.blog}
          </Link>
        </div>
      </div>
    </section>);

}