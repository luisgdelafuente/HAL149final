import { FormEvent, useState } from 'react';
import { useT } from '../contexts/LanguageContext';
import { isValidEmail, postContact } from '../utils/api';

export type Reason = 'collaboration' | 'advisory' | 'speaking' | 'press' | 'other';
export type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export interface ContactValues {
  name: string;
  email: string;
  organization: string;
  reason: Reason | '';
  message: string;
  consent: boolean;
}

export type ContactField = keyof ContactValues;
type Errors = Partial<Record<ContactField, string>>;

const INITIAL: ContactValues = { name: '', email: '', organization: '', reason: '', message: '', consent: false };
const ORDER: ContactField[] = ['name', 'email', 'reason', 'message', 'consent'];

export function useContactForm() {
  const { t, lang } = useT();
  const [values, setValues] = useState<ContactValues>(INITIAL);
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [state, setState] = useState<SubmitState>('idle');
  const [attempted, setAttempted] = useState(false);

  const validate = (v: ContactValues): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = t.contact.errors.name;
    if (!isValidEmail(v.email)) e.email = t.contact.errors.email;
    if (!v.reason) e.reason = t.contact.errors.reason;
    if (v.message.trim().length < 20) e.message = t.contact.errors.message;
    if (!v.consent) e.consent = t.contact.errors.consent;
    return e;
  };

  const allErrors = validate(values);
  const errors: Errors = {};
  ORDER.forEach((f) => {
    if ((touched[f] || attempted) && allErrors[f]) errors[f] = allErrors[f];
  });

  const setField = <K extends ContactField,>(field: K, value: ContactValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (state === 'error') setState('idle');
  };

  const blur = (field: ContactField) => setTouched((prev) => ({ ...prev, [field]: true }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const found = validate(values);
    const firstInvalid = ORDER.find((f) => found[f]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    setState('sending');
    try {
      await postContact({
        type: 'contact',
        name: values.name.trim(),
        email: values.email.trim(),
        organization: values.organization.trim() || undefined,
        reason: values.reason,
        message: values.message.trim(),
        consent: values.consent,
        lang
      });
      setState('success');
    } catch {
      setState('error');
    }
  };

  const reset = () => {
    setValues(INITIAL);
    setTouched({});
    setAttempted(false);
    setState('idle');
  };

  const errorCount = Object.keys(errors).length;

  return { values, errors, errorCount, attempted, state, setField, blur, submit, reset };
}