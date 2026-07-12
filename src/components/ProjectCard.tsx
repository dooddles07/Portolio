import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../data/projects'
import Reveal from './Reveal'

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-signal/60">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
          {project.featured && (
            <span className="shrink-0 rounded-full border border-flow/40 bg-flow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-flow">
              Featured
            </span>
          )}
        </div>

        <p className="mt-3 text-sm font-medium text-muted">{project.summary}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted/80">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-surface2 px-2.5 py-1 font-mono text-[11px] text-silver/80">
              {t}
            </li>
          ))}
        </ul>

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
      </article>
    </Reveal>
  )
}
