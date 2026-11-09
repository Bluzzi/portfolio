import type { ReactElement } from "react";
import { SceneCampfire, SceneCloud, SceneEmbers, SceneSparkle, SceneStar, type SceneSparkProps } from "#/components/scene-fx";
import { SceneImage } from "#/components/scene-image";

// Stars twinkling over the scene sky, positioned from the design:
export const sceneStars: SceneSparkProps[] = [
  { x: 1224, y: 188, color: "#1F2A63", delay: 2.4 },
  { x: 2128, y: 160, color: "#36408A", delay: 3 },
  { x: 972, y: 20, color: "#141A3F", delay: 4.1 },
  { x: 2536, y: 52, color: "#141A3F", delay: 0.4 },
  { x: 2460, y: 144, color: "#1F2A63", delay: 3.3 },
  { x: 784, y: 212, color: "#1F2A63", delay: 1.6 },
  { x: 1732, y: 216, color: "#36408A", delay: 5.3 },
  { x: 672, y: 284, color: "#36408A", delay: 0.4 },
  { x: 1896, y: 136, color: "#1F2A63", delay: 4.1 },
  { x: 756, y: 304, color: "#36408A", delay: 5.2 },
  { x: 888, y: 112, color: "#1F2A63", delay: 1.4 },
  { x: 2400, y: 336, color: "#6A5FA8", delay: 5.4 },
  { x: 1408, y: 312, color: "#6A5FA8", delay: 5.2 },
  { x: 1508, y: 12, color: "#141A3F", delay: 0.1 },
  { x: 644, y: 376, color: "#6A5FA8", delay: 4.2 },
  { x: 2352, y: 176, color: "#36408A", delay: 0 },
];

// Sparkles glinting on the lake, positioned from the design:
export const sceneSparkles: SceneSparkProps[] = [
  { x: 2288, y: 740, color: "#B9C6F2", delay: 1.7 },
  { x: 1604, y: 792, color: "#B9C6F2", delay: 1.3 },
  { x: 1004, y: 756, color: "#B9C6F2", delay: 1.3 },
  { x: 2212, y: 744, color: "#B9C6F2", delay: 2.8 },
  { x: 896, y: 772, color: "#B9C6F2", delay: 3.2 },
  { x: 1496, y: 784, color: "#B9C6F2", delay: 1.3 },
  { x: 1068, y: 748, color: "#B9C6F2", delay: 2 },
  { x: 2196, y: 756, color: "#B9C6F2", delay: 0.9 },
  { x: 1612, y: 780, color: "#B9C6F2", delay: 3.7 },
  { x: 628, y: 788, color: "#B9C6F2", delay: 3.4 },
  { x: 768, y: 764, color: "#B9C6F2", delay: 3.8 },
  { x: 1332, y: 776, color: "#B9C6F2", delay: 3.7 },
  { x: 1396, y: 752, color: "#B9C6F2", delay: 1 },
  { x: 1712, y: 756, color: "#B9C6F2", delay: 2.7 },
  { x: 2080, y: 792, color: "#B9C6F2", delay: 1.9 },
  { x: 1040, y: 756, color: "#B9C6F2", delay: 0.4 },
  { x: 1880, y: 748, color: "#B9C6F2", delay: 2.5 },
  { x: 1352, y: 756, color: "#B9C6F2", delay: 0.8 },
  { x: 2196, y: 748, color: "#B9C6F2", delay: 3.2 },
  { x: 1380, y: 784, color: "#B9C6F2", delay: 2.9 },
  { x: 1360, y: 744, color: "#B9C6F2", delay: 3.8 },
  { x: 1824, y: 776, color: "#B9C6F2", delay: 2.9 },
  { x: 2580, y: 760, color: "#B9C6F2", delay: 0.6 },
  { x: 2024, y: 764, color: "#B9C6F2", delay: 1.6 },
  { x: 1704, y: 776, color: "#B9C6F2", delay: 3.8 },
  { x: 1556, y: 780, color: "#B9C6F2", delay: 1.6 },
];

// Fireflies hovering around the camp, positioned from the design:
export const sceneFireflies: { x: number; y: number; delay: number }[] = [
  { x: 1880, y: 690, delay: 0.4 },
  { x: 2230, y: 720, delay: 1.5 },
  { x: 1700, y: 740, delay: 2.6 },
];

export type SceneNightProps = {
  src: string;
  alt: string;
  fire: "lit" | "extinguished";
  className?: string;
};

// The whole night scene: base image, clouds, stars, water sparkles, shooting star, fire and
// fireflies. The host section can pass a class to scale the whole scene down on small screens:
export const SceneNight = ({ src, alt, fire, className }: SceneNightProps): ReactElement => {
  return (
    <SceneImage src={src} alt={alt} className={className}>
      {/* Clouds drifting across the sky: */}
      <SceneCloud src="/images/cloud-wide.png" x={1088} y={136} width={136} height={36} />
      <SceneCloud src="/images/cloud-small.png" x={2584} y={104} width={108} height={24} duration={38} delay={-12} />

      {/* Stars twinkling in the sky: */}
      {sceneStars.map((star) => (
        <SceneStar key={`${String(star.x)}-${String(star.y)}`} {...star} />
      ))}

      {/* Sparkles glinting on the lake: */}
      {sceneSparkles.map((sparkle) => (
        <SceneSparkle key={`${String(sparkle.x)}-${String(sparkle.y)}`} {...sparkle} />
      ))}

      {/* Shooting star streaking above the mountains: */}
      <span aria-hidden="true" className="shooting-star" style={{ left: 1500, top: 90, animationDelay: "3s" }} />

      {/* Fire by the tent, either lit or extinguished: */}
      {fire === "lit" ? <SceneCampfire sprite="/images/campfire-hero.png" x={2052} y={712} /> : <SceneEmbers x={2052} y={712} />}

      {/* Fireflies hovering around the camp: */}
      {sceneFireflies.map((firefly) => (
        <span key={`${String(firefly.x)}-${String(firefly.y)}`} aria-hidden="true" className="firefly" style={{ left: firefly.x, top: firefly.y, animationDelay: `${String(firefly.delay)}s` }} />
      ))}
    </SceneImage>
  );
};
