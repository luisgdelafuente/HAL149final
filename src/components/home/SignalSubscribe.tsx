import React, { FormEvent, useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { isValidEmail, postContact } from '../../utils/api';
import { btnPrimary, fieldBase } from '../../utils/ui';

type State = 'idle' | 'sending' | 'success' | 'error';

export function SignalSubscribe() {
  const { t, lang } = useT();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [invalid, setInvalid] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setState('sending');
    try {
      await postContact({ type: 'newsletter', email: email.trim(), lang });
      setState('success');
      setEmail('');
    } catch {
      setState('error');
    }
  };

  return (
    <section aria-labelledby="subscribe-title" className="border-t border-line">
      <div className="shell grid gap-8 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 id="subscribe-title" className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {t.subscribe.heading}
          </h2>
          <p className="mt-3 text-muted">{t.subscribe.body}</p>
        </div>
        <div className="lg:col-span-6">
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="subscribe-email" className="sr-only">
              {t.subscribe.label}
            </label>
            <input
              id="subscribe-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (invalid) setInvalid(!isValidEmail(e.target.value));
                if (state === 'error' || state === 'success') setState('idle');
              }}
              placeholder={t.subscribe.placeholder}
              aria-invalid={invalid}
              aria-describedby="subscribe-status"
              className={`${fieldBase} sm:flex-1 ${invalid ? 'border-red-400/70' : 'border-line'}`} />
            
            <button type="submit" disabled={state === 'sending'} className={btnPrimary}>
              {state === 'sending' ? t.subscribe.sending : t.subscribe.submit}
            </button>
          </form>
          <p id="subscribe-status" role="status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm">
            {invalid && <span className="text-red-500 dark:text-red-300">{t.subscribe.invalid}</span>}
            {!invalid && state === 'success' &&
            <span className="inline-flex items-center gap-2 text-accent-ink">
                <CheckIcon className="h-4 w-4" aria-hidden="true" />
                {t.subscribe.success}
              </span>
            }
            {!invalid && state === 'error' && <span className="text-red-500 dark:text-red-300">{t.subscribe.error}</span>}
          </p>
        </div>
      </div>
    </section>);

}