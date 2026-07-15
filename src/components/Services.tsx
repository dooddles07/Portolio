import { Workflow, Layers, Plug } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'

const iconMap = { workflow: Workflow, layers: Layers, plug: Plug }

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-base">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">What I Do</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink">
            Three ways I turn ideas into systems that ship.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {profile.specialties.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap]
            return (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <SpotlightCard className="group h-full rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-signal/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface2 text-signal transition-colors group-hover:border-signal/50">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
