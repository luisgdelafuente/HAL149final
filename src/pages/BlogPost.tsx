import React from 'react';
import { useParams } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import { adjacentPosts, getPostBySlug, headingsOf, relatedPosts, topicsById } from '../utils/content';
import { postPath, routeFor } from '../utils/routes';
import { absoluteUrl, articleLd } from '../utils/seo';
import { Seo } from '../components/Seo';
import { CoverArt } from '../components/CoverArt';
import { ReadingProgress } from '../components/post/ReadingProgress';
import { PostHeader } from '../components/post/PostHeader';
import { MissionBrief } from '../components/post/MissionBrief';
import { TldrBox } from '../components/post/TldrBox';
import { TableOfContents } from '../components/post/TableOfContents';
import { PostBody } from '../components/post/PostBody';
import { ShareLinks } from '../components/post/ShareLinks';
import { AuthorBox } from '../components/post/AuthorBox';
import { PrevNextNav } from '../components/post/PrevNextNav';
import { RelatedPosts } from '../components/post/RelatedPosts';
import { NotFound } from './NotFound';

export function BlogPost() {
  const { slug } = useParams();
  const { t, lang } = useT();
  const post = getPostBySlug(lang, slug);

  if (!post) return <NotFound />;

  const c = post[lang];
  const topic = topicsById[post.topic];
  const { prev, next } = adjacentPosts(post);
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.blog.title, path: routeFor(lang, 'blog') },
  { name: c.title, path: postPath(lang, post) }];


  return (
    <>
      <ReadingProgress />
      <Seo
        title={c.title}
        description={c.excerpt}
        paths={{ en: postPath('en', post), es: postPath('es', post) }}
        type="article"
        breadcrumbs={crumbs}
        jsonLd={[articleLd(post, topic, lang)]}
        article={{ publishedTime: post.publishedAt, modifiedTime: post.updatedAt, section: topic[lang].title, tags: c.tags }} />
      

      <article>
        <PostHeader post={post} crumbs={crumbs} />
        <MissionBrief post={post} />
        <div className="shell">
          <div className="overflow-hidden rounded-3xl border border-line">
            <CoverArt seed={post.coverImage.seed} alt={post.coverImage.alt[lang]} width={1600} height={720} />
          </div>
        </div>

        <div className="shell grid gap-10 py-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <div>
            <TableOfContents items={headingsOf(c.body)} />
          </div>
          <div className="min-w-0 max-w-[68ch]">
            <TldrBox items={c.tldr} />
            <div className="mt-12">
              <PostBody blocks={c.body} footnotes={c.footnotes} />
            </div>
            <div className="mt-14 border-t border-line pt-8">
              <ShareLinks url={absoluteUrl(postPath(lang, post))} title={c.title} />
            </div>
            <div className="mt-10">
              <AuthorBox />
            </div>
            <div className="mt-10">
              <PrevNextNav prev={prev} next={next} />
            </div>
          </div>
        </div>
      </article>

      <RelatedPosts title={t.post.related} posts={relatedPosts(post)} />
    </>);

}