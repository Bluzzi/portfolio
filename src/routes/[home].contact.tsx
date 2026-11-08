import type { ReactElement } from "react";
import { Button } from "#/lib/components/button";
import { Container } from "#/lib/components/container";
import { SceneImage } from "#/lib/components/scene-image";
import { dayJS } from "#/lib/utils/day-js";

export const ContactSection = (): ReactElement => {
  return (
    <section id="contact" className="relative min-h-[880px] overflow-hidden bg-night">
      <SceneImage src="/bivouac/scene-contact.png" alt="" />

      <Container className="pt-24 text-center">
        <h2 className="mb-4.5 font-jersey text-[96px] leading-[0.95] tracking-[2px] text-shadow-[0_6px_0_#0b0f2a] max-sm:text-[40px]">Un projet en tête ?</h2>
        <p className="mx-auto mb-9 max-w-[520px] text-[19px] leading-[1.6] text-cream-dark">
          Collaboration, besoin technique ou juste discuter autour du feu : écris-moi.
        </p>
        <Button href="mailto:contact@camilledugas.me">m'écrire un message →</Button>
      </Container>

      {/* Footer pinned to the bottom of the section, aligned with the page content: */}
      <footer className="absolute inset-x-0 bottom-0">
        <Container className="flex min-h-22 flex-wrap items-center justify-between gap-x-7 gap-y-1.5 py-2 font-jersey text-[24px] tracking-[1px] text-lavender-dark">
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
