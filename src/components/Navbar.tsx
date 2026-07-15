import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'What I Do' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-base/85 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Brixsonn Romero, home" className="shrink-0">
          <img src="/quantum.png" alt="Quantum" className="h-4 w-auto sm:h-5" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-flow ${
                    isActive ? 'text-flow' : 'text-muted'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-flow"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-signal hover:text-signal md:flex"
        >
          <Download size={14} /> Resume
        </a>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-base px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm uppercase tracking-[0.15em] hover:text-flow ${
                    active === l.href.slice(1) ? 'text-flow' : 'text-muted'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-signal"
              >
                <Download size={14} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
