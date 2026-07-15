import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">Track Record</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink">
            Where the work actually happened.
          </h2>
        </Reveal>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 space-y-10 border-l border-line pl-8 sm:pl-10"
        >
          {profile.experience.map((e) => (
            <motion.li key={e.org} variants={item} className="relative">
              <span className="absolute -left-[2.6rem] top-1 h-3 w-3 rounded-full border-2 border-flow bg-base sm:-left-[3.15rem]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-ink">{e.role}</h3>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-flow">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-signal">{e.org}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{e.detail}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
