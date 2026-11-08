import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { routeFor } from '../utils/routes';
import { btnPrimary } from '../utils/ui';

export function ContactBand() {
  const { t, lang } = useT();
  return (
    <section aria-labelledby="contact-band-title" className="relative overflow-hidden border-t border-line bg-surface">
      <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 md:-right-24">
        <circle cx="300" cy="300" r="290" fill="none" className="stroke-ink" strokeOpacity="0.08" />
        <circle cx="300" cy="300" r="210" fill="none" className="stroke-ink" strokeOpacity="0.08" strokeDasharray="2 8" />
        <circle cx="300" cy="300" r="130" fill="none" className="stroke-accent" strokeOpacity="0.35" />
        <circle cx="430" cy="300" r="5" className="fill-accent" />
      </svg>
      <div className="shell relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <h2 id="contact-band-title" className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          {t.contactBand.title}
        </h2>
        <Link to={routeFor(lang, 'contact')} className={`group ${btnPrimary}`}>
          {t.contactBand.cta}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </section>);

}