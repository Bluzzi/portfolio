import type { ReactElement } from "react";
import { ExperienceInfo } from "#/lib/components/experience-info";
import { SectionTitle } from "#/lib/components/section-title";
import { experiences } from "#/lib/configs/experience";

export const ExperienceSection = (): ReactElement => {
  // Oldest experience drives the subtitle:
  const oldestExperience = experiences.at(-1);

  return (
    <section aria-label="Expériences" className="space-y-8">
      <SectionTitle
        title="Parcours"
        accent="professionnel"
        subtitle={oldestExperience ? `De ${String(oldestExperience.date.start.year())} à aujourd'hui.` : undefined}
      />

      {/* Timeline rail: */}
      <div className="relative space-y-5 before:absolute before:inset-y-3 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-volt/80 before:via-volt/40 before:to-transparent">
        {experiences.map((experience) => <ExperienceInfo key={experience.company} experience={experience} className="pl-9" />)}
      </div>
    </section>
  );
};
