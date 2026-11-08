import type { Lang } from '../brand';

export type Localized<T> = Record<Lang, T>;
export type ContentStatus = 'borrador' | 'publicado' | 'archivado';
export type PostType = 'essay' | 'project' | 'note';
export type TopicId = 'agentic-systems' | 'ai-native-architecture' | 'philosophy-of-technology' | 'future-of-work';
export type ProjectStatus = 'inOrbit' | 'inDevelopment' | 'archived';

export type Block =
{type: 'p';text: string;} |
{type: 'h2';id: string;text: string;} |
{type: 'h3';id: string;text: string;} |
{type: 'quote';text: string;cite?: string;} |
{type: 'pullquote';text: string;} |
{type: 'list';items: string[];ordered?: boolean;} |
{type: 'code';lang: string;code: string;} |
{type: 'figure';seed: number;alt: string;caption: string;};

export interface PostContent {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  tldr: [string, string, string];
  body: Block[];
  footnotes?: string[];
  tags: string[];
}

export interface MissionBriefContent {
  objective: string;
  role: string;
  stack: string;
  outcome: string;
}

export interface Post {
  id: string;
  type: PostType;
  topic: TopicId;
  status: ContentStatus;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  coverImage: {seed: number;alt: Localized<string>;};
  project?: {code: string;status: ProjectStatus;brief: Localized<MissionBriefContent>;};
  en: PostContent;
  es: PostContent;
}

export interface TopicSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  title: string;
  definition: string;
  summary: string;
  metaDescription: string;
  sections: TopicSection[];
  concepts: {term: string;definition: string;}[];
  faq: {question: string;answer: string;}[];
}

export interface Topic {
  id: TopicId;
  code: string;
  slug: Localized<string>;
  en: TopicContent;
  es: TopicContent;
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  updatedAt: string;
  sections: Localized<LegalSection[]>;
}

export interface Crumb {
  name: string;
  path: string;
}