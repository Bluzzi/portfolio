import type { CSSProperties, ReactElement } from "react";
import { PixelImage } from "#/lib/components/pixel-image";

export type SceneSparkProps = {
  x: number;
  y: number;
  color: string;
  delay?: number;
};

export type SceneCloudProps = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  duration?: number;
  delay?: number;
};

export type SceneCampfireProps = {
  sprite: string;
  x: number;
  y: number;
};

// Delay converted to a CSS value, omitted when there is none:
const delayStyle = (delay: number | undefined): CSSProperties => {
  return delay === undefined ? {} : { animationDelay: `${String(delay)}s` };
};

// Star twinkling in a scene sky, positioned in the 3200px scene space:
export const SceneStar = ({ x, y, color, delay }: SceneSparkProps): ReactElement => {
  return <span aria-hidden="true" className="twinkle-star" style={{ left: x, top: y, background: color, ...delayStyle(delay) }} />;
};

// Sparkle glinting on a scene lake, positioned in the 3200px scene space:
export const SceneSparkle = ({ x, y, color, delay }: SceneSparkProps): ReactElement => {
  return <span aria-hidden="true" className="water-sparkle" style={{ left: x, top: y, background: color, ...delayStyle(delay) }} />;
};

// Cloud drifting across a scene sky, positioned in the 3200px scene space:
export const SceneCloud = ({ src, x, y, width, height, duration, delay }: SceneCloudProps): ReactElement => {
  return (
    <PixelImage
      src={src}
      alt=""
      aria-hidden="true"
      className="cloud-drift"
      style={{
        left: x,
        top: y,
        width,
        height,
        animationDuration: duration === undefined ? undefined : `${String(duration)}s`,
        ...delayStyle(delay),
      }}
    />
  );
};

// Animated campfire with its pulsing glow and three rising smoke puffs, positioned in
// the 3200px scene space, the glow and smoke offsets coming from the design:
export const SceneCampfire = ({ sprite, x, y }: SceneCampfireProps): ReactElement => {
  return (
    <>
      <span aria-hidden="true" className="campfire" style={{ left: x, top: y, backgroundImage: `url(${sprite})` }} />
      <span aria-hidden="true" className="campfire-glow" style={{ left: x + 12, top: y + 16 }} />
      {[0, 1.7, 3.4].map((delay) => (
        <span key={delay} aria-hidden="true" className="smoke" style={{ left: x + 12, top: y - 8, animationDelay: `${String(delay)}s` }} />
      ))}
    </>
  );
};
