# Brixsonn Romero — Portfolio

React + Vite + TypeScript + Tailwind + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Add a project

Edit `src/data/projects.ts` and append an object to the `projects` array:

```ts
{
  name: 'Project Name',
  summary: 'One-line hook.',
  description: 'A couple sentences on what it does and your role.',
  tech: ['Tech', 'Stack'],
  liveUrl: 'https://...',   // optional
  repoUrl: 'https://...',   // optional
  featured: true,           // optional, shows a badge
}
```

Nothing else needs to change — the grid picks it up automatically.

## Edit profile content

Bio, roles, skills, education, honors, experience, and social links all live in
`src/data/profile.ts`.

## Swap resume / photo

Replace `public/resume.pdf` and `public/avatar.png` (keep the same filenames).

## Deploy to Railway

1. Push this repo to GitHub.
2. In Railway: New Project → Deploy from GitHub repo.
3. Railway auto-detects Node, runs `npm install` → `npm run build` → `npm start`
   (the `start` script serves the built `dist/` via `vite preview` on Railway's
   assigned `$PORT`). No extra config needed.

## Build

```bash
npm run build   # type-check + production build to dist/
npm run preview # serve the production build locally
```
