import { skillGroups } from '../data/profile'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-base">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">Stack</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Tools I reach for
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06} className="bg-surface p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface2 px-3 py-1 text-sm text-ink/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
