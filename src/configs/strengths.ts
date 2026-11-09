export type Strength = {
  icon: string;
  iconSize: number;
  title: string;
  description: string;
};

export const strengths: Strength[] = [
  {
    icon: "/icons/computer.svg",
    iconSize: 54,
    title: "Produit, UI & UX",
    description: "Une vraie vision produit qui me permet de comprendre les enjeux métier et de définir des spécifications claires, avec une exigence forte sur l'expérience et des interfaces soignées jusqu'au moindre détail.",
  },
  {
    icon: "/icons/server.svg",
    iconSize: 40,
    title: "Scalabilité",
    description: "Faire évoluer la scalabilité d'un projet sous toutes ses formes, pour qu'elle suive le rythme des clients, de l'architecture et du Cloud jusqu'aux recrutements de l'équipe technique, en passant par le code. Tout grandit ensemble, sans jamais devoir tout reconstruire en chemin.",
  },
  {
    icon: "/icons/clipboard.svg",
    iconSize: 40,
    title: "Qualité & E2E",
    description: "Une couverture de tests automatisés la plus complète possible, qui garantit une qualité constante, zéro régression et plusieurs mises en production par jour en toute confiance.",
  },
  {
    icon: "/icons/robot.svg",
    iconSize: 40,
    title: "Travail agentique",
    description: "Pleinement à l'aise avec le développement assisté par l'IA et son rythme ultra-rapide, sans jamais transiger sur la qualité de ce qui part en production.",
  },
];
