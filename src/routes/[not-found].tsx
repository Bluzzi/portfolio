import type { ReactElement } from "react";
import { Button } from "#/components/button";
import { Container } from "#/components/container";
import { SceneNight } from "#/components/scene-night";
import { data } from "react-router";

export const loader = () => data(null, { status: 404 });

// Lost hiker sprite looking left and right, with a "?" bubble:
const LostHiker = (): ReactElement => {
  return (
    <div role="img" aria-label="Petit randonneur perdu" className="lost-hiker max-sm:scale-75" style={{ backgroundImage: "url(/images/lost-hiker.png)" }}>
      <span aria-hidden="true" className="lost-bubble">?</span>
    </div>
  );
};

const NotFound = (): ReactElement => {
  return (
    <section className="relative flex min-h-[max(100vh,900px)] flex-col overflow-hidden bg-night">
      <SceneNight src="/backgrounds/scene-hero.png" alt="Montagnes en pixel art au crépuscule, une tente et un feu de camp au bord du lac" fire="lit" />

      <Container className="flex w-full flex-wrap items-center justify-between gap-4 py-6 max-sm:py-4">
        <a className="font-jersey text-[30px] tracking-[1px] text-cream transition-colors hover:text-amber" href="/">camille dugas</a>
        <nav className="flex flex-wrap gap-7">
          <a className="font-jersey text-[22px] tracking-[1px] text-cream transition-colors hover:text-amber" href="/#parcours">parcours</a>
          <a className="font-jersey text-[22px] tracking-[1px] text-cream transition-colors hover:text-amber" href="/#contact">contact</a>
        </nav>
      </Container>

      <Container className="relative flex w-full flex-1 flex-col items-center pt-10 pb-95 max-sm:pt-6 max-sm:pb-75 text-center">
        <p className="mb-1.5 font-caveat font-semibold text-[28px] text-pink">oups… tu t'es écarté du sentier</p>
        <div className="flex items-end gap-7">
          <h1 className="font-jersey text-[220px] leading-[0.8] tracking-[4px] text-shadow-[0_8px_0_#0b0f2a] max-sm:text-[140px]">404</h1>
          <LostHiker />
        </div>
        <p className="mt-7 max-w-[520px] text-[19px] leading-[1.6] text-cream-dark text-shadow-[0_2px_0_#0b0f2a]">Cette page n'existe pas, ou plus. Pas de panique, le campement n'est pas loin et le feu est encore allumé.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-x-[22px] gap-y-[18px]">
          <Button href="/">← retour au camp</Button>
          <Button href="/#parcours" variant="secondary">voir mon parcours</Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
