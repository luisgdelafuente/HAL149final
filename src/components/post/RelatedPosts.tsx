import React from 'react';
import type { Post } from '../../types/content';
import { PostCard } from '../PostCard';

export function RelatedPosts({ title, posts, id = 'related-title' }: {title: string;posts: Post[];id?: string;}) {
  if (posts.length === 0) return null;
  return (
    <section aria-labelledby={id} className="border-t border-line">
      <div className="shell py-16 md:py-20">
        <h2 id={id} className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
        <ul className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) =>
          <li key={p.id}>
              <PostCard post={p} />
            </li>
          )}
        </ul>
      </div>
    </section>);

}