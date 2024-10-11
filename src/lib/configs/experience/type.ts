import type { Dayjs } from "dayjs";

export type Skill =
  "NodeJS" | "TypeScript" | "PHP" |
  "ReactJS" |
  "NextJS" | "NestJS" | "ExpressJS" | "Fastify" | "GraphQL" |
  "PostgreSQL" | "MongoDB" | "RabbitMQ" |
  "Playwright" | "Vitest" |
  "GCP" | "Azure" |
  "GitHub Actions" | "GitLab CI/CD" |
  "PowerShell";

export type Experience = {
  date: {
    start: Dayjs;
    end: Dayjs | null;
  };
  dateFormat: {
    start: string;
    end: string;
  };
  duration: string;
  company: string;
  title: string;
  link: string | null;
  description: string[];
  skills: Skill[];
}

export type ExperienceBase = Omit<Experience, "duration" | "dateFormat">;