import { Github, Linkedin, Facebook, Mail, ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const iconMap = { github: Github, linkedin: Linkedin, facebook: Facebook, mail: Mail }

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <p className="eyebrow mb-4 justify-center">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let's build something that runs itself.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to roles and projects in automation, integrations, and full-stack engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-[#0A0912] transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-flow hover:text-flow"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            {profile.socials
              .filter((s) => s.icon !== 'mail')
              .map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap]
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-flow"
                  >
                    <Icon size={20} />
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                )
              })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
