import type { ReactElement } from "react";
import { SkillButton } from "#/lib/components/skill-button";
import { skills } from "#/lib/configs/skill";

export const SkillSection = (): ReactElement => {
  return (
    <section aria-label="Compétences" className="flex flex-wrap gap-2">
      {skills.map((skill) => <SkillButton key={skill.title} title={skill.title} logoSrc={skill.logo} link={skill.link} />)}
    </section>
  );
};
