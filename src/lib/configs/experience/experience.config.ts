import type { ExperienceBase } from "./experience.type";
import { populateExperience } from "./experience.util";
import { date } from "#source/lib/utils/date/parser";

const experienceBase: ExperienceBase[] = [
  {
    type: "pro",
    date: { start: date(12, 8, 2024), end: null },
    company: "Melcad",
    title: "Co-fondateur & CTO",
    link: "https://melcad.app", // TODO: update link
    description: [
      "Création d'une webapp proposant divers modules de gestion à destination des entreprises"
    ],
    skills: [
      "TypeScript", "Fastify", "ReactJS", "NextJS", "Tailwind", "Playwright",
      "PostgreSQL", "Prisma", "OpenAPI", "Google Cloud Platform", "Railway", "GitHub Actions"
    ]
  },
  {
    type: "pro",
    date: {
      start: date(3, 5, 2023),
      end: date(8, 3, 2024)
    },
    company: "Pelico",
    title: "QA & Développeur frontend",
    link: "https://www.pelico.ai",
    description: [
      "Écriture et maintenance de plus de 500 tests end-to-end pour le frontend avec Playwright",
      "Développement d'un framework de test pour répondre aux besoins des tests à implémenter",
      "Mise en place de CI/CD GitLab pour l'exécution des tests",
      "Amélioration de l'accessibilité de l'application web",
      "Écriture de documentation complète sur tout l'environnement de test pour l'équipe QA"
    ],
    skills: ["Playwright", "TypeScript", "ReactJS", "GraphQL", "GitLab CI/CD", "PowerShell", "Notion"]
  },
  {
    type: "pro",
    date: {
      start: date(20, 2, 2023),
      end: null
    },
    company: "Seedext",
    title: "CTO",
    link: "https://www.seedext.com",
    description: [
      "Développement d'une web app accessible proposant une UI et UX futuriste",
      "Recrutement, onboarding et management de l'équipe technique",
      "Review de code sur GitHub, en live ainsi que pendant des sessions de pair coding",
      "Conception, déploiement et gestion d'un micro-service dédié à la gestion des intelligences artificielles",
      "Élaboration et mise en place d'un dashboard administrateur en utilisant Retool",
      "Automatisation de nos déploiements, tests et check de qualité de code via des GitHub Actions",
      "Maintenance et mise en place de nos différents services sur Google Cloud Platform",
      "Rédaction de diverses documentations techniques sur Notion"
    ],
    skills: [
      "TypeScript", "Fastify", "ReactJS", "NextJS", "Tailwind", "Playwright", "Vitest", "Storybook",
      "OpenAPI", "Python", "AI (LLM, STT)", "Google Cloud Platform", "Retool", "GitHub Actions", "Notion", "RabbitMQ"
    ]
  },
  {
    type: "pro",
    date: {
      start: date(23, 1, 2023),
      end: date(3, 2, 2023)
    },
    company: "Dynamic Process",
    title: "Développeur full-stack",
    link: "https://dynamicprocess.io",
    description: [
      "Développement d'une API GraphQL avec Prisma et PostgreSQL",
      "Intégration d'une fonctionnalité sur le site de facturation utilisant Svelte, SvelteKit et Tailwind"
    ],
    skills: ["Svelte", "SvelteKit", "GraphQL", "PostgreSQL", "Prisma", "Tailwind"]
  },
  {
    type: "pro",
    date: {
      start: date(11, 7, 2022),
      end: date(18, 1, 2023)
    },
    company: "Okosmo",
    title: "Développeur full-stack",
    link: "https://okosmo.io",
    description: [
      "Mise en place d'un système de synchronisation des produits et commandes de Shopify et PrestaShop avec le backend",
      "Écriture et lecture de fichier Excel et Google Sheet via des scripts développés",
      "Développement d'un site internet e-commerce utilisant ReactJS et NextJS",
      "Création et développement d'un dashboard pour l'espace distributeur utilisant ReactJS et NextJS",
      "Développement d'une API REST avec le framework ExpressJS et la BDD MongoDB",
      "Élaboration d'un système de génération de fichier OpenAPI pour générer le support de l'API pour le frontend",
      "Mise en place d'un package de composants pour notre design système avec ReactJS",
      "Mise en place de GitHub Actions pour vérifier les builds, le linting et les tests"
    ],
    skills: [
      "NodeJS", "TypeScript", "ReactJS", "NextJS", "Tailwind",
      "Storybook", "Vitest", "Testing Library",
      "ExpressJS", "MongoDB", "OpenAPI", "GitHub Actions"
    ]
  },
  {
    type: "pro",
    date: {
      start: date(1, 5, 2022),
      end: date(30, 6, 2022)
    },
    company: "Poissonnerie Dugas",
    title: "Développeur full-stack",
    link: null,
    description: [
      "Conception et développement d'une web app permettant de prendre et gérer des commandes à l'aide de ReactJS et NextJS",
      "Mise en place d'une API REST utilisant le framework NestJS et la BDD PostgreSQL"
    ],
    skills: ["NodeJS", "ReactJS", "NextJS", "TypeScript", "Tailwind", "NestJS", "PostgreSQL", "Docker", "Playwright"]
  },
  {
    type: "open-source",
    date: {
      start: date(12, 7, 2020),
      end: date(29, 9, 2023)
    },
    company: "Virtual Royaume",
    title: "Mainteneur de projets open-source communautaires",
    link: "https://github.com/Virtual-Royaume",
    description: [
      "Participation active à la communauté de développeurs pour offrir et recevoir de l'entraide",
      "Review des contributions de la communauté",
      "Mise en place d'un backend (API GraphQL) utilisant le framework NestJS et la BDD MongoDB",
      "Conception et développement d'un blog et d'une landing page pour présenter la communauté",
      "Développement d'un bot Discord à l'aide de l'API DiscordJS",
      "Gestion et maintenance des environnements de développement et de production, ainsi que mise en ligne des services",
      "Mise en place de GitHub Actions pour vérifier les builds, le linting et les tests"
    ],
    skills: ["TypeScript", "NestJS", "GraphQL", "MongoDB", "Svelte", "SvelteKit", "Tailwind", "Storybook", "Vitest", "Playwright", "GitHub Actions"]
  },
  {
    type: "pro",
    date: {
      start: date(16, 5, 2016),
      end: date(30, 4, 2022)
    },
    company: "Symphonia",
    title: "Développeur full-stack & Administrateur serveur",
    link: "https://github.com/Symphonia-Team",
    description: [
      "Conception de serveurs de jeux vidéo, accueillant quotidiennement des milliers de joueurs",
      "Mise en place d'un serveur socket (TCP) pour synchroniser les serveurs",
      "Développement d'un backend (API REST) utilisant le framework NestJS et la BDD PostgreSQL",
      "Construction d'un panel proposant divers outils de gestion à l'aide de ReactJS et NextJS",
      "Gestion et maintenance des serveurs sur Ubuntu"
    ],
    skills: ["NodeJS", "TypeScript", "PHP", "PostgreSQL", "NestJS", "ReactJS", "NextJS", "SCSS", "Socket (TCP)", "Docker", "Ubuntu"]
  }
];

export const experiences = populateExperience(experienceBase);