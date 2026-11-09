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
