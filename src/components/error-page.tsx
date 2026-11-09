import type { ReactElement } from "react";
import { Button } from "#/components/button";
import { Container } from "#/components/container";
import { SceneNight } from "#/components/scene-night";

export type ErrorPageProps = {
  title: string;
  description: string | null;
};

// Full error page with the extinguished fire scene, a detail box and the actions:
export const ErrorPage = ({ title, description }: ErrorPageProps): ReactElement => {
  return (
    <section className="relative flex min-h-[max(100vh,900px)] flex-col overflow-hidden bg-night">
      <SceneNight src="/backgrounds/scene-error.png" alt="Montagnes en pixel art au crépuscule, une tente au bord du lac et un feu éteint qui fume" fire="extinguished" />

      <Container className="flex w-full flex-wrap items-center justify-between gap-4 py-6 max-sm:py-4">
        <a className="font-jersey text-[30px] tracking-[1px] text-cream transition-colors hover:text-amber" href="/">camille dugas</a>
        <nav className="flex flex-wrap gap-7">
          <a className="font-jersey text-[22px] tracking-[1px] text-cream transition-colors hover:text-amber" href="/#parcours">parcours</a>
          <a className="font-jersey text-[22px] tracking-[1px] text-cream transition-colors hover:text-amber" href="/#contact">contact</a>
        </nav>
      </Container>

      <Container className="relative flex w-full flex-1 flex-col items-center pt-10 pb-95 max-sm:pt-6 max-sm:pb-75 text-center">
        <p className="mb-2.5 font-caveat font-semibold text-[28px] text-pink">aïe… le feu s'est éteint</p>
        <h1 className="max-w-[900px] font-jersey text-[88px] leading-[0.95] tracking-[2px] text-shadow-[0_6px_0_#0b0f2a] max-sm:text-[56px]">{title}</h1>
        <p className="mt-[22px] mb-7 max-w-[540px] text-[18px] leading-[1.6] text-cream-dark text-shadow-[0_2px_0_#0b0f2a]">Une erreur inattendue s'est produite. Ce n'est pas de ta faute. Réessaie dans un instant, ou reviens au campement.</p>

        {description && (
          <div className="relative w-full max-w-[640px] text-left bg-error-box border-3 border-abyss shadow-[inset_0_0_0_2px_#3a4280,5px_5px_0_#0b0f2a]">
            <div className="flex items-center gap-2.5 border-b-2 border-line px-4 py-2.5 font-jersey text-[20px] leading-none tracking-[1px] text-amber">
              <span aria-hidden="true" className="h-2 w-2 bg-ember" />
              détail de l'erreur
            </div>
            <p className="px-4.5 pb-4.5 pt-4 font-mono text-[15px] leading-[1.6] text-cream whitespace-pre-wrap break-words">{description}</p>
          </div>
        )}

        <div className="mt-9 flex flex-wrap justify-center gap-x-[22px] gap-y-[18px]">
          <Button onClick={() => window.location.reload()}>↻ réessayer</Button>
          <Button href="/" variant="secondary">← retour au camp</Button>
        </div>
      </Container>
    </section>
  );
};
