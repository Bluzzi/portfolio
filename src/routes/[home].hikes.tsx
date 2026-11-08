import type { ReactElement } from "react";
import { Container } from "#/lib/components/container";
import { Polaroid } from "#/lib/components/polaroid";
import { hikes } from "#/lib/configs/hikes";

export const HikesSection = (): ReactElement => {
  return (
    <section id="sorties" className="pt-12">
      <Container>
        <div className="mb-12">
          <h2 className="font-jersey text-[64px] leading-none tracking-[1px] max-sm:text-[40px]">Dernières sorties</h2>
          <p className="mt-3 font-caveat font-semibold text-[24px] text-pink">quand je ne code pas, je marche.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
          {hikes.map((hike) => (
            <Polaroid key={hike.image} {...hike} />
          ))}
        </div>
      </Container>
    </section>
  );
};
