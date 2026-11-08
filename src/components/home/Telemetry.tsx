import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import { countByType, publishedPosts } from '../../utils/content';
import { daysSince, pad2 } from '../../utils/format';

export function Telemetry() {
  const { t } = useT();
  const counts = countByType();
  const last = publishedPosts[0];
  const item = 'flex items-center gap-2 sm:border-l sm:border-line sm:pl-5 first:border-0 first:pl-0';

  return (
    <dl
      aria-label={t.telemetry.label}
      className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
      
      <div className={item}>
        <span aria-hidden="true" className="hal-pulse h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
        <dt>{t.telemetry.status}:</dt>
        <dd className="text-accent-ink">{t.telemetry.statusValue}</dd>
      </div>
      {last &&
      <div className={item}>
          <dt>{t.telemetry.lastSignal}:</dt>
          <dd className="text-ink">
            <time dateTime={last.publishedAt}>{t.telemetry.daysAgo(daysSince(last.publishedAt))}</time>
          </dd>
        </div>
      }
      <div className={item}>
        <dt>{t.telemetry.essays}:</dt>
        <dd className="text-ink">{pad2(counts.essay)}</dd>
      </div>
      <div className={item}>
        <dt>{t.telemetry.projects}:</dt>
        <dd className="text-ink">{pad2(counts.project)}</dd>
      </div>
      <div className={item}>
        <dt>{t.telemetry.notes}:</dt>
        <dd className="text-ink">{pad2(counts.note)}</dd>
      </div>
    </dl>);

}