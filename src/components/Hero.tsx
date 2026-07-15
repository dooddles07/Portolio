import { motion } from 'framer-motion'
import { ArrowUpRight, Download, ChevronDown } from 'lucide-react'
import { profile } from '../data/profile'
import FlowCanvas from './FlowCanvas'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-grid bg-[size:44px_44px]"
    >
      {/* Funnel glows: wide at top, converging toward the CTA below */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-flow/10 blur-[120px]" />

      {/* Converging funnel guide-lines that narrow the eye from the edges to the CTA */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="0" x2="42%" y2="100%" stroke="#9B6BFF" strokeWidth="1" />
        <line x1="100%" y1="0" x2="58%" y2="100%" stroke="#3ED6C4" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 pb-28 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            {profile.openToWork && (
              <span className="inline-flex items-center gap-2 rounded-full border border-flow/40 bg-flow/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-flow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flow opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-flow" />
                </span>
                Open to Work
              </span>
            )}
            <span className="eyebrow">
              {profile.name} · {profile.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            I turn manual busywork into{' '}
            <span className="text-gradient-animate">systems that run themselves.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            AI-assisted full-stack web development, CRM and workflow automation, and live
            integrations (Stripe, ElevenLabs, WhatsApp, Meta), then secured and tested so they keep
            running.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-mono text-sm font-medium text-[#0A0912] shadow-[0_0_0_0_rgba(155,107,255,0.5)] transition-shadow hover:shadow-[0_10px_30px_-8px_rgba(155,107,255,0.6)]"
            >
              See what I've shipped <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-sm text-ink transition-colors hover:border-flow hover:text-flow"
            >
              <Download size={16} /> Download CV
            </motion.a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-xl font-semibold text-ink">{s.value}</dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="flex items-center">
          <FlowCanvas />
        </div>
      </div>

      {/* Scroll cue: funnels the eye into the rest of the page */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted transition-colors hover:text-flow sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
