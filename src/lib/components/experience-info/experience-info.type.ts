import type { LabelColor } from "#/lib/components/label";
import type { Experience } from "#/lib/configs/experience";
import type { HTMLAttributes } from "react";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
};
