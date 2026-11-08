import type { ReactElement } from "react";
import { Container } from "#/lib/components/container";
import { ExperienceCard } from "#/lib/components/experience-card";
import { experiences } from "#/lib/configs/experience";

export const JourneySection = (): ReactElement => {
  return (
    <section id="parcours" className="pt-34">
      <Container>
        <div className="mb-10">
          <h2 className="font-jersey text-[80px] leading-none tracking-[1px] max-sm:text-[44px]">Le parcours</h2>
          <p className="mt-3 font-caveat font-semibold text-[24px] text-pink">dix ans de chemin, de 2016 à aujourd'hui.</p>
        </div>

        <div className="relative">
          {/* Dotted timeline crossing the icon column, hidden when the layout wraps: */}
          <div className="absolute bottom-0 top-0 left-[226px] border-l-4 border-dotted border-line max-md:hidden" aria-hidden={true} />

          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
};
