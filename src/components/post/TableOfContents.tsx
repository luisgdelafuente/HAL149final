import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { useActiveHeading } from '../../hooks/useActiveHeading';
import { EASE_OUT } from '../../utils/ui';

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function TocList({ items, active, onNavigate }: {items: TocItem[];active: string | null;onNavigate?: () => void;}) {
  return (
    <ul className="space-y-1 border-l border-line">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? 'location' : undefined}
              className={`-ml-px block border-l py-1.5 text-sm leading-snug transition-colors duration-150 ${item.level === 3 ? 'pl-7' : 'pl-4'} ${
              isActive ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'}`
              }>
              
              {item.text}
            </a>
          </li>);

      })}
    </ul>);

}

/** Sticky on desktop, collapsible on mobile. Highlights the section in view. */
export function TableOfContents({ items, extra }: {items: TocItem[];extra?: TocItem[];}) {
  const { t } = useT();
  const all = [...items, ...(extra ?? [])];
  const active = useActiveHeading(all.map((i) => i.id));
  const [open, setOpen] = useState(false);

  if (all.length === 0) return null;

  return (
    <>
      <div className="rounded-2xl border border-line lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="toc-mobile"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left">
          
          <span className="meta text-ink">{t.post.toc}</span>
          <ChevronDownIcon className={`h-4 w-4 text-muted transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        <AnimatePresence initial={false}>
          {open &&
          <motion.nav
            id="toc-mobile"
            aria-label={t.post.toc}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="overflow-hidden">
            
              <div className="px-5 pb-5">
                <TocList items={all} active={active} onNavigate={() => setOpen(false)} />
              </div>
            </motion.nav>
          }
        </AnimatePresence>
      </div>

      <nav aria-label={t.post.toc} className="sticky top-24 hidden lg:block">
        <p className="meta mb-4">{t.post.toc}</p>
        <TocList items={all} active={active} />
      </nav>
    </>);

}