import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../data/projects'
import Reveal from './Reveal'

function Tag({ project }: { project: Project }) {
  if (project.featured)
    return (
      <span className="shrink-0 rounded-full border border-flow/40 bg-flow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-flow">
        Featured
      </span>
    )
  if (project.academic)
    return (
      <span className="shrink-0 rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
        Academic
      </span>
    )
  return null
}

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null
  return (
    <div className="mt-6 flex items-center gap-5 border-t border-line pt-5">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-signal hover:text-ink"
        >
          Live <ArrowUpRight size={14} />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink"
        >
          <Github size={14} /> Repo
        </a>
      )}
    </div>
  )
}

function TechList({ project }: { project: Project }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <li
          key={t}
          className="rounded-full bg-surface2 px-2.5 py-1 font-mono text-[11px] text-silver/80"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  if (project.featured) {
    return (
      <Reveal delay={delay} className="sm:col-span-2">
        <article className="group relative overflow-hidden rounded-2xl border border-signal/30 bg-surface p-8 transition-colors hover:border-signal/60">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Tag project={project} />
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{project.name}</h3>
              <p className="mt-2 text-sm font-medium text-flow">{project.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
              <Links project={project} />
            </div>
            <div className="md:pl-2">
              <TechList project={project} />
            </div>
          </div>
        </article>
      </Reveal>
    )
  }

  return (
    <Reveal delay={delay}>
      <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-signal/60">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
          <Tag project={project} />
        </div>

        <p className="mt-3 text-sm font-medium text-muted">{project.summary}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted/80">{project.description}</p>

        <TechList project={project} />
        <Links project={project} />
      </article>
    </Reveal>
  )
}
