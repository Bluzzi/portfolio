import type { ReactElement } from "react";
import { ExperienceInfo } from "#source/lib/components/experience-info";
import { experiences } from "#source/lib/configs/experience";

export function ExperienceSection(): ReactElement {
  return <>{experiences.map((experience, index) => <ExperienceInfo key={index} experience={experience} className="my-5" />)}</>;
}