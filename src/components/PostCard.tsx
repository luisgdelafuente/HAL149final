import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import type { Post } from '../types/content';
import { postPath } from '../utils/routes';
import { CoverArt } from './CoverArt';
import { TypeBadge } from './TypeBadge';
import { PostMeta } from './PostMeta';

type Variant = 'default' | 'featured' | 'compact';

export function PostCard({ post, variant = 'default', headingLevel = 3 }: {post: Post;variant?: Variant;headingLevel?: 2 | 3;}) {
  const { lang } = useT();
  const c = post[lang];
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const to = postPath(lang, post);

  if (variant === 'compact') {
    return (
      <article className="group relative grid grid-cols-[minmax(0,1fr)_112px] gap-5 sm:grid-cols-[minmax(0,1fr)_144px]">
        <div className="flex min-w-0 flex-col">
          <div>
            <TypeBadge type={post.type} />
          </div>
          <Heading className="mt-3 font-display text-lg font-medium leading-snug tracking-tight text-ink transition-colors duration-150 group-hover:text-accent-ink">
            <Link to={to} className="rounded after:absolute after:inset-0 after:content-['']">
              {c.title}
            </Link>
          </Heading>
          <div className="mt-auto pt-3">
            <PostMeta post={post} />
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-line">
          <CoverArt seed={post.coverImage.seed} alt={post.coverImage.alt[lang]} width={480} height={360} className="transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
        </div>
      </article>);

  }

  const featured = variant === 'featured';

  return (
    <article className="group relative flex h-full flex-col">
      <div className="overflow-hidden rounded-2xl border border-line">
        <CoverArt
          seed={post.coverImage.seed}
          alt={post.coverImage.alt[lang]}
          width={1200}
          height={featured ? 700 : 675}
          className="transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
        
      </div>
      <div className={`flex flex-1 flex-col ${featured ? 'pt-6' : 'pt-5'}`}>
        <div>
          <TypeBadge type={post.type} />
        </div>
        <Heading
          className={`mt-3 font-display font-medium tracking-tight text-ink transition-colors duration-150 group-hover:text-accent-ink ${
          featured ? 'text-2xl leading-tight md:text-[2rem]' : 'text-xl leading-snug'}`
          }>
          
          <Link to={to} className="rounded after:absolute after:inset-0 after:content-['']">
            {c.title}
          </Link>
        </Heading>
        <p className={`mt-3 text-muted ${featured ? 'max-w-2xl text-base leading-relaxed' : 'line-clamp-3 text-sm leading-relaxed'}`}>{c.excerpt}</p>
        <div className="mt-auto pt-5">
          <PostMeta post={post} />
        </div>
      </div>
    </article>);

}