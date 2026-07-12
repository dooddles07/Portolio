import { GraduationCap, Award, Briefcase } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-line bg-base">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">Credentials</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Education & experience
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-line bg-surface p-7">
            <GraduationCap className="text-signal" size={22} />
            <h3 className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Education
            </h3>
            {profile.education.map((e) => (
              <div key={e.degree} className="mt-3">
                <p className="font-display text-lg font-semibold text-ink">{e.degree}</p>
                <p className="mt-1 text-sm text-flow">{e.distinction}</p>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                <p className="text-sm text-muted">{e.period}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl border border-line bg-surface p-7">
            <Award className="text-signal" size={22} />
            <h3 className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Honors
            </h3>
            <ul className="mt-3 space-y-2">
              {profile.honors.map((h) => (
                <li key={h} className="text-sm leading-relaxed text-muted">
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="rounded-2xl border border-line bg-surface p-7">
            <Briefcase className="text-signal" size={22} />
            <h3 className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Experience
            </h3>
            {profile.experience.map((e) => (
              <div key={e.org} className="mt-3">
                <p className="font-display text-base font-semibold text-ink">{e.role}</p>
                <p className="mt-1 text-sm text-muted">{e.org}</p>
                <p className="text-sm text-muted">{e.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted/80">{e.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
