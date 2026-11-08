import { brand, Lang } from '../brand';
import type { Crumb, Post, Topic } from '../types/content';
import { postPath, topicPath } from './routes';

const ORG_ID = `${brand.siteUrl}/#organization`;
const PERSON_ID = `${brand.siteUrl}/#person`;
const SITE_ID = `${brand.siteUrl}/#website`;

export type JsonLd = Record<string, unknown>;

export function absoluteUrl(path: string): string {
  return `${brand.siteUrl}${path}`;
}

export function siteGraph(lang: Lang): JsonLd[] {
  return [
  {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: absoluteUrl(brand.routes[lang].home),
    name: brand.name,
    description: brand.i18n[lang].meta.siteDescription,
    inLanguage: lang,
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${absoluteUrl(brand.routes[lang].blog)}?q={search_term_string}` },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: brand.author.name,
    jobTitle: brand.author.role[lang],
    description: brand.author.bio[lang],
    url: absoluteUrl(brand.routes[lang].about),
    worksFor: { '@id': ORG_ID },
    sameAs: Object.values(brand.social).map((s) => s.url)
  },
  {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: brand.name,
    url: brand.siteUrl,
    logo: absoluteUrl(brand.logoPath),
    founder: { '@id': PERSON_ID },
    email: brand.contact.email,
    sameAs: Object.values(brand.social).map((s) => s.url)
  }];

}

export function breadcrumbLd(crumbs: Crumb[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) }))
  };
}

export function articleLd(post: Post, topic: Topic, lang: Lang): JsonLd {
  const c = post[lang];
  return {
    '@type': 'BlogPosting',
    headline: c.title,
    alternativeHeadline: c.subtitle,
    description: c.excerpt,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: absoluteUrl(brand.ogImage),
    inLanguage: lang,
    keywords: c.tags.join(', '),
    mainEntityOfPage: absoluteUrl(postPath(lang, post)),
    about: { '@type': 'Thing', name: topic[lang].title, url: absoluteUrl(topicPath(lang, topic)) }
  };
}

export function topicLd(topic: Topic, lang: Lang): JsonLd[] {
  const c = topic[lang];
  const url = absoluteUrl(topicPath(lang, topic));
  return [
  {
    '@type': 'DefinedTerm',
    name: c.title,
    description: c.definition,
    url,
    inDefinedTermSet: absoluteUrl(brand.routes[lang].topics),
    inLanguage: lang
  },
  {
    '@type': 'FAQPage',
    url,
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  }];

}

export function contactPageLd(lang: Lang): JsonLd {
  return {
    '@type': 'ContactPage',
    url: absoluteUrl(brand.routes[lang].contact),
    inLanguage: lang,
    about: { '@id': ORG_ID }
  };
}

export function profilePageLd(lang: Lang): JsonLd {
  return {
    '@type': 'ProfilePage',
    url: absoluteUrl(brand.routes[lang].about),
    inLanguage: lang,
    mainEntity: { '@id': PERSON_ID }
  };
}