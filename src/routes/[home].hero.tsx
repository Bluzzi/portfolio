import type { ReactElement } from "react";
import { Button } from "#/lib/components/button";
import { Container } from "#/lib/components/container";
import { SceneImage } from "#/lib/components/scene-image";

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
      <SceneImage src="/bivouac/scene-hero.png" alt="Montagnes en pixel art au crépuscule, une tente au bord du lac" />

      <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
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
        <p className="mb-2 font-caveat font-semibold text-[26px] text-pink">bonsoir, installe-toi près du feu</p>
        <h1 className="font-jersey text-[150px] leading-[0.85] tracking-[2px] text-shadow-[0_6px_0_#0b0f2a] max-sm:text-[68px]">
          Camille
          <br />
          Dugas
        </h1>
        <p className="mt-6.5 max-w-[520px] text-[20px] leading-[1.55] text-cream-dark text-shadow-[0_2px_0_#0b0f2a]">
          Développeur full-stack TypeScript depuis 2016. Je construis des produits web qui tiennent, et je passe mes week-ends là-haut.
        </p>

        <div className="mt-8.5 flex flex-wrap items-center gap-6">
          <Button href="#parcours">voir mon parcours →</Button>
          <a className="text-[17px] font-semibold text-white underline decoration-amber decoration-2 underline-offset-6 hover:text-amber" href="https://github.com/Bluzzi" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-[17px] font-semibold text-white underline decoration-amber decoration-2 underline-offset-6 hover:text-amber" href="https://www.linkedin.com/in/camille-dugas" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Container>
    </section>
  );
};
