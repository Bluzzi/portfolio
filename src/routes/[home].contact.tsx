import type { ReactElement } from "react";
import { Button } from "#/lib/components/button";
import { Container } from "#/lib/components/container";
import { SceneCampfire, SceneSparkle, SceneStar, type SceneSparkProps } from "#/lib/components/scene-fx";
import { SceneImage } from "#/lib/components/scene-image";
import { dayJS } from "#/lib/utils/day-js";

// Twinkling stars scattered over the scene sky, positioned from the design:
const sceneStars: SceneSparkProps[] = [
  { x: 1860, y: 88, color: "#141A3F", delay: 0.4 },
  { x: 864, y: 200, color: "#252E6A", delay: 5.1 },
  { x: 968, y: 16, color: "#141A3F", delay: 5 },
  { x: 2580, y: 104, color: "#141A3F", delay: 0.8 },
  { x: 2544, y: 36, color: "#141A3F", delay: 3.2 },
  { x: 2544, y: 60, color: "#141A3F", delay: 1.5 },
  { x: 716, y: 200, color: "#252E6A", delay: 3 },
  { x: 884, y: 24, color: "#141A3F", delay: 3.3 },
  { x: 2572, y: 52, color: "#141A3F", delay: 0.6 },
  { x: 1120, y: 108, color: "#141A3F", delay: 5.2 },
  { x: 1356, y: 236, color: "#252E6A", delay: 1.7 },
  { x: 1628, y: 124, color: "#1A2150", delay: 2.7 },
];

// Sparkles glinting on the lake, positioned from the design:
const sceneSparkles: SceneSparkProps[] = [
  { x: 2088, y: 436, color: "#9FB0E8", delay: 0.8 },
  { x: 1884, y: 456, color: "#9FB0E8", delay: 3.7 },
  { x: 1548, y: 492, color: "#9FB0E8", delay: 1.9 },
  { x: 1292, y: 464, color: "#9FB0E8", delay: 2.7 },
  { x: 1288, y: 488, color: "#9FB0E8", delay: 1.3 },
  { x: 688, y: 484, color: "#9FB0E8", delay: 1.6 },
  { x: 2432, y: 472, color: "#9FB0E8", delay: 2.9 },
  { x: 1768, y: 468, color: "#9FB0E8", delay: 2.8 },
  { x: 2180, y: 480, color: "#9FB0E8", delay: 0 },
  { x: 2068, y: 436, color: "#9FB0E8", delay: 0.6 },
  { x: 1212, y: 448, color: "#9FB0E8", delay: 0.8 },
  { x: 1116, y: 436, color: "#9FB0E8", delay: 0.9 },
  { x: 980, y: 472, color: "#9FB0E8", delay: 3.5 },
  { x: 1400, y: 456, color: "#9FB0E8", delay: 1.7 },
  { x: 1168, y: 476, color: "#9FB0E8", delay: 3.1 },
  { x: 1452, y: 496, color: "#9FB0E8", delay: 1.5 },
  { x: 2340, y: 480, color: "#9FB0E8", delay: 1.4 },
  { x: 632, y: 488, color: "#9FB0E8", delay: 0.9 },
  { x: 2048, y: 488, color: "#9FB0E8", delay: 2 },
  { x: 1332, y: 480, color: "#9FB0E8", delay: 2.1 },
];

// Fireflies hovering around the camp, positioned from the design:
const sceneFireflies: { x: number; y: number; delay: number }[] = [
  { x: 1400, y: 500, delay: 0.8 },
  { x: 1760, y: 520, delay: 2.1 },
];

export const ContactSection = (): ReactElement => {
  return (
    <section id="contact" className="relative min-h-[880px] overflow-hidden bg-night">
      <SceneImage src="/bivouac/scene-contact.png" alt="">
        {/* Stars twinkling in the sky: */}
        {sceneStars.map((star) => (
          <SceneStar key={`${String(star.x)}-${String(star.y)}`} {...star} />
        ))}

        {/* Sparkles glinting on the lake: */}
        {sceneSparkles.map((sparkle) => (
          <SceneSparkle key={`${String(sparkle.x)}-${String(sparkle.y)}`} {...sparkle} />
        ))}

        {/* Shooting star streaking above the mountains: */}
        <span aria-hidden="true" className="shooting-star" style={{ left: 2300, top: 60, animationDelay: "7s" }} />

        {/* Campfire by the tent with its glow and smoke: */}
        <SceneCampfire sprite="/bivouac/campfire-contact.png" x={1572} y={508} />

        {/* Fireflies hovering around the camp: */}
        {sceneFireflies.map((firefly) => (
          <span key={`${String(firefly.x)}-${String(firefly.y)}`} aria-hidden="true" className="firefly" style={{ left: firefly.x, top: firefly.y, animationDelay: `${String(firefly.delay)}s` }} />
        ))}
      </SceneImage>

      <Container className="pt-24 text-center">
        <h2 className="mb-4.5 font-jersey text-[96px] leading-[0.95] tracking-[2px] text-shadow-[0_6px_0_#0b0f2a] max-sm:text-[40px]">Un projet en tête ?</h2>
        <p className="mx-auto mb-9 max-w-[520px] text-[19px] leading-[1.6] text-cream-dark">
          Collaboration, besoin technique ou juste discuter autour du feu, écris-moi.
        </p>
        <Button href="mailto:contact@camilledugas.me">m'écrire un message →</Button>
      </Container>

      {/* Footer pinned to the bottom of the section, aligned with the page content: */}
      <footer className="absolute inset-x-0 bottom-0">
        {/* On small screens the text would land on the tent, so it gets smaller plus the
            same dark offset shadow as the hero scene text. Below 420px it stacks as a
            centered column with tight leading so both lines fit on the dark ground strip
            under the tent and campfire, which ends about 65px above the scene bottom: */}
        <Container className="flex min-h-22 flex-wrap items-center justify-between gap-x-7 gap-y-1.5 py-2 font-jersey text-[24px] tracking-[1px] text-lavender-dark max-sm:text-[20px] max-sm:text-shadow-[0_2px_0_#0b0f2a] max-[420px]:min-h-0 max-[420px]:flex-col max-[420px]:leading-[1.2] max-[420px]:py-1">
          <span>
            ©
            {dayJS().year()}
            {" "}
            camille dugas
          </span>

          <span className="flex flex-wrap items-center gap-x-7 gap-y-1.5">
            <a className="text-cream transition-colors hover:text-amber" href="https://github.com/Bluzzi" target="_blank" rel="noreferrer">github</a>
            <a className="text-cream transition-colors hover:text-amber" href="https://www.linkedin.com/in/camille-dugas" target="_blank" rel="noreferrer">linkedin</a>
          </span>
        </Container>
      </footer>
    </section>
  );
};
