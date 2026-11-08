import React from 'react';
import { ClockIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { brand } from '../../brand';
import { useT } from '../../contexts/LanguageContext';
import { SocialLinks } from '../SocialLinks';

export function ContactAside() {
  const { t, lang } = useT();
  const row = 'flex items-start gap-4 py-5';
  const icon = 'mt-0.5 h-4 w-4 shrink-0 text-accent-ink';

  return (
    <aside className="rounded-2xl border border-line bg-surface p-6 md:p-7">
      <dl className="divide-y divide-line">
        <div className={`${row} pt-0`}>
          <MailIcon className={icon} aria-hidden="true" />
          <div>
            <dt className="meta">{t.contact.aside.email}</dt>
            <dd className="mt-1.5">
              <a href={`mailto:${brand.contact.email}`} className="rounded text-ink transition-colors duration-150 hover:text-accent-ink">
                {brand.contact.email}
              </a>
            </dd>
          </div>
        </div>
        <div className={row}>
          <MapPinIcon className={icon} aria-hidden="true" />
          <div>
            <dt className="meta">{t.contact.aside.location}</dt>
            <dd className="mt-1.5 text-ink">{brand.contact.location[lang]}</dd>
          </div>
        </div>
        <div className={row}>
          <ClockIcon className={icon} aria-hidden="true" />
          <div>
            <dt className="meta">{t.contact.aside.response}</dt>
            <dd className="mt-1.5 text-ink">{brand.contact.responseTime[lang]}</dd>
          </div>
        </div>
      </dl>
      <div className="border-t border-line pt-5">
        <p className="meta mb-2">{t.contact.aside.social}</p>
        <SocialLinks variant="list" />
      </div>
    </aside>);

}