import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.15em] transition-colors hover:text-flow"
        >
          <ArrowUp size={13} /> Back to top
        </a>
        <p className="font-mono">Built with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  )
}
