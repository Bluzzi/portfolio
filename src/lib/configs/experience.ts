import type { Dayjs } from "dayjs";
import { date, humanizeDateDiff } from "#/lib/utils/date";

export type Experience = {
  date: {
    start: Dayjs;
    end: Dayjs | null;
  };
  duration: string;
  company: string;
  title: string;
  icon: string;
  iconSize: number;
  description: string;
  skills: string[];
};

export type ExperienceBase = Omit<Experience, "duration">;

export const populateExperience = (experienceBase: ExperienceBase[]): Experience[] => {
  const populated = experienceBase.map((exp) => {
    return {
      ...exp,
      duration: exp.date.end === null ? "en cours" : humanizeDateDiff(exp.date.start, exp.date.end),
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
  {
    company: "Melcad",
    title: "Fondateur & indépendant",
    date: {
      start: date(1, 8, 2025),
      end: null,
    },
    icon: "/bivouac/icons/tent.svg",
    iconSize: 36,
    description: "Je construis aujourd'hui Melcad, un SaaS web / PWA qui simplifie l'hygiène alimentaire et la gestion des restaurants en France. Seul aux commandes, je porte tout : la vision produit, le design des interfaces et l'ensemble du code.",
    skills: ["SaaS", "PWA", "Lancement en cours"],
  },
  {
    company: "Seedext",
    title: "Co-fondateur & CTO",
    date: {
      start: date(20, 2, 2023),
      end: date(31, 7, 2025),
    },
    icon: "/bivouac/icons/robot.svg",
    iconSize: 32,
    description: "J'ai cofondé Seedext et construit sa plateforme de bout en bout : web app, application Microsoft Teams et panel admin, avec un niveau de sécurité à la hauteur des clients grands comptes. J'ai piloté les briques IA (speech-to-text, diarization, LLM) et conçu des bots capables d'enregistrer les réunions sur Meet, Teams, Zoom et Webex, orchestrés par un micro-service RabbitMQ au sein d'un monorepo. En parallèle, j'ai recruté et fait grandir l'équipe technique.",
    skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Fastify", "Playwright", "Vitest", "PostgreSQL", "RabbitMQ", "GCP", "Azure", "GitHub Actions"],
  },
  {
    company: "Pelico",
    title: "Ingénieur QA",
    date: {
      start: date(3, 5, 2023),
      end: date(10, 5, 2024),
    },
    icon: "/bivouac/icons/clipboard.svg",
    iconSize: 32,
    description: "Chez Pelico, j'ai posé les fondations de la qualité : architecture complète des environnements de test, plus de 500 tests end-to-end écrits et maintenus avec Playwright, une pipeline GitLab CI rapide et une documentation claire, pour que l'équipe puisse livrer en confiance.",
    skills: ["Playwright", "TypeScript", "ReactJS", "GraphQL", "GitLab CI/CD", "PowerShell"],
  },
  {
    company: "Okosmo",
    title: "Développeur full-stack",
    date: {
      start: date(11, 7, 2022),
      end: date(18, 1, 2023),
    },
    icon: "/bivouac/icons/tooth.svg",
    iconSize: 32,
    description: "J'ai développé un site e-commerce dédié aux professionnels de la santé bucco-dentaire : synchronisation automatique des produits des plateformes partenaires vers MongoDB, dashboard pour les distributeurs et API REST, avec une intégration et un déploiement continus entièrement automatisés sur Google Cloud.",
    skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Vitest", "Playwright", "ExpressJS", "MongoDB", "GCP", "GitHub Actions"],
  },
  {
    company: "Symphonia",
    title: "Développeur full-stack",
    date: {
      start: date(16, 5, 2016),
      end: date(30, 4, 2022),
    },
    icon: "/bivouac/icons/console.svg",
    iconSize: 38,
    description: "Pendant près de six ans, j'ai conçu les serveurs de jeux qui accueillaient des milliers de joueurs chaque jour, et fait évoluer l'architecture jusqu'à encaisser des dizaines de milliers de requêtes par seconde. J'y ai aussi mis en place la synchronisation des données via RabbitMQ, développé une API REST en NestJS et PostgreSQL, et construit le panel d'administration en React.",
    skills: ["NodeJS", "TypeScript", "PHP", "PostgreSQL", "NestJS", "ReactJS", "RabbitMQ"],
  },
];

export const experiences = populateExperience(experienceBase);
