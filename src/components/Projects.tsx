import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">Work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Selected projects
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
