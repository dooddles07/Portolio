import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Page-level "signal in the pipe": a thin gradient line that fills
 * as you travel the page, same motif as the hero's flow spine.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-signal via-flow to-signal"
    />
  )
}
