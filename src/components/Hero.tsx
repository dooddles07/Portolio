import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/profile'
import FlowCanvas from './FlowCanvas'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid bg-[size:44px_44px]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-flow/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-32 md:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-muted"
          >
            I design and ship the automation, integrations, and full-stack systems that keep
            businesses running quietly in the background.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              View Work <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-flow hover:text-flow"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>
        </div>

        <div className="flex items-center">
          <FlowCanvas />
        </div>
      </div>
    </section>
  )
}
