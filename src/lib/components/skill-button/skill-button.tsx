import type { SkillButtonProps } from "./skill-button.type";
import type { ReactElement } from "react";
import { Text } from "#source/lib/components/text";
import Link from "next/link";

export const SkillButton = ({ title, logoSrc, link }: SkillButtonProps): ReactElement => {
  return (
    <Link href={link} target="_blank">
      <span className="flex items-center gap-2 w-fit rounded border border-gray-500 py-1 px-2 hover:border-white">
        <img src={logoSrc} alt={title} className="size-5.5 object-contain" />
        <Text>{title}</Text>
      </span>
    </Link>
  );
};
