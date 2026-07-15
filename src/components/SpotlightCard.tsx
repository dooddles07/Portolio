import { motion } from 'framer-motion'
import { useRef, type MouseEvent, type ReactNode } from 'react'

/**
 * Card surface with a cursor-tracking sheen (CSS vars consumed by
 * .spotlight-card::before) and a soft spring lift on hover.
 */
export default function SpotlightCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`spotlight-card ${className}`}
    >
      {children}
    </motion.article>
  )
}
