import type { Dayjs } from "dayjs";
import { date, humanizeDateDiff } from "#/lib/utils/date";
import { dayJS } from "#/lib/utils/day-js";

export type Skill
  = "NodeJS" | "TypeScript" | "PHP"
    | "ReactJS"
    | "NextJS" | "NestJS" | "ExpressJS" | "Fastify" | "GraphQL"
    | "PostgreSQL" | "MongoDB" | "RabbitMQ"
    | "Playwright" | "Vitest"
    | "GCP" | "Azure"
    | "GitHub Actions" | "GitLab CI/CD"
    | "PowerShell";

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
};

export type ExperienceBase = Omit<Experience, "duration" | "dateFormat">;

export const populateExperience = (experienceBase: ExperienceBase[]): Experience[] => {
  const populated = experienceBase.map((exp) => {
    const dateFormat = {
      start: exp.date.start.format("DD/MM/YYYY"),
      end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent",
    };

    return {
      ...exp,
      duration: humanizeDateDiff(exp.date.start, exp.date.end ?? dayJS()),
      dateFormat,
    };
  });

  populated.sort((a, b) => {
    // Check if either experience is ongoing (end date is null) and prioritize it:
    if (a.date.end === null && b.date.end === null) {
      // Compare start dates to find the more recent one:
      if (a.date.start.isAfter(b.date.start)) return -1;
      if (b.date.start.isAfter(a.date.start)) return 1;
      return 0;
    }

    if (a.date.end === null) return -1;
    if (b.date.end === null) return 1;

    // Compare end dates to determine which is more recent:
    if (a.date.end.isAfter(b.date.end)) return -1;
    if (b.date.end.isAfter(a.date.end)) return 1;

    // If end dates are the same, compare start dates to find the more recent one:
    if (a.date.start.isAfter(b.date.start)) return -1;
    if (b.date.start.isAfter(a.date.start)) return 1;

    // Keep original order if both start and end dates are identical:
    return 0;
  });

  return populated;
};

const experienceBase: ExperienceBase[] = [
  // {
  //   company: "Melcad",
  //   title: "Co-Fondateur & CTO",
  //   link: "https://melcad.com",
  //   date: {
  //     start: date(1, 8, 2025),
  //     end: null,
  //   },
  //   description: [
  //     "Création d'une webapp proposant divers modules de gestion à destination des commerces et restaurants",
  //     "... en cours !",
  //   ],
  //   skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Fastify", "Playwright", "Vitest", "PostgreSQL", "GCP", "GitHub Actions"],
  // },
  {
    company: "Pelico",
    title: "Ingénieur QA",
    link: "https://www.pelico.ai",
    date: {
      start: date(3, 5, 2023),
      end: date(10, 5, 2024),
    },
    description: [
      "Écriture et maintenance de plus de 500 tests end-to-end de la webapp avec Playwright",
      "Création de l'architecture de l'environnement de test pour optimiser l'efficacité de l'équipe QA",
      "Mise en place d'une CI GitLab efficace pour une exécution ultra-rapide des tests",
      "Amélioration de l'accessibilité et détection de bugs sur la webapp lors de l'automatisation des nouveaux tests",
      "Écriture de documentation complète sur tout l'environnement de test pour l'équipe QA",
    ],
    skills: ["Playwright", "TypeScript", "ReactJS", "GraphQL", "GitLab CI/CD", "PowerShell"],
  },
  {
    company: "Seedext",
    title: "Co-Fondateur & CTO",
    link: "https://www.seedext.com",
    date: {
      start: date(20, 2, 2023),
      end: date(31, 7, 2025),
    },
    description: [
      "Sécurisation des services pour répondre aux exigences rigoureuses des grands comptes", // TODO: ", notamment AXA, SNCF, et La Poste" ?
      "Supervision du développement d'une webapp, d'une application Microsoft Teams ainsi que d'un panel admin",
      "Gestion de projets en intelligence artificielle, incluant Speech to Text, Diarization et LLM",
      "Définition et priorisation de la roadmap produit et des spécifications techniques qui lui sont associées",
      "Automatisation complète de l'enregistrement de réunions sur Google Meet, Teams, Zoom et Webex via le développement de bots",
      "Leadership sur le recrutement, l'onboarding et le management d'une équipe technique",
      "Scaling du processus de traitement des réunions (optimisation du fichier, transcription et synthétisation) via un micro-service utilisant RabbitMQ",
      "Mise en place d'un monorepo pour améliorer l'efficacité des processus de développement et la collaboration en équipe",
    ],
    skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Fastify", "Playwright", "Vitest", "PostgreSQL", "RabbitMQ", "GCP", "Azure", "GitHub Actions"],
  },
  {
    company: "Okosmo",
    title: "Développeur Full-Stack",
    link: "https://okosmo.io",
    date: {
      start: date(11, 7, 2022),
      end: date(18, 1, 2023),
    },
    description: [
      "Développement d'un site e-commerce spécialisé pour les professionnels de la santé bucco-dentaire",
      "Implémentation d'un système de synchronisation des produits des partenaires (depuis Shopify, PrestaShop, etc) avec la BDD MongoDB",
      "Création et développement d'un dashboard pour les distributeurs partenaires utilisant ReactJS et NextJS",
      "Évolution d'une API REST avec le framework ExpressJS et la BDD MongoDB",
      "Automatisation complète des cycles de CI/CD et qualité de code, assurant la continuité et l'efficacité des déploiements sur Google Cloud Platform",
    ],
    skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Vitest", "Playwright", "ExpressJS", "MongoDB", "GCP", "GitHub Actions"],
  },
  {
    company: "Symphonia",
    title: "Développeur Full-Stack",
    link: "https://github.com/Symphonia-Team",
    date: {
      start: date(16, 5, 2016),
      end: date(30, 4, 2022),
    },
    description: [
      "Conception de serveurs de jeux vidéo, accueillant quotidiennement des milliers de joueurs",
      "Implémentation d'un serveur RabbitMQ qui garantit la synchronisation des données entre les serveurs",
      "Développement d'un backend (API REST) utilisant le framework NestJS et la BDD PostgreSQL",
      "Scaling de l'architecture pour pouvoir supporter des dizaines de milliers de requêtes par seconde",
      "Construction d'un panel admin proposant divers outils de gestion pour l'équipe interne à l'aide de ReactJS",
    ],
    skills: ["NodeJS", "TypeScript", "PHP", "PostgreSQL", "NestJS", "ReactJS", "RabbitMQ"],
  },
];

export const experiences = populateExperience(experienceBase);
