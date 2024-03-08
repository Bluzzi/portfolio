import type { Experience } from "#source/lib/configs/experience";
import type { HTMLAttributes } from "react";
import type { LabelColor } from "#source/lib/components/label";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
}