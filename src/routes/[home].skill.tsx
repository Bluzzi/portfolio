import type { ReactElement } from "react";
import { SectionTitle } from "#/lib/components/section-title";
import { SkillButton } from "#/lib/components/skill-button";
import { skills } from "#/lib/configs/skill";

export const SkillSection = (): ReactElement => {
  return (
    <section aria-label="Compétences" className="space-y-8">
      <SectionTitle title="Stack" accent="technique" subtitle="Les outils que j'utilise au quotidien." />

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => <SkillButton key={skill.title} title={skill.title} logoSrc={skill.logo} link={skill.link} />)}
      </div>
    </section>
  );
};
