import type { Hike } from "#/lib/configs/hikes";
import type { ReactElement } from "react";
import { Container } from "#/lib/components/container";
import { Lightbox } from "#/lib/components/lightbox";
import { Polaroid } from "#/lib/components/polaroid";
import { hikes } from "#/lib/configs/hikes";
import { useState } from "react";

export const HikesSection = (): ReactElement => {
  // Photo currently displayed fullscreen, null when the lightbox is closed:
  const [selected, setSelected] = useState<Hike | null>(null);

  return (
    <section id="sorties" className="pt-12">
      <Container>
        <div className="mb-12">
          <h2 className="font-jersey text-[64px] leading-none tracking-[1px] max-sm:text-[40px]">Dernières sorties</h2>
          <p className="mt-3 font-caveat font-semibold text-[24px] text-pink">quand je ne code pas, je marche.</p>
        </div>

        {/* Extra vertical breathing room on mobile so tilted polaroids never touch: */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-7 gap-y-12 md:gap-y-7">
          {hikes.map((hike) => (
            <Polaroid key={hike.image} {...hike} onPress={() => setSelected(hike)} />
          ))}
        </div>
      </Container>

      {selected && <Lightbox key={selected.image} src={selected.fullImage} alt={selected.alt} caption={selected.caption} onClose={() => setSelected(null)} />}
    </section>
  );
};
