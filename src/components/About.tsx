import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink">
            Behind the interface, someone has to build the system.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.1}>
            <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
          </Reveal>

          <div className="space-y-5">
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-base leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
