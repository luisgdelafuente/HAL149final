import React, { useState } from 'react';
import { CheckIcon, LinkIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { iconBtn } from '../../utils/ui';
import { SocialIcon } from '../SocialIcon';

export function ShareLinks({ url, title }: {url: string;title: string;}) {
  const { t } = useT();
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="meta">{t.post.share}</span>
      <a href={`https://x.com/intent/post?text=${enc(title)}&url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label={`${t.post.shareX} (${t.a11y.newTab})`} className={iconBtn}>
        <SocialIcon network="x" className="h-3.5 w-3.5" />
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label={`${t.post.shareLinkedIn} (${t.a11y.newTab})`} className={iconBtn}>
        <SocialIcon network="linkedin" className="h-3.5 w-3.5" />
      </a>
      <button type="button" onClick={copy} aria-label={t.post.copyLink} className={`${iconBtn} ${copied ? 'border-accent text-accent-ink' : ''}`}>
        {copied ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
      </button>
      <span role="status" aria-live="polite" className="font-mono text-[11px] text-accent-ink">
        {copied ? t.post.copied : ''}
      </span>
    </div>);

}