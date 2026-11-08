import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckIcon, ChevronDownIcon } from 'lucide-react';
import { brand } from '../../brand';
import { useT } from '../../contexts/LanguageContext';
import { ContactField, Reason, useContactForm } from '../../hooks/useContactForm';
import { routeFor } from '../../utils/routes';
import { btnPrimary, btnSecondary, EASE_OUT, fieldBase, textLink } from '../../utils/ui';

const REASONS: Reason[] = ['collaboration', 'advisory', 'speaking', 'press', 'other'];

export function ContactForm() {
  const { t, lang } = useT();
  const { values, errors, errorCount, attempted, state, setField, blur, submit, reset } = useContactForm();

  const fieldProps = (name: ContactField) => ({
    id: `contact-${name}`,
    name,
    onBlur: () => blur(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined
  });
  const border = (name: ContactField) => errors[name] ? 'border-red-400/80' : 'border-line';
  const ErrorText = ({ name }: {name: ContactField;}) =>
  errors[name] ?
  <p id={`contact-${name}-error`} className="mt-2 text-xs text-red-500 dark:text-red-300">
        {errors[name]}
      </p> :
  null;
  const label = 'mb-2 block text-sm font-medium text-ink';

  if (state === 'success') {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: EASE_OUT }}
        className="rounded-2xl border border-accent/40 bg-surface p-8">
        
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-on-accent">
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-medium text-ink">{t.contact.successTitle}</h2>
        <p className="mt-2 text-muted">{t.contact.successBody}</p>
        <button type="button" onClick={reset} className={`${btnSecondary} mt-8`}>
          {t.contact.sendAnother}
        </button>
      </motion.div>);

  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <div aria-live="polite" role="status">
        <AnimatePresence>
          {attempted && errorCount > 0 &&
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2 rounded-xl border border-red-400/50 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-300">
            
              <AlertCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t.contact.summaryError(errorCount)}
            </motion.p>
          }
        </AnimatePresence>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={label}>
            {t.contact.fields.name}
          </label>
          <input {...fieldProps('name')} type="text" autoComplete="name" value={values.name} onChange={(e) => setField('name', e.target.value)} className={`${fieldBase} ${border('name')}`} />
          <ErrorText name="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className={label}>
            {t.contact.fields.email}
          </label>
          <input {...fieldProps('email')} type="email" autoComplete="email" inputMode="email" value={values.email} onChange={(e) => setField('email', e.target.value)} className={`${fieldBase} ${border('email')}`} />
          <ErrorText name="email" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-organization" className={label}>
            {t.contact.fields.organization} <span className="font-normal text-muted">({t.contact.fields.optional})</span>
          </label>
          <input {...fieldProps('organization')} type="text" autoComplete="organization" value={values.organization} onChange={(e) => setField('organization', e.target.value)} className={`${fieldBase} border-line`} />
        </div>
        <div>
          <label htmlFor="contact-reason" className={label}>
            {t.contact.fields.reason}
          </label>
          <div className="relative">
            <select
              {...fieldProps('reason')}
              value={values.reason}
              onChange={(e) => setField('reason', e.target.value as Reason | '')}
              className={`${fieldBase} ${border('reason')} appearance-none pr-10 ${values.reason ? '' : 'text-muted'}`}>
              
              <option value="" disabled>
                {t.contact.reasonPlaceholder}
              </option>
              {REASONS.map((r) =>
              <option key={r} value={r}>
                  {t.contact.reasons[r]}
                </option>
              )}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          </div>
          <ErrorText name="reason" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>
          {t.contact.fields.message}
        </label>
        <textarea {...fieldProps('message')} rows={6} value={values.message} onChange={(e) => setField('message', e.target.value)} className={`${fieldBase} ${border('message')} resize-y`} />
        <ErrorText name="message" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            {...fieldProps('consent')}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => setField('consent', e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line bg-surface accent-[rgb(var(--c-accent))]" />
          
          <label htmlFor="contact-consent" className="text-sm leading-relaxed text-muted">
            {t.contact.consentPre}
            <Link to={routeFor(lang, 'privacy')} className={textLink}>
              {t.contact.consentLink}
            </Link>
            {t.contact.consentPost}
          </label>
        </div>
        <ErrorText name="consent" />
      </div>

      {state === 'error' &&
      <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-400/50 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-300">
          <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            {t.contact.errorBody}{' '}
            <a href={`mailto:${brand.contact.email}`} className="underline underline-offset-2">
              {brand.contact.email}
            </a>
            .
          </span>
        </p>
      }

      <button type="submit" disabled={state === 'sending'} className={btnPrimary}>
        {state === 'sending' ? t.contact.sending : t.contact.submit}
      </button>
    </form>);

}