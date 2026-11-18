/**
 * ALL SITE CONTENT LIVES HERE.
 *
 * Real details supplied by Indraraj. Lines marked TODO are assumptions to confirm.
 */

export type Rarity = "GOLD" | "SILVER" | "BRONZE";
export type Category = "Web App" | "UI-UX" | "Open Source";

export const githubUser = "Indrajthakur";

export const profile = {
  name: "Indraraj Thakur",
  handle: "Indraraj_Thakur",
  role: "Code Architect ⚡",
  classTitle: "Code Alchemist",
  level: 7, // game flavour: one level per month of experience
  xp: 3420, // game flavour
  xpMax: 5000,
  heroLine: "I build things that work — and I actually enjoy the parts everyone else skips.",
  mission:
    "Building modern web applications, levelling up my frontend skills, and learning how to ship responsive sites with real-world features.",
  email: "indrajthakur08@gmail.com", // TODO: confirm (earlier form said indrajt654@gmail.com)
  location: "Rehli, Sagar",
  education: "B.Tech CS · RGPV",
  stats: {
    months: 7,
    projects: 5,
    xp: 3420,
    internships: 0,
    streak: 26,
  },
};

export const socials = [
  { name: "GitHub", href: `https://github.com/${githubUser}`, icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/indraraj-thakurr-2a590a3b1", icon: "linkedin" },
  { name: "X", href: "https://x.com/RThakur79501", icon: "x" },
  { name: "Instagram", href: "https://www.instagram.com/mr.indrajj", icon: "instagram" },
  { name: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export const skills: { name: string; pwr: number; blurb: string }[] = [
  { name: "Responsive Web Design", pwr: 80, blurb: "Layouts that survive phones, tablets and that one weird laptop." },
  { name: "HTML", pwr: 76, blurb: "Semantic structure first. Div soup is a last resort." },
  { name: "CSS", pwr: 75, blurb: "Flexbox, grid and a healthy respect for specificity." },
  { name: "Git & GitHub", pwr: 75, blurb: "Version control for every project, including the embarrassing early ones." },
  { name: "JavaScript", pwr: 65, blurb: "Powers the task logic, filters and search. Getting sharper every week." },
  { name: "Supabase", pwr: 20, blurb: "Freshly unlocked. Wired a real backend into the Task Manager." },
  { name: "Vercel Deployment", pwr: 20, blurb: "Shipped live, and debugged the deploys that fought back." },
];

export function rarityOf(pwr: number): Rarity {
  return pwr >= 75 ? "GOLD" : pwr >= 60 ? "SILVER" : "BRONZE";
}

export type Quest = {
  state: "ACTIVE" | "COMPLETED";
  xp: number;
  dates: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
};

export const quests: Quest[] = [
  {
    state: "ACTIVE",
    xp: 2000,
    dates: "PRESENT",
    role: "Personal Projects / Self-Learning Developer",
    company: "Independent",
    bullets: [
      "Built a task management app with a dashboard and task organisation features.",
      "Implemented creating, updating, deleting, completing, filtering and searching tasks.",
      "Worked on frontend modularisation, Supabase integration, GitHub version control and deployment troubleshooting.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Supabase", "Vercel"],
  },
];

// TODO: replace the generic bullets with the specific algorithms, data structures and mini-projects you've actually built.
export const coreQuest = {
  title: "CORE_SYSTEMS_ENGINEERING",
  xp: 1200,
  summary: "The fundamentals under the frameworks: C++ and object-oriented programming, built around real problem solving.",
  branches: [
    {
      name: "C++ & OOP",
      text: "Designs programs around classes, inheritance, polymorphism, encapsulation and abstraction instead of one giant main().",
    },
    {
      name: "Algorithms & Data Structures",
      text: "Works through data structures such as arrays, linked lists, stacks, queues and trees, and the searching, sorting and recursive algorithms that run on them.",
    },
    {
      name: "System-level Mini-Projects",
      text: "Builds small C++ programs that get close to the machine: memory, files and program flow.",
    },
  ],
  tags: ["C++", "OOP", "Data Structures", "Algorithms"],
};

export type Project = {
  slug: string;
  name: string;
  domain: string;
  live?: string;
  repo: string;
  pitch: string;
  category: Category;
  tags: string[];
  story: string[];
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "studyflow",
    name: "StudyFlow",
    domain: "github.com/Indrajthakur/StudyFlow",
    // TODO: add `live: "https://..."` once you have the StudyFlow demo URL.
    repo: "https://github.com/Indrajthakur/StudyFlow", // TODO: confirm repo URL
    pitch: "Academic task planner tailored for RGPV syllabus tracking.",
    category: "Web App",
    tags: ["Next.js", "Node.js", "Tailwind"],
    story: [
      "A task planner built for students on the RGPV syllabus, so tracking what's covered and what's left stops living in a notebook.",
      "Built with Next.js, Node.js and Tailwind CSS.",
    ],
    highlights: ["Built around the RGPV syllabus", "Academic task planning"],
    featured: true,
  },
  {
    slug: "task-manager",
    name: "Task_Manager",
    domain: "task-manager-ax4n0fhoe-amra8.vercel.app/",
    live: "https://task-manager-ax4n0fhoe-amra8.vercel.app/",
    repo: "https://github.com/Indrajthakur/Task-manager-app",
    pitch: "A modern task management dashboard designed to help users organize tasks, track priorities, and manage productivity.",
    category: "Web App",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    story: [
      "A task manager with a dashboard view. You can create, update, delete and complete tasks, then filter and search through them.",
      "Built with plain HTML, CSS and JavaScript, connected to Supabase, version-controlled on GitHub and deployed on Vercel.",
    ],
    highlights: ["Create, update, delete and complete tasks", "Filtering and search", "Supabase integration"],
  },
  {
    slug: "developer-portfolio",
    name: "Developer_Portfolio",
    domain: "indrajthakur.github.io/indraj-portfolio/",
    live: "https://indrajthakur.github.io/indraj-portfolio/",
    repo: "https://github.com/Indrajthakur/indraj-portfolio",
    pitch: "A personal developer portfolio showcasing my skills, projects, and coding journey.",
    category: "UI-UX",
    tags: ["HTML", "CSS", "JavaScript"],
    story: [
      "My first portfolio: a personal site that shows off my skills, my projects and my coding journey.",
      "Built with HTML, CSS and JavaScript and hosted on GitHub Pages.",
    ],
    highlights: ["Skills and projects showcase", "Hosted on GitHub Pages"],
  },
  {
    slug: "github-snake-animation",
    name: "GitHub_Snake",
    domain: "github.com/Indrajthakur/Indrajthakur",
    live: "https://github.com/Indrajthakur/Indrajthakur",
    repo: "https://github.com/Indrajthakur",
    pitch: "An animated contribution snake visualizing GitHub contribution activity.",
    category: "Open Source",
    tags: ["GitHub Actions", "SVG"],
    story: [
      "An animated snake that eats its way through my GitHub contribution graph, generated automatically with GitHub Actions.",
      "It lives on my GitHub profile README.",
    ],
    highlights: ["Automated with GitHub Actions", "Pure SVG output"],
  },
  {
    slug: "cravora",
    name: "Cravora",
    domain: "cravora-inky.vercel.app/",
    live: "https://cravora-inky.vercel.app/",
    repo: "https://github.com/Indrajthakur/Cravora",
    pitch: "A modern food discovery website designed to help users explore restaurants, discover delicious food, and enjoy a visually engaging browsing experience.",
    category: "Web App",
    tags: ["HTML", "CSS", "JavaScript"],
    story: [
      "A food discovery website for exploring restaurants and finding something delicious, with a visual-first browsing experience.",
      "Built with HTML, CSS and JavaScript and deployed live on Vercel.",
    ],
    highlights: ["Visual-first browsing", "Live on Vercel"],
  },
];

export const achievements = [
  { badge: "01", title: "Task Manager Shipped", line: "Built and maintains a personal task manager web app.", link: "View Project →", href: "/projects/task-manager", year: "2026" },
  { badge: "GIT", title: "Version Control Habit", line: "Creates and manages projects with Git and GitHub.", link: "GitHub →", href: `https://github.com/${githubUser}`, year: "2026" },
  { badge: "DB", title: "Backend Unlocked", line: "Connected a frontend project to Supabase.", link: "View Project →", href: "/projects/task-manager", year: "2026" },
  { badge: "▲", title: "Deploy Debugger", line: "Configured and troubleshot deployments on Vercel.", link: "View Project →", href: "/projects/task-manager", year: "2026" },
];

export const posts: { slug: string; title: string; date: string; read: string; excerpt: string; body: string[] }[] = [];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];
