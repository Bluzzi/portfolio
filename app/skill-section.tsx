import { ReactElement } from "react";
import { Skill } from "$lib/components/skill";
import skills from "$lib/configs/skill.json";

export function SkillSection(): ReactElement {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => <Skill key={skill.title} title={skill.title} logoSrc={skill.logo} link={skill.link} />)}
    </div>
  );
}