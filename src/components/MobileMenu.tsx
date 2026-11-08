import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { XIcon } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { routeFor } from '../utils/routes';
import { EASE_OUT, iconBtn } from '../utils/ui';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export type NavKey = 'blog' | 'topics' | 'about' | 'contact';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavKey[];
}

export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  const { t, lang } = useT();
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (open && lastPath.current !== pathname) onClose();
    lastPath.current = pathname;
  }, [pathname, open, onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    const focusables = () =>
    Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open &&
      <motion.div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.a11y.primaryNav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
        
          <div className="shell flex h-16 items-center justify-between">
            <Link to={routeFor(lang, 'home')} aria-label={t.a11y.home} className="text-ink">
              <Logo variant="mark" decorative className="h-8 w-auto" />
            </Link>
            <button type="button" onClick={onClose} aria-label={t.a11y.closeMenu} className={iconBtn}>
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label={t.a11y.primaryNav} className="shell flex-1 pt-10">
            <ul className="space-y-1">
              {items.map((k, i) =>
            <motion.li
              key={k}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.04 * i, ease: EASE_OUT }}>
              
                  <NavLink
                to={routeFor(lang, k)}
                className={({ isActive }) =>
                `flex items-baseline justify-between border-b border-line py-4 font-display text-4xl tracking-tight transition-colors duration-150 ${
                isActive ? 'text-accent-ink' : 'text-ink'}`

                }>
                
                    <span>{t.nav[k]}</span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </NavLink>
                </motion.li>
            )}
            </ul>
          </nav>

          <div className="shell flex items-center justify-between gap-4 border-t border-line py-5">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <p className="shell meta pb-6">{t.footer.coordinates}</p>
        </motion.div>
      }
    </AnimatePresence>,
    document.body
  );
}