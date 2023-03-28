import { ExperienceInfo } from "$lib/components/experience-info";
import { experiences } from "$lib/configs/experience";
import { ReactElement } from "react";

export function ExperienceSection(): ReactElement {
  return <>{experiences.map((experience, index) => <ExperienceInfo key={index} experience={experience} className="my-5" />)}</>;
}