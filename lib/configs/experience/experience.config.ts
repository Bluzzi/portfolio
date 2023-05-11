import type { ExperienceBase } from "./experience.type";
import { populateExperience } from "./experience.util";
import { date } from "#/utils/date/parser";

const experienceBase: ExperienceBase[] = [
  {
    type: "pro",
    date: {
      start: date(3, 5, 2023),
      end: null
    },
    company: "Pelico",
    title: "QA & Développeur frontend",
    link: null,
    description: [
      "Développement d'un framework de test pour répondre aux besoins des tests à implémenter",
      "Écriture de test end-to-end pour le frontend avec Playwright",
      "Mise en place de CI/CD GitLab pour l'exécution des tests",
      "Développement de nouvelles fonctionnalités sur le site en ReactJS"
    ],
    skills: ["Playwright", "TypeScript", "ReactJS", "GraphQL", "GitLab CI/CD"]
  },
  {
    type: "pro",
    date: {
      start: date(20, 2, 2023),
      end: null
    },
    company: "Seedext",
    title: "CTO & Développeur frontend",
    link: null,
    description: [
      "Création d'un design système accessible avec ReactJS et Tailwind",
      "Développement du site internet avec les frameworks ReactJS et NextJS",
      "Organisation de la roadmap technique et des différents sprints",
      "Recrutement de développeurs à travers des tests techniques et des entretiens vocaux",
      "Review du code des équipes de développeurs frontend et backend",
      "Mise en place de GitHub Actions pour vérifier les build, lint, tests et effectuer les déploiements"
    ],
    skills: ["TypeScript", "ReactJS", "NextJS", "Tailwind", "Testing Library", "Storybook", "OpenAPI", "Golang", "GitHub Actions"]
  },
  {
    type: "pro",
    date: {
      start: date(23, 1, 2023),
      end: date(3, 2, 2023)
    },
    company: "Dynamic Process",
    title: "Développeur full-stack",
    link: null,
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
    link: null,
    description: [
      "Mise en place d'un système de synchronisation des produits et commandes de Shopify et PrestaShop avec le backend",
      "Écriture et lecture de fichier Excel et Google Sheet via des scripts développés",
      "Développement d'un site internet e-commerce utilisant ReactJS et NextJS",
      "Création et développement d'un site internet pour l'espace distributeur utilisant ReactJS et NextJS",
      "Développement d'une API REST avec le framework KoaJS et la BDD MongoDB",
      "Élaboration d'un système de génération de fichier OpenAPI pour générer le support de l'API pour le frontend",
      "Mise en place d'un package de composants pour notre design système avec ReactJS",
      "Mise en place de GitHub Actions pour vérifier les builds, le linting et les tests"
    ],
    skills: [
      "NodeJS", "TypeScript", "ReactJS", "NextJS", "Tailwind",
      "Storybook", "Vitest", "Testing Library",
      "KoaJS", "MongoDB", "OpenAPI", "GitHub Actions"
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
      "Conception et développement d'un site internet permettant de prendre et gérer des commandes à l'aide de ReactJS et NextJS",
      "Mise en place d'une API REST utilisant le framework NestJS et la BDD PostgreSQL"
    ],
    skills: ["NodeJS", "ReactJS", "NextJS", "TypeScript", "Tailwind", "NestJS", "PostgreSQL", "Docker", "Playwright"]
  },
  {
    type: "open-source",
    date: {
      start: date(12, 7, 2020),
      end: null
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
    link: null,
    description: [
      "Création de plugin via le software PocketMine-MP",
      "Mise en place d'un serveur socket (TCP) pour synchroniser les serveurs",
      "Développement d'un backend (API REST) utilisant le framework NestJS et la BDD PostgreSQL",
      "Construction d'un panel proposant divers outils de gestion à l'aide de ReactJS et NextJS",
      "Gestion et maintenance des serveurs sur Ubuntu"
    ],
    skills: ["NodeJS", "TypeScript", "PHP", "PostgreSQL", "NestJS", "ReactJS", "NextJS", "SCSS", "Socket (TCP)", "Docker", "Ubuntu"]
  }
];

export const experiences = populateExperience(experienceBase);