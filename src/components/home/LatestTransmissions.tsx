import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import { publishedPosts } from '../../utils/content';
import { routeFor } from '../../utils/routes';
import { PostCard } from '../PostCard';
import { SectionHeader } from '../SectionHeader';

export function LatestTransmissions() {
  const { t, lang } = useT();
  const [featured, ...rest] = publishedPosts.slice(0, 3);
  if (!featured) return null;

  return (
    <section aria-labelledby="latest-title" className="border-t border-line">
      <div className="shell py-20 md:py-28">
        <SectionHeader id="latest-title" title={t.latest.heading} action={{ label: t.latest.viewAll, to: routeFor(lang, 'blog') }} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <PostCard post={featured} variant="featured" />
          </div>
          <div className="flex flex-col divide-y divide-line lg:col-span-5">
            {rest.map((post) =>
            <div key={post.id} className="py-7 first:pt-0 last:pb-0">
                <PostCard post={post} variant="compact" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}