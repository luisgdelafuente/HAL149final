import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { exploring, focusAreas } from '../../data/about';
import { routeFor } from '../../utils/routes';
import { SocialLinks } from '../SocialLinks';

export function AboutDetails() {
  const { t, lang } = useT();
  return (
    <section className="border-t border-line">
      <div className="shell grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <h2 className="meta">{t.about.focus}</h2>
          <ul className="mt-5 space-y-3">
            {focusAreas[lang].map((f) =>
            <li key={f} className="font-display text-lg leading-snug text-ink">
                {f}
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="meta">{t.about.exploring}</h2>
          <ul className="mt-5 space-y-3">
            {exploring[lang].map((e) =>
            <li key={e} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {e}
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="meta">{t.about.speaking}</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted">{t.about.speakingBody}</p>
          <Link to={routeFor(lang, 'contact')} className="group mt-4 inline-flex items-center gap-1.5 rounded text-sm text-accent-ink">
            {t.about.speakingCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div>
          <h2 className="meta">{t.about.elsewhere}</h2>
          <div className="mt-3">
            <SocialLinks variant="list" />
          </div>
        </div>
      </div>
    </section>);

}