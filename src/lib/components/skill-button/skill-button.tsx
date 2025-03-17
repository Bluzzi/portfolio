import type { SkillButtonProps } from "./skill-button.type";
import type { ReactElement } from "react";
import { Icon } from "#source/lib/components/icon";
import { Text } from "#source/lib/components/text";
import Link from "next/link";

export const SkillButton = ({ title, logoSrc, link }: SkillButtonProps): ReactElement => {
  return (
    <Link href={link} target="_blank">
      <span className="flex items-center gap-2 w-fit rounded border border-gray-500 py-1 px-2 hover:border-white">
        <Icon src={logoSrc} alt={title} size={22} />
        <Text>{title}</Text>
      </span>
    </Link>
  );
};
