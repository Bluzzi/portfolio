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

  // Original bullet points, kept for reference even if they are not displayed:
  points: string[];

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
    points: [
      "Création d'une webapp proposant divers modules de gestion à destination des commerces et restaurants",
      "... en cours !",
    ],
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
    points: [
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
    company: "Pelico",
    title: "Ingénieur QA",
    date: {
      start: date(3, 5, 2023),
      end: date(10, 5, 2024),
    },
    icon: "/bivouac/icons/clipboard.svg",
    iconSize: 32,
    description: "Chez Pelico, j'ai posé les fondations de la qualité : architecture complète des environnements de test, plus de 500 tests end-to-end écrits et maintenus avec Playwright, une pipeline GitLab CI rapide et une documentation claire, pour que l'équipe puisse livrer en confiance.",
    points: [
      "Écriture et maintenance de plus de 500 tests end-to-end de la webapp avec Playwright",
      "Création de l'architecture de l'environnement de test pour optimiser l'efficacité de l'équipe QA",
      "Mise en place d'une CI GitLab efficace pour une exécution ultra-rapide des tests",
      "Amélioration de l'accessibilité et détection de bugs sur la webapp lors de l'automatisation des nouveaux tests",
      "Écriture de documentation complète sur tout l'environnement de test pour l'équipe QA",
    ],
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
    points: [
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
    title: "Développeur full-stack",
    date: {
      start: date(16, 5, 2016),
      end: date(30, 4, 2022),
    },
    icon: "/bivouac/icons/console.svg",
    iconSize: 38,
    description: "Pendant près de six ans, j'ai conçu les serveurs de jeux qui accueillaient des milliers de joueurs chaque jour, et fait évoluer l'architecture jusqu'à encaisser des dizaines de milliers de requêtes par seconde. J'y ai aussi mis en place la synchronisation des données via RabbitMQ, développé une API REST en NestJS et PostgreSQL, et construit le panel d'administration en React.",
    points: [
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
