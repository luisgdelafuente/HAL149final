import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { routeFor } from '../utils/routes';
import { iconBtn } from '../utils/ui';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu, NavKey } from './MobileMenu';

const NAV_ITEMS: NavKey[] = ['blog', 'topics', 'about', 'contact'];

export function Header() {
  const { t, lang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButton.current?.focus();
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out ${
      scrolled ? 'border-line/80 bg-bg/70 backdrop-blur-xl backdrop-saturate-150' : 'border-transparent bg-transparent'}`
      }>
      
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to={routeFor(lang, 'home')} aria-label={t.a11y.home} className="flex items-center rounded text-ink">
          <Logo decorative className="hidden h-6 w-auto sm:block" />
          <Logo variant="mark" decorative className="h-8 w-auto sm:hidden" />
        </Link>

        <nav aria-label={t.a11y.primaryNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((k) =>
            <li key={k}>
                <NavLink
                to={routeFor(lang, k)}
                className={({ isActive }) =>
                `relative block rounded-full px-3.5 py-2 text-sm transition-colors duration-150 ${
                isActive ? 'text-ink' : 'text-muted hover:text-ink'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {t.nav[k]}
                      {isActive &&
                  <motion.span
                    layoutId="nav-indicator"
                    aria-hidden="true"
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-x-0 bottom-0.5 mx-auto h-1 w-1 rounded-full bg-accent shadow-glow" />

                  }
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="mr-1 hidden sm:flex" />
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${iconBtn} md:hidden`}>
            
            <MenuIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={closeMenu} items={NAV_ITEMS} />
    </header>);

}