# INDRARAJ_THAKUR // PORTFOLIO_v3.0

Dark RPG-terminal portfolio. Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

All copy and numbers live in `lib/data.ts`: profile, stats, skills, experience, projects, achievements and social links.

## Still to do

- Add your CV at `public/resume.pdf` (the DOWNLOAD_CV button links to it).
- Contact form has no backend: it opens the visitor's mail client with the message prefilled.
- Blog is empty. Add entries to `posts` in `lib/data.ts` when you have something to write.
- The contribution chart comes from ghchart.rshah.org; replace it with the GitHub API if you want full control.
