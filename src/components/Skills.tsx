import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'
import Reveal from './Reveal'

const chipList = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.03 },
  },
}

const chip = {
  hidden: { opacity: 0, scale: 0.92, y: 4 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
}

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
              <motion.ul
                variants={chipList}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={chip}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-line bg-surface2 px-3 py-1 text-sm text-ink/90 transition-colors hover:border-flow/50 hover:text-flow"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
