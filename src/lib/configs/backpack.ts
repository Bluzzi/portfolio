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

// Every technology already used on the field:
export const otherSkills: BackpackSkill[] = [
  { title: "NextJS", link: "https://nextjs.org" },
  { title: "NestJS", link: "https://nestjs.com" },
  { title: "ExpressJS", link: "https://expressjs.com" },
  { title: "Hono", link: "https://hono.dev" },
  { title: "Bun", link: "https://bun.sh" },
  { title: "Deno", link: "https://deno.com" },
  { title: "SWC", link: "https://swc.rs" },
  { title: "GraphQL", link: "https://graphql.org" },
  { title: "tRPC", link: "https://trpc.io" },
  { title: "MongoDB", link: "https://www.mongodb.com" },
  { title: "RabbitMQ", link: "https://www.rabbitmq.com" },
  { title: "Vitest", link: "https://vitest.dev" },
  { title: "Jest", link: "https://jestjs.io" },
  { title: "GCP", link: "https://cloud.google.com" },
  { title: "Azure", link: "https://azure.microsoft.com" },
  { title: "GitHub Actions", link: "https://github.com/features/actions" },
  { title: "GitLab CI/CD", link: "https://docs.gitlab.com/ee/ci" },
  { title: "PowerShell", link: "https://learn.microsoft.com/en-us/powershell" },
  { title: "Linux", link: "https://www.linux.org" },
  { title: "Bash", link: "https://www.gnu.org/software/bash/" },
  { title: "Drizzle", link: "https://orm.drizzle.team" },
  { title: "Meilisearch", link: "https://www.meilisearch.com" },
  { title: "CSS", link: "https://developer.mozilla.org/fr/docs/Web/CSS" },
  { title: "SASS", link: "https://sass-lang.com" },
  { title: "PostCSS", link: "https://postcss.org" },
  { title: "Redux", link: "https://redux.js.org" },
  { title: "Vanilla Extract", link: "https://vanilla-extract.style" },
  { title: "Mantine", link: "https://mantine.dev" },
  { title: "HeroUI", link: "https://heroui.com" },
  { title: "Radix", link: "https://www.radix-ui.com" },
  { title: "Base UI", link: "https://base-ui.com" },
  { title: "React Aria", link: "https://react-spectrum.adobe.com/react-aria" },
  { title: "Ark UI", link: "https://ark-ui.com" },
  { title: "Lucide", link: "https://lucide.dev" },
  { title: "Zustand", link: "https://zustand.docs.pmnd.rs" },
  { title: "Testing Library", link: "https://testing-library.com" },
  { title: "Storybook", link: "https://storybook.js.org" },
  { title: "Sentry", link: "https://sentry.io" },
  { title: "Recharts", link: "https://recharts.org" },
  { title: "React Hook Form", link: "https://react-hook-form.com" },
  { title: "React Email", link: "https://react.email" },
  { title: "Tiptap", link: "https://tiptap.dev" },
  { title: "React PDF", link: "https://react-pdf.org" },
  { title: "Resend", link: "https://resend.com" },
  { title: "DayJS", link: "https://day.js.org" },
  { title: "Faker", link: "https://fakerjs.dev" },
  { title: "Jotai", link: "https://jotai.org" },
  { title: "Railway", link: "https://railway.app" },
  { title: "Cloudflare", link: "https://www.cloudflare.com" },
  { title: "Vercel", link: "https://vercel.com" },
  { title: "Stripe", link: "https://stripe.com" },
  { title: "MySQL", link: "https://www.mysql.com" },
  { title: "SQLite", link: "https://www.sqlite.org" },
  { title: "Temporal", link: "https://temporal.io" },
  { title: "Claude Code", link: "https://www.anthropic.com/claude-code" },
  { title: "T3 Code", link: "https://t3.codes" },
  { title: "OpenRouter", link: "https://openrouter.ai" },
  { title: "Linear", link: "https://linear.app" },
  { title: "Todoist", link: "https://todoist.com" },
  { title: "Git", link: "https://git-scm.com" },
  { title: "GitHub", link: "https://github.com" },
  { title: "HTML", link: "https://developer.mozilla.org/fr/docs/Web/HTML" },
  { title: "JavaScript", link: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { title: "SQL", link: "https://developer.mozilla.org/fr/docs/Glossary/SQL" },
  { title: "Docker", link: "https://www.docker.com" },
  { title: "OpenAPI", link: "https://www.openapis.org" },
  { title: "WebSocket", link: "https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API" },
  { title: "Socket.io", link: "https://socket.io" },
];

// Number of technologies visible before expanding the list, from the design:
export const otherSkillsLimit = 20;
