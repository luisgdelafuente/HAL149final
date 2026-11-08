import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';

/** Site-specific chrome: skip link, header, footer, consent banner. */
export function Layout() {
  const { t } = useT();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-accent">
        
        {t.a11y.skip}
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none focus-visible:outline-none focus-visible:shadow-none">
        <Suspense fallback={<div className="min-h-[70vh]" role="status" aria-label={t.a11y.loading} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </div>);

}