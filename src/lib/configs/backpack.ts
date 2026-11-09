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
      { title: "TanStack", link: "https://tanstack.com" },
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
      { title: "S3", link: "https://aws.amazon.com/s3" },
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
      { title: "OpenCode", link: "https://opencode.ai" },
    ],
  },
];

// Every technology already used on the field, roughly ordered by job-market demand:
export const otherSkills: BackpackSkill[] = [
  { title: "NextJS", link: "https://nextjs.org" },
  { title: "ExpressJS", link: "https://expressjs.com" },
  { title: "NestJS", link: "https://nestjs.com" },
  { title: "GraphQL", link: "https://graphql.org" },
  { title: "MongoDB", link: "https://www.mongodb.com" },
  { title: "MySQL", link: "https://www.mysql.com" },
  { title: "Redux", link: "https://redux.js.org" },
  { title: "Jest", link: "https://jestjs.io" },
  { title: "Docker", link: "https://www.docker.com" },
  { title: "GCP", link: "https://cloud.google.com" },
  { title: "Azure", link: "https://azure.microsoft.com" },
  { title: "GitHub", link: "https://github.com" },
  { title: "Git", link: "https://git-scm.com" },
  { title: "HTML", link: "https://developer.mozilla.org/fr/docs/Web/HTML" },
  { title: "CSS", link: "https://developer.mozilla.org/fr/docs/Web/CSS" },
  { title: "JavaScript", link: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { title: "SQL", link: "https://developer.mozilla.org/fr/docs/Glossary/SQL" },
  { title: "Testing Library", link: "https://testing-library.com" },
  { title: "Storybook", link: "https://storybook.js.org" },
  { title: "Sentry", link: "https://sentry.io" },
  { title: "SASS", link: "https://sass-lang.com" },
  { title: "GitHub Actions", link: "https://github.com/features/actions" },
  { title: "GitLab CI/CD", link: "https://docs.gitlab.com/ee/ci" },
  { title: "Stripe", link: "https://stripe.com" },
  { title: "Zustand", link: "https://zustand.docs.pmnd.rs" },
  { title: "React Hook Form", link: "https://react-hook-form.com" },
  { title: "Motion", link: "https://motion.dev" },
  { title: "WebSocket", link: "https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API" },
  { title: "Socket.io", link: "https://socket.io" },
  { title: "Vitest", link: "https://vitest.dev" },
  { title: "Hono", link: "https://hono.dev" },
  { title: "tRPC", link: "https://trpc.io" },
  { title: "Bun", link: "https://bun.sh" },
  { title: "SQLite", link: "https://www.sqlite.org" },
  { title: "Drizzle", link: "https://orm.drizzle.team" },
  { title: "Deno", link: "https://deno.com" },
  { title: "SWC", link: "https://swc.rs" },
  { title: "RabbitMQ", link: "https://www.rabbitmq.com" },
  { title: "Temporal", link: "https://temporal.io" },
  { title: "Meilisearch", link: "https://www.meilisearch.com" },
  { title: "OpenAPI", link: "https://www.openapis.org" },
  { title: "Cloudflare", link: "https://www.cloudflare.com" },
  { title: "Vercel", link: "https://vercel.com" },
  { title: "Railway", link: "https://railway.app" },
  { title: "Jotai", link: "https://jotai.org" },
  { title: "DayJS", link: "https://day.js.org" },
  { title: "Faker", link: "https://fakerjs.dev" },
  { title: "Recharts", link: "https://recharts.org" },
  { title: "Lucide", link: "https://lucide.dev" },
  { title: "Mantine", link: "https://mantine.dev" },
  { title: "Radix", link: "https://www.radix-ui.com" },
  { title: "React Aria", link: "https://react-spectrum.adobe.com/react-aria" },
  { title: "Base UI", link: "https://base-ui.com" },
  { title: "Ark UI", link: "https://ark-ui.com" },
  { title: "HeroUI", link: "https://heroui.com" },
  { title: "Vanilla Extract", link: "https://vanilla-extract.style" },
  { title: "PostCSS", link: "https://postcss.org" },
  { title: "React Email", link: "https://react.email" },
  { title: "Resend", link: "https://resend.com" },
  { title: "React PDF", link: "https://react-pdf.org" },
  { title: "Tiptap", link: "https://tiptap.dev" },
  { title: "Claude Code", link: "https://www.anthropic.com/claude-code" },
  { title: "T3 Code", link: "https://t3.codes" },
  { title: "OpenRouter", link: "https://openrouter.ai" },
  { title: "Linux", link: "https://www.linux.org" },
  { title: "Bash", link: "https://www.gnu.org/software/bash/" },
  { title: "PowerShell", link: "https://learn.microsoft.com/en-us/powershell" },
  { title: "Linear", link: "https://linear.app" },
  { title: "Todoist", link: "https://todoist.com" },
];

// Number of technologies visible before expanding the list, from the design:
export const otherSkillsLimit = 20;
