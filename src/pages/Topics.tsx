import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { topics } from '../utils/content';
import { pathsFor, routeFor } from '../utils/routes';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { TopicCard } from '../components/topics/TopicCard';
import { ContactBand } from '../components/ContactBand';

export function Topics() {
  const { t, lang } = useT();
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.topics.title, path: routeFor(lang, 'topics') }];


  return (
    <>
      <Seo title={t.topics.metaTitle} description={t.topics.metaDescription} paths={pathsFor('topics')} breadcrumbs={crumbs} />
      <PageHeader crumbs={crumbs} title={t.topics.title} intro={t.topics.intro} />
      <div className="shell pb-24">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          {topics.map((topic) =>
          <li key={topic.id} className="flex">
              <TopicCard topic={topic} />
            </li>
          )}
        </ul>
      </div>
      <ContactBand />
    </>);

}