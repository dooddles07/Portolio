import { motion } from 'framer-motion'
import { profile } from '../data/profile'

/**
 * Signature hero element: a vertical signal spine with his actual role
 * titles as nodes, a literal read of "automation pipeline engineer",
 * not a decorative graphic.
 */
export default function FlowCanvas() {
  const roles = profile.roles

  return (
    <div className="relative pl-10">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true">
        <motion.div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-transparent via-flow to-transparent"
          style={{ height: '28%' }}
          animate={{ top: ['-10%', '100%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <ul className="space-y-5">
        {roles.map((role, i) => (
          <motion.li
            key={role}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.5, ease: 'easeOut' }}
            className="relative flex items-center gap-3"
          >
            <span
              className="absolute -left-10 h-[15px] w-[15px] rounded-full border-2 border-signal bg-base animate-pulseline"
              style={{ animationDelay: `${i * 0.3}s` }}
              aria-hidden="true"
            />
            <span className="font-mono text-sm text-ink/90 tracking-tight">{role}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
