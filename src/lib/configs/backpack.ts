export type BackpackSkill = {
  title: string;
  link: string;
};

export type BackpackCategory = {
  icon: string;
  iconSize: number;
  title: string;
  skills: BackpackSkill[];
};

// Everyday stack, when there is full freedom of choice:
export const backpackCategories: BackpackCategory[] = [
  {
    icon: "/bivouac/icons/computer.svg",
    iconSize: 44,
    title: "Front",
    skills: [
      { title: "React", link: "https://react.dev" },
      { title: "Vite", link: "https://vite.dev" },
      { title: "React Router", link: "https://reactrouter.com" },
      { title: "Tailwind", link: "https://tailwindcss.com" },
      { title: "Shadcn", link: "https://ui.shadcn.com" },
    ],
  },
  {
    icon: "/bivouac/icons/server.svg",
    iconSize: 34,
    title: "Back & données",
    skills: [
      { title: "NodeJS", link: "https://nodejs.org" },
      { title: "Fastify", link: "https://fastify.dev" },
      { title: "Prisma", link: "https://www.prisma.io" },
      { title: "Zod", link: "https://zod.dev" },
      { title: "PostgreSQL", link: "https://www.postgresql.org" },
      { title: "Redis", link: "https://redis.io" },
    ],
  },
  {
    icon: "/bivouac/icons/clipboard.svg",
    iconSize: 34,
    title: "Qualité & outillage",
    skills: [
      { title: "TypeScript", link: "https://www.typescriptlang.org" },
      { title: "Playwright", link: "https://playwright.dev" },
      { title: "ESLint", link: "https://eslint.org" },
      { title: "Pnpm", link: "https://pnpm.io" },
      { title: "VSCode", link: "https://code.visualstudio.com" },
      { title: "Notion", link: "https://www.notion.so" },
    ],
  },
];

// Every technology already used on the field:
export const otherSkills: BackpackSkill[] = [
  { title: "NextJS", link: "https://nextjs.org" },
  { title: "NestJS", link: "https://nestjs.com" },
  { title: "ExpressJS", link: "https://expressjs.com" },
  { title: "GraphQL", link: "https://graphql.org" },
  { title: "MongoDB", link: "https://www.mongodb.com" },
  { title: "RabbitMQ", link: "https://www.rabbitmq.com" },
  { title: "Vitest", link: "https://vitest.dev" },
  { title: "GCP", link: "https://cloud.google.com" },
  { title: "Azure", link: "https://azure.microsoft.com" },
  { title: "GitHub Actions", link: "https://github.com/features/actions" },
  { title: "GitLab CI/CD", link: "https://docs.gitlab.com/ee/ci" },
  { title: "PowerShell", link: "https://learn.microsoft.com/en-us/powershell" },
  { title: "Drizzle", link: "https://orm.drizzle.team" },
  { title: "Meilisearch", link: "https://www.meilisearch.com" },
  { title: "CSS", link: "https://developer.mozilla.org/fr/docs/Web/CSS" },
  { title: "SASS", link: "https://sass-lang.com" },
  { title: "Redux", link: "https://redux.js.org" },
  { title: "Vanilla Extract", link: "https://vanilla-extract.style" },
  { title: "Mantine", link: "https://mantine.dev" },
  { title: "NextUI", link: "https://nextui.org" },
  { title: "Radix", link: "https://www.radix-ui.com" },
  { title: "Zustand", link: "https://zustand.docs.pmnd.rs" },
  { title: "Testing Library", link: "https://testing-library.com" },
  { title: "Storybook", link: "https://storybook.js.org" },
  { title: "TanStack Query", link: "https://tanstack.com/query" },
  { title: "React Hook Form", link: "https://react-hook-form.com" },
  { title: "React Email", link: "https://react.email" },
  { title: "DayJS", link: "https://day.js.org" },
  { title: "Faker", link: "https://fakerjs.dev" },
  { title: "Jotai", link: "https://jotai.org" },
  { title: "Railway", link: "https://railway.app" },
  { title: "Cloudflare", link: "https://www.cloudflare.com" },
  { title: "MySQL", link: "https://www.mysql.com" },
  { title: "Temporal.io", link: "https://temporal.io" },
  { title: "TanStack Start", link: "https://tanstack.com/start" },
  { title: "TanStack Form", link: "https://tanstack.com/form" },
  { title: "Claude Code", link: "https://www.anthropic.com/claude-code" },
  { title: "T3 Code", link: "https://t3.codes" },
  { title: "OpenCode", link: "https://opencode.ai" },
  { title: "OpenRouter", link: "https://openrouter.ai" },
  { title: "Linear", link: "https://linear.app" },
  { title: "Git", link: "https://git-scm.com" },
  { title: "HTML", link: "https://developer.mozilla.org/fr/docs/Web/HTML" },
  { title: "JavaScript", link: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { title: "SQL", link: "https://developer.mozilla.org/fr/docs/Glossary/SQL" },
  { title: "Docker", link: "https://www.docker.com" },
  { title: "REST", link: "https://developer.mozilla.org/fr/docs/Glossary/REST" },
  { title: "WebSocket", link: "https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API" },
  { title: "Markdown", link: "https://www.markdownguide.org" },
  { title: "Regex", link: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions" },
];

// Number of technologies visible before expanding the list, from the design:
export const otherSkillsLimit = 20;
