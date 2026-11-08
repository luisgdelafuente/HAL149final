import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { EASE_OUT } from '../../utils/ui';

export function FaqAccordion({ items }: {items: {question: string;answer: string;}[];}) {
  const { t } = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-display text-2xl font-medium tracking-tight text-ink">
        {t.topics.faq}
      </h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item, i) => {
          const isOpen = open === i;
          const btnId = `faq-q-${i}`;
          const panelId = `faq-a-${i}`;
          return (
            <div key={item.question}>
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left font-display text-lg font-medium leading-snug text-ink transition-colors duration-150 hover:text-accent-ink">
                  
                  {item.question}
                  <PlusIcon
                    className={`mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-200 ease-out ${isOpen ? 'rotate-45 text-accent-ink' : ''}`}
                    aria-hidden="true" />
                  
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen &&
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: EASE_OUT }}
                  className="overflow-hidden">
                  
                    <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">{item.answer}</p>
                  </motion.div>
                }
              </AnimatePresence>
            </div>);

        })}
      </div>
    </section>);

}