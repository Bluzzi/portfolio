import { Experience } from "#/configs/experience";
import { HTMLAttributes } from "react";
import type { LabelColor } from "#/components/label";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
}