import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { routeFor } from '../../utils/routes';
import { btnPrimary, btnSecondary, EASE_OUT } from '../../utils/ui';
import { Starfield } from '../Starfield';
import { ConstellationMark } from './ConstellationMark';
import { Telemetry } from './Telemetry';

export function Hero() {
  const { t, lang } = useT();

  return (
    <section aria-labelledby="hero-title" className="relative -mt-16 overflow-hidden pt-16">
      <Starfield className="absolute inset-0 h-full w-full" />
      <div className="shell relative grid items-center gap-10 pb-12 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="font-display text-[2.6rem] font-medium leading-[1.03] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.1rem]">
            
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.06, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            
            {t.hero.subhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12, ease: EASE_OUT }}
            className="mt-9 flex flex-wrap gap-3">
            
            <Link to={routeFor(lang, 'blog')} className={`group ${btnPrimary}`}>
              {t.hero.ctaPrimary}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link to={routeFor(lang, 'topics')} className={btnSecondary}>
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
        <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
          <ConstellationMark />
        </div>
      </div>
      <div className="shell relative pb-10">
        <Telemetry />
      </div>
    </section>);

}