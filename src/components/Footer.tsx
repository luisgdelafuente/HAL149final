import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import { routeFor, topicPath } from '../utils/routes';
import { topics } from '../utils/content';
import { COOKIE_SETTINGS_EVENT } from '../utils/ui';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';
import { LanguageSwitcher } from './LanguageSwitcher';

const linkClass = 'text-sm text-muted transition-colors duration-150 hover:text-ink';

export function Footer() {
  const { t, lang } = useT();

  return (
    <footer className="border-t border-line bg-bg">
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to={routeFor(lang, 'home')} aria-label={t.a11y.home} className="inline-flex rounded text-ink">
            <Logo decorative className="h-6 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{t.footer.mission}</p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <nav aria-label={t.a11y.footerNav} className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
          <div>
            <h2 className="meta">{t.footer.explore}</h2>
            <ul className="mt-4 space-y-3">
              {(['blog', 'topics', 'about', 'contact'] as const).map((k) =>
              <li key={k}>
                  <Link to={routeFor(lang, k)} className={linkClass}>
                    {t.nav[k]}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="meta">{t.footer.topics}</h2>
            <ul className="mt-4 space-y-3">
              {topics.map((topic) =>
              <li key={topic.id}>
                  <Link to={topicPath(lang, topic)} className={linkClass}>
                    {topic[lang].title}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="meta">{t.footer.legal}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to={routeFor(lang, 'legalNotice')} className={linkClass}>
                  {t.legal.notice.title}
                </Link>
              </li>
              <li>
                <Link to={routeFor(lang, 'privacy')} className={linkClass}>
                  {t.legal.privacy.title}
                </Link>
              </li>
              <li>
                <Link to={routeFor(lang, 'cookies')} className={linkClass}>
                  {t.legal.cookies.title}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
                  className={`${linkClass} text-left`}>
                  
                  {t.cookies.reopen}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">{t.footer.rights}</p>
          <p className="meta flex items-center gap-2">
            <span aria-hidden="true" className="hal-pulse h-1.5 w-1.5 rounded-full bg-accent" />
            {t.footer.coordinates}
          </p>
          <LanguageSwitcher className="-ml-1.5 sm:ml-0" />
        </div>
      </div>
    </footer>);

}