import type { Experience } from "#/configs/experience";
import type { HTMLAttributes } from "react";
import type { LabelColor } from "#/components/label";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
}