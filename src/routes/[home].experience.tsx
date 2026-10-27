import type { ReactElement } from "react";
import { ExperienceInfo } from "#/lib/components/experience-info";
import { experiences } from "#/lib/configs/experience";

export const ExperienceSection = (): ReactElement => {
  return <>{experiences.map((experience) => <ExperienceInfo key={experience.dateFormat.start} experience={experience} className="my-5" />)}</>;
};
