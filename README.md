# INDRARAJ_THAKUR // PORTFOLIO_v3.0

A dark, gamified "RPG terminal" developer portfolio. The visitor is `System_User`, I'm the player character, and every section is a piece of the HUD: skills are loot cards, experience is a quest log, projects are mini browser windows.

> `// SYSTEM_BOOT :: PORTFOLIO_v3.0 :: READY`

## Features

- **HUD layout:** sticky top bar with level chip, XP bar and contact links, plus fixed side rails on large screens.
- **Hero:** boot-line typing effect, current mission, holographic quick-stats panel (location and education), player card with animated stat counters, and a glowing resume download button.
- **Skill Deck:** rarity-tagged skill cards (GOLD / SILVER / BRONZE) with segmented power bars.
- **Quest Log:** a Core Systems Engineering quest (C++ and OOP) plus an experience timeline.
- **Projects:** a StudyFlow "Main Quest" card, filterable project cards styled as browser windows, and a detail page for each project.
- **Achievements, GitHub activity and contact:** trophy cards, a live contribution graph, a repository list and a contact form.
- **Pages:** Home, About, Experience, Projects, Blog.
- **Accessible and responsive:** semantic landmarks, skip link, visible focus rings, keyboard-navigable menu, `prefers-reduced-motion` support, and layouts that stack on mobile.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion (reveals, counters, XP bars), pure CSS (glitch, scanlines, glow) |
| Icons | lucide-react, inline SVG |

Gamified decoration is pure CSS and SVG. There is no 3D and no heavy image assets.

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Run TypeScript without emitting files |

## Project structure

```
app/
  layout.tsx            Root layout: skip link, rails, top bar, footer
  page.tsx              Home page
  about/                About page
  experience/           Experience page
  projects/             Projects list and [slug] detail pages
  blog/                 Blog list and [slug] post pages
  globals.css           Grid, scanlines, grain, panels, glitch, neon effects
components/             Hero, TopBar, SkillDeck, QuestLog, ProjectGrid, Achievements, SourceCode, Contact, ...
lib/data.ts             All site content (see below)
public/resume.pdf       Downloadable CV
```

## Editing the content

Everything on the site comes from one file: `lib/data.ts`.

- `profile`: name, role, class title, level and XP, email, location, education, hero stats
- `socials`: GitHub, LinkedIn, X, Instagram, email
- `skills`: name, power score (0-100) and a one-line description. Rarity is derived from the score.
- `quests` and `coreQuest`: experience timeline and the Core Systems Engineering quest
- `projects`: add a project and it appears in the grid and gets its own detail page. Set `featured: true` to make it the Main Quest card. Leave out `live` if there is no demo yet.
- `achievements` and `posts`

To change the resume, replace `public/resume.pdf`.

## Notes

- **Contact form:** there is no backend yet. Submitting opens the visitor's email app with the message prefilled. To send mail directly, add a route handler or an email service.
- **Contribution graph:** loaded from [ghchart.rshah.org](https://ghchart.rshah.org) using the GitHub username set in `lib/data.ts`.
- **Blog:** empty by default. Add entries to `posts` in `lib/data.ts` and they show up automatically.

## Deploy

The easiest route is [Vercel](https://vercel.com):

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings and deploy.

## Author

**Indraraj Thakur** · [GitHub](https://github.com/Indrajthakur) · [LinkedIn](https://www.linkedin.com/in/indraraj-thakurr-2a590a3b1) · [X](https://x.com/RThakur79501)
