import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Behind the interface, someone has to build the system.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="space-y-5">
          {profile.bio.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
