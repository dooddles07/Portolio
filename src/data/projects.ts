export type Project = {
  name: string
  summary: string
  description: string
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  academic?: boolean
}

/**
 * To add a project: append a new object to this array.
 * Only `name`, `summary`, `description`, and `tech` are required.
 */
export const projects: Project[] = [
  {
    name: 'The Lumina',
    summary: 'Three-role property-management platform for residents, management, and guardhouse.',
    description:
      'Full property operations system covering unit booking, guest QR check-in, parcel logging, and move-in/move-out workflows, with real Stripe-powered deposit payments across three distinct role dashboards.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Vanilla JS'],
    liveUrl: 'https://the-lumina-production.up.railway.app/',
    repoUrl: 'https://github.com/dooddles07/The-Lumina',
    featured: true,
  },
  {
    name: 'ResqYOU',
    summary: 'Real-time emergency response and locator system using Dijkstra’s Algorithm.',
    description:
      'Emergency response and live location-tracking system that computes shortest-path routing with Dijkstra’s Algorithm to connect responders with incidents faster.',
    tech: ['Full Stack', 'Dijkstra’s Algorithm', 'Real-Time Tracking'],
    academic: true,
  },
  {
    name: 'NagaMed',
    summary: 'Mobile healthcare app for clinic booking and nearby clinic discovery in Naga City.',
    description:
      'Healthcare booking platform that helps residents find and book nearby clinics, built with a data-analytics-driven approach to usage and scheduling patterns.',
    tech: ['Mobile', 'Data Analysis', 'Booking Systems'],
    academic: true,
  },
  {
    name: 'CYA FaithWear',
    summary: 'E-commerce merchandise platform for Christ’s Youth in Action, Ateneo de Naga University.',
    description:
      'Full-stack e-commerce platform offering faith-inspired apparel and products for the campus community, from catalog to checkout.',
    tech: ['Full Stack', 'E-Commerce'],
    academic: true,
  },
]
