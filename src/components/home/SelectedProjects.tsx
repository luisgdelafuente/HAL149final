import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { publishedPosts } from '../../utils/content';
import { postPath } from '../../utils/routes';
import { ProjectStatusPill } from '../ProjectStatusPill';
import { SectionHeader } from '../SectionHeader';
import { MissionPatch } from './MissionPatch';

export function SelectedProjects() {
  const { t, lang } = useT();
  const projects = publishedPosts.filter((p) => p.type === 'project' && p.project).slice(0, 3);

  return (
    <section aria-labelledby="projects-title" className="border-t border-line">
      <div className="shell py-20 md:py-28">
        <SectionHeader id="projects-title" title={t.projects.heading} intro={t.projects.intro} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((p) => {
            const project = p.project;
            if (!project) return null;
            return (
              <li key={p.id}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color] duration-200 hover:border-accent/50">
                  <div className="flex items-start justify-between gap-4">
                    <MissionPatch code={project.code} seed={p.coverImage.seed} />
                    <ProjectStatusPill status={project.status} />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-medium leading-snug tracking-tight text-ink">
                    <Link to={postPath(lang, p)} className="rounded after:absolute after:inset-0 after:rounded-2xl after:content-['']">
                      {p[lang].title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.brief[lang].outcome}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-accent-ink">
                    {t.projects.view}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </article>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}