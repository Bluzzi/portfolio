import { ReactElement } from "react";
import { SkillButton } from "$lib/components/skill-button";
import { skills } from "$lib/configs/skill";
import { tw } from "typewind";

export function SkillSection(): ReactElement {
  return (
    <div className={tw.flex.flex_wrap.gap_2}>
      {skills.map(skill => <SkillButton key={skill.title} title={skill.title} logoSrc={skill.logo} link={skill.link} />)}
    </div>
  );
}