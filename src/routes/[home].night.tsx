import type { CSSProperties, PropsWithChildren, ReactElement } from "react";

// Fireflies drifting across the night, positioned from the design:
const fireflies: { left: string; top: number; delay?: number }[] = [
  { left: "3%", top: 320 },
  { left: "95%", top: 780, delay: 1.2 },
  { left: "6%", top: 1460, delay: 0.6 },
  { left: "92%", top: 2040, delay: 2 },
  { left: "4%", top: 2700, delay: 1.6 },
  { left: "96%", top: 3260, delay: 0.3 },
  { left: "8%", top: 3720, delay: 2.4 },
];

// Shooting stars streaking across the night, positioned from the design:
const shootingStars: { left: string; top: number; delay?: number }[] = [
  { left: "72%", top: 120 },
  { left: "34%", top: 2280, delay: 6 },
];

// Delay converted to a CSS value, omitted when there is none:
const delayStyle = (delay: number | undefined): CSSProperties => {
  return delay === undefined ? {} : { animationDelay: `${String(delay)}s` };
};

// Starfield wrapper holding the middle sections and the night decorations:
export const NightSection = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className="night">
      {fireflies.map((firefly) => (
        <span
          key={`${firefly.left}-${String(firefly.top)}`}
          aria-hidden="true"
          className="firefly"
          style={{ left: firefly.left, top: firefly.top, ...delayStyle(firefly.delay) }}
        />
      ))}

      {shootingStars.map((shootingStar) => (
        <span
          key={`${shootingStar.left}-${String(shootingStar.top)}`}
          aria-hidden="true"
          className="shooting-star"
          style={{ left: shootingStar.left, top: shootingStar.top, ...delayStyle(shootingStar.delay) }}
        />
      ))}

      <svg aria-hidden="true" className="constellation" viewBox="0 0 55 35" shapeRendering="crispEdges" style={{ right: "2%", top: 980, width: 220, height: 140 }}>
        <polyline points="2.5,20.5 12.5,16.5 22.5,18.5 30.5,12.5 40.5,10.5 46.5,20.5 36.5,24.5 30.5,12.5" fill="none" stroke="#2C3470" strokeWidth="0.5" strokeDasharray="1 1" />
        <path fill="#9C99D6" d="M2 20h1v1h-1zM12 16h1v1h-1zM22 18h1v1h-1zM30 12h1v1h-1zM40 10h1v1h-1zM46 20h1v1h-1zM36 24h1v1h-1z" />
      </svg>

      <svg aria-hidden="true" className="constellation" viewBox="0 0 45 25" shapeRendering="crispEdges" style={{ left: "2%", top: 3000, width: 180, height: 100 }}>
        <polyline points="2.5,8.5 12.5,20.5 22.5,10.5 32.5,22.5 42.5,6.5" fill="none" stroke="#2C3470" strokeWidth="0.5" strokeDasharray="1 1" />
        <path fill="#9C99D6" d="M2 8h1v1h-1zM12 20h1v1h-1zM22 10h1v1h-1zM32 22h1v1h-1zM42 6h1v1h-1z" />
      </svg>

      <div className="relative z-[1]">{children}</div>
    </div>
  );
};
