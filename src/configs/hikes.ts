export type Hike = {
  image: string;
  fullImage: string;
  alt: string;
  caption: string;
  rotation: number;
  offset?: number;
};

export const hikes: Hike[] = [
  { image: "/hikes/calenzana.avif", fullImage: "/hikes/calenzana.jpg", alt: "Coucher de soleil sur les montagnes corses depuis Calenzana", caption: "Calenzana", rotation: -3 },
  { image: "/hikes/monte-cinto.avif", fullImage: "/hikes/monte-cinto.jpg", alt: "Randonneur au sommet du Monte Cinto, face aux nuages", caption: "Monte Cinto · 2 706 m", rotation: 2, offset: 18 },
  { image: "/hikes/bavella.avif", fullImage: "/hikes/bavella.jpg", alt: "Aiguilles de Bavella au soleil couchant", caption: "Aiguilles de Bavella", rotation: -1 },
  { image: "/hikes/etretat.avif", fullImage: "/hikes/etretat.jpg", alt: "Vue sur la mer depuis les falaises d'Étretat", caption: "Falaises d'Étretat", rotation: 3, offset: 10 },
];
