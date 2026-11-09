import type { ReactElement } from "react";
import { Button } from "#/components/button";
import { Container } from "#/components/container";
import { SceneNight } from "#/components/scene-night";
import { mediaLinks } from "#/configs/links";

// Navigation entries with their anchor targets:
const links = [
  { label: "sorties", href: "#sorties" },
  { label: "savoir-faire", href: "#savoir-faire" },
  { label: "parcours", href: "#parcours" },
  { label: "sac à dos", href: "#sac" },
  { label: "contact", href: "#contact" },
];

export const HeroSection = (): ReactElement => {
  return (
    <section id="top" className="relative min-h-[840px] overflow-hidden bg-night max-sm:min-h-[560px]">
      {/* The whole night scene, scaled down as one unit on small screens so the scene height
          fits the section and the mountain peaks stay visible instead of being clipped by the
          bottom anchor: */}
      <SceneNight
        src="/backgrounds/scene-hero.png"
        alt="Montagnes en pixel art au crépuscule, une tente et un feu de camp au bord du lac"
        fire="lit"
        className="origin-bottom max-sm:scale-[0.669]"
      />

      {/* Top bar is irrelevant on small screens, hidden entirely on mobile and tablet: */}
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6 max-lg:hidden">
        <span className="font-jersey text-[30px] tracking-[1px]">camille dugas</span>

        <nav className="flex flex-wrap gap-7 max-sm:gap-4">
          {links.map((link) => (
            <a key={link.href} className="font-jersey text-[22px] tracking-[1px] text-cream transition-colors hover:text-amber" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="pt-18">
        <p className="mb-2 font-caveat font-semibold text-[26px] text-pink-light text-shadow-[0_2px_0_#0b0f2a]">bonsoir, installe-toi près du feu</p>
        <h1 className="font-jersey text-[150px] leading-[0.85] tracking-[2px] text-shadow-[0_6px_0_#0b0f2a] max-sm:text-[68px]">
          Camille
          <br />
          Dugas
        </h1>
        <p className="mt-6.5 max-w-[520px] text-[20px] leading-[1.55] text-cream-dark text-shadow-[0_2px_0_#0b0f2a]">
          Développeur full-stack TypeScript depuis 2016. Je construis des produits web qui tiennent, et je passe mes week-ends là-haut.
        </p>

        {/* Social links render as secondary buttons in their own cluster so they wrap as a pair
            below the CTA and stay readable over the lake: */}
        <div className="mt-8.5 space-y-6">
          <Button href="#parcours">voir mon parcours →</Button>

          <div className="flex items-center gap-6">
            <Button href={mediaLinks.github} variant="secondary" newTab>GitHub</Button>
            <Button href={mediaLinks.linkedin} variant="secondary" newTab>LinkedIn</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
