import { ReactElement } from "react";
import { SkillButton } from "$lib/components/skill-button";
import { skills } from "$lib/configs/skill";

export function SkillSection(): ReactElement {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => <SkillButton key={skill.title} title={skill.title} logoSrc={skill.logo} link={skill.link} />)}
    </div>
  );
}