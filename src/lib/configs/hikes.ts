export type Hike = {
  image: string;
  alt: string;
  caption: string;
  rotation: number;
  offset?: number;
};

export const hikes: Hike[] = [
  { image: "/bivouac/hikes/lake.png", alt: "Lac de montagne en pixel art", caption: "Lac · Septembre", rotation: -3 },
  { image: "/bivouac/hikes/summit.png", alt: "Sommet enneigé en pixel art", caption: "Sommet · 2 738 m", rotation: 2, offset: 18 },
  { image: "/bivouac/hikes/forest.png", alt: "Sentier en forêt en pixel art", caption: "Sentier · Octobre", rotation: -1 },
  { image: "/bivouac/hikes/bivouac.png", alt: "Tente de bivouac en pixel art", caption: "Bivouac · Juin", rotation: 3, offset: 10 },
];
