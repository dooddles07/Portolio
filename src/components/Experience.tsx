import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
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

const dot = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
}

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.85', 'end 0.45'],
  })

  return (
    <section id="experience" className="relative border-t border-line bg-surface">
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-4">Track Record</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink">
            Where the work actually happened.
          </h2>
        </Reveal>

        <motion.ol
          ref={listRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-14 space-y-10"
        >
          {/* The pipe: static track plus a signal line that draws with scroll */}
          <span aria-hidden="true" className="absolute bottom-1 left-0 top-1 w-px bg-line" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-1 left-0 top-1 w-px origin-top bg-gradient-to-b from-signal to-flow"
          />

          {profile.experience.map((e) => (
            <motion.li key={e.org} variants={item} className="relative pl-8 sm:pl-10">
              <motion.span
                variants={dot}
                className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-flow bg-base"
              />
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
