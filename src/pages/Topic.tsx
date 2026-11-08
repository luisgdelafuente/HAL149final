import React from 'react';
import { useParams } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import { getTopicBySlug, postsInTopic } from '../utils/content';
import { routeFor, topicPath } from '../utils/routes';
import { topicLd } from '../utils/seo';
import { Seo } from '../components/Seo';
import { TopicHero } from '../components/topics/TopicHero';
import { TopicExplainer } from '../components/topics/TopicExplainer';
import { KeyConcepts } from '../components/topics/KeyConcepts';
import { FaqAccordion } from '../components/topics/FaqAccordion';
import { OtherTopics } from '../components/topics/OtherTopics';
import { TableOfContents } from '../components/post/TableOfContents';
import { RelatedPosts } from '../components/post/RelatedPosts';
import { NotFound } from './NotFound';

export function Topic() {
  const { slug } = useParams();
  const { t, lang } = useT();
  const topic = getTopicBySlug(lang, slug);

  if (!topic) return <NotFound />;

  const c = topic[lang];
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.topics.title, path: routeFor(lang, 'topics') },
  { name: c.title, path: topicPath(lang, topic) }];

  const tocItems = c.sections.map((s) => ({ id: s.id, text: s.heading, level: 2 as const }));
  const tocExtra = [
  { id: 'key-concepts', text: t.topics.keyConcepts, level: 2 as const },
  { id: 'faq-title', text: t.topics.faq, level: 2 as const }];


  return (
    <>
      <Seo
        title={c.title}
        description={c.metaDescription}
        paths={{ en: topicPath('en', topic), es: topicPath('es', topic) }}
        type="article"
        breadcrumbs={crumbs}
        jsonLd={topicLd(topic, lang)} />
      
      <TopicHero topic={topic} crumbs={crumbs} />

      <div className="shell grid gap-12 pb-20 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:order-last lg:col-span-4">
          <div className="space-y-10 lg:sticky lg:top-24">
            <TableOfContents items={tocItems} extra={tocExtra} />
            <div className="hidden lg:block">
              <OtherTopics current={topic.id} />
            </div>
          </div>
        </aside>
        <div className="min-w-0 lg:col-span-8">
          <p className="meta">{t.topics.explainer}</p>
          <div className="max-w-[68ch] [&_.prose-hal>h2:first-child]:!mt-6">
            <TopicExplainer sections={c.sections} />
          </div>
          <div className="mt-20 max-w-[68ch]">
            <KeyConcepts concepts={c.concepts} />
          </div>
          <div className="mt-20 max-w-[68ch]">
            <FaqAccordion items={c.faq} />
          </div>
          <div className="mt-16 lg:hidden">
            <OtherTopics current={topic.id} />
          </div>
        </div>
      </div>

      <RelatedPosts title={t.topics.related} posts={postsInTopic(topic.id)} />
    </>);

}