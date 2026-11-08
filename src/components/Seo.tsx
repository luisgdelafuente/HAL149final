import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brand, Lang } from '../brand';
import { useT } from '../contexts/LanguageContext';
import type { Crumb } from '../types/content';
import { absoluteUrl, breadcrumbLd, JsonLd, siteGraph } from '../utils/seo';

interface SeoProps {
  /** Page title without the brand suffix. Omit on the home page. */
  title?: string;
  description: string;
  /** Localized path of this page in every language (drives canonical + hreflang). */
  paths: Record<Lang, string>;
  type?: 'website' | 'article' | 'profile';
  breadcrumbs?: Crumb[];
  jsonLd?: JsonLd[];
  article?: {publishedTime: string;modifiedTime: string;section: string;tags: string[];};
  noindex?: boolean;
}

export function Seo({ title, description, paths, type = 'website', breadcrumbs, jsonLd = [], article, noindex }: SeoProps) {
  const { t, lang } = useT();
  const fullTitle = title ? `${title}${t.meta.titleSuffix}` : t.meta.siteTitle;
  const url = absoluteUrl(paths[lang]);
  const image = absoluteUrl(brand.ogImage);
  const altLocale = brand.i18n[lang === 'en' ? 'es' : 'en'].meta.locale;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [...siteGraph(lang), ...(breadcrumbs ? [breadcrumbLd(breadcrumbs)] : []), ...jsonLd]
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={absoluteUrl(paths.en)} />
      <link rel="alternate" hrefLang="es" href={absoluteUrl(paths.es)} />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(paths.en)} />
      <link rel="alternate" type="application/rss+xml" title={brand.name} href={lang === 'es' ? '/es/rss.xml' : '/rss.xml'} />

      <meta property="og:site_name" content={brand.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={t.meta.ogImageAlt} />
      <meta property="og:locale" content={t.meta.locale} />
      <meta property="og:locale:alternate" content={altLocale} />
      {article && <meta property="article:published_time" content={article.publishedTime} />}
      {article && <meta property="article:modified_time" content={article.modifiedTime} />}
      {article && <meta property="article:section" content={article.section} />}
      {article?.tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>);

}