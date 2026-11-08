import type { Lang } from '../brand';
import type { Post, Topic, TopicId, Block } from '../types/content';
import { posts } from '../data/posts';
import { topics } from '../data/topics';

/** Only 'publicado' content is ever shown in the UI. Newest first. */
export const publishedPosts: Post[] = posts.
filter((p) => p.status === 'publicado').
sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const topicsById = topics.reduce(
  (acc, t) => ({ ...acc, [t.id]: t }),
  {} as Record<TopicId, Topic>
);

export function getPostBySlug(lang: Lang, slug: string | undefined): Post | undefined {
  return publishedPosts.find((p) => p[lang].slug === slug);
}

export function getTopicBySlug(lang: Lang, slug: string | undefined): Topic | undefined {
  return topics.find((t) => t.slug[lang] === slug);
}

export function postsInTopic(id: TopicId): Post[] {
  return publishedPosts.filter((p) => p.topic === id);
}

export function relatedPosts(post: Post, count = 3): Post[] {
  const same = publishedPosts.filter((p) => p.id !== post.id && p.topic === post.topic);
  const rest = publishedPosts.filter((p) => p.id !== post.id && p.topic !== post.topic);
  return [...same, ...rest].slice(0, count);
}

export function adjacentPosts(post: Post): {prev?: Post;next?: Post;} {
  const i = publishedPosts.findIndex((p) => p.id === post.id);
  // List is newest-first: "previous" is older, "next" is newer.
  return { prev: publishedPosts[i + 1], next: i > 0 ? publishedPosts[i - 1] : undefined };
}

export function headingsOf(body: Block[]): {id: string;text: string;level: 2 | 3;}[] {
  return body.flatMap((b) =>
  b.type === 'h2' ? [{ id: b.id, text: b.text, level: 2 as const }] : b.type === 'h3' ? [{ id: b.id, text: b.text, level: 3 as const }] : []
  );
}

export function countByType() {
  return {
    essay: publishedPosts.filter((p) => p.type === 'essay').length,
    project: publishedPosts.filter((p) => p.type === 'project').length,
    note: publishedPosts.filter((p) => p.type === 'note').length
  };
}

export { topics };