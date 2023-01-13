import { ExperienceBase } from "./experience.type";
import { populateExperience } from "./experience.util";
import { date } from "$lib/utils/date";

const experienceBase: ExperienceBase[] = [
  {
    type: "pro",
    date: {
      start: date(11, 7, 2022),
      end: null
    },
    company: "Essential Tooth Box",
    title: "Développement full-stack d'un site e-commerce",
    description: [
      "Création d'un système pour synchroniser des produits et commandes de Shopify et PrestaShop avec le backend",
      "Élaboration de divers scripts d'écriture et lecture de fichier Excel et Google Sheet",
      "Construction d'un site internet pour l'espace distributeur avec ReactJS et NextJS",
      "Construction d'un site internet e-commerce avec ReactJS et NextJS",
      "Création d'un backend (API REST) avec le framework KoaJS et la BDD MongoDB",
      "Création d'un système de génération de fichier OpenAPI via le backend pour pouvoir générer le support de l'API pour le frontend",
      "Élaboration d'un package de composants pour notre design système avec ReactJS, Storybook et Tailwind"
    ],
    skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Tailwind", "Storybook", "KoaJS", "MongoDB", "OpenAPI"]
  },
  {
    type: "pro",
    date: {
      start: date(1, 5, 2022),
      end: date(30, 6, 2022)
    },
    company: "Poissonnerie Dugas",
    title: "Développement full-stack d'un site de gestion de commande",
    description: [
      "Construction d'un site internet pour prendre et gérer des commandes avec ReactJS et NextJS",
      "Création d'une API REST avec le framework NestJS et la BDD PostgreSQL"
    ],
    skills: ["NodeJS", "ReactJS", "NextJS", "TypeScript", "Tailwind", "NestJS", "PostgreSQL", "Docker"]
  },
  {
    type: "open-source",
    date: {
      start: date(11, 4, 2021),
      end: null
    },
    company: "Royaume",
    title: "...",
    description: [],
    skills: []
  },
  {
    type: "pro",
    date: {
      start: date(1, 9, 2018),
      end: date(30, 4, 2022)
    },
    company: "Symphonia",
    title: "Développement full-stack et gestion de serveur",
    description: [
      "Création de plugin via le software PocketMine-MP",
      "Élaboration d'un serveur socket (TCP) pour la synchronisation des serveurs",
      "Construction d'un backend (API REST) avec le framework NestJS et la BDD PostgreSQL",
      "Construction d'un panel proposant divers outils de gestion avec ReactJS et NextJS",
      "Gestion et maintenance des serveurs sur Ubuntu"
    ],
    skills: ["NodeJS", "TypeScript", "PHP", "PostgreSQL", "NestJS", "ReactJS", "NextJS", "SCSS", "Socket (TCP)", "Docker", "Ubuntu"]
  }
];

export const experiences = populateExperience(experienceBase);