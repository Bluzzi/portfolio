import type { LabelColor } from "#source/lib/components/label";
import type { Experience } from "#source/lib/configs/experience";
import type { HTMLAttributes } from "react";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
};
