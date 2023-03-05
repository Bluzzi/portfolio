import { ExperienceInfo } from "$lib/components/experience-info";
import { experiences } from "$lib/configs/experience";
import { ReactElement } from "react";
import { tw } from "typewind";

export function ExperienceSection(): ReactElement {
  return <>{experiences.map((experience, index) => <ExperienceInfo key={index} experience={experience} className={tw.my_5} />)}</>;
}