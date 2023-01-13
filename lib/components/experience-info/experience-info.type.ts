import { Experience } from "$lib/configs/experience";
import { HTMLAttributes } from "react";
import type { LabelColor } from "$lib/components/label";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
}