import { brand, Lang, RouteKey } from '../brand';
import type { Post, Topic } from '../types/content';
import { posts } from '../data/posts';
import { topics } from '../data/topics';

export function langFromPath(pathname: string): Lang {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

export function routeFor(lang: Lang, key: RouteKey): string {
  return brand.routes[lang][key];
}

export function pathsFor(key: RouteKey): Record<Lang, string> {
  return { en: brand.routes.en[key], es: brand.routes.es[key] };
}

export function postPath(lang: Lang, post: Post): string {
  return `${brand.routes[lang].blog}/${post[lang].slug}`;
}

export function topicPath(lang: Lang, topic: Topic): string {
  return `${brand.routes[lang].topics}/${topic.slug[lang]}`;
}

/** Returns the equivalent page in the target language, falling back to that language's home. */
export function alternatePath(pathname: string, target: Lang): string {
  const from = langFromPath(pathname);
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const routes = brand.routes[from];

  const key = (Object.keys(routes) as RouteKey[]).find((k) => routes[k] === clean);
  if (key) return brand.routes[target][key];

  const blogPrefix = `${routes.blog}/`;
  if (clean.startsWith(blogPrefix)) {
    const slug = clean.slice(blogPrefix.length);
    const post = posts.find((p) => p[from].slug === slug);
    if (post) return postPath(target, post);
  }

  const topicPrefix = `${routes.topics}/`;
  if (clean.startsWith(topicPrefix)) {
    const slug = clean.slice(topicPrefix.length);
    const topic = topics.find((t) => t.slug[from] === slug);
    if (topic) return topicPath(target, topic);
  }

  return brand.routes[target].home;
}