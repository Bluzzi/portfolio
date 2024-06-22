import type { ReactElement } from "react";
import type { SkillButtonProps } from "./skill-button.type";
import { Text } from "#source/lib/components/text";
import { Icon } from "#source/lib/components/icon";
import Link from "next/link";

export function SkillButton({ title, logoSrc, link }: SkillButtonProps): ReactElement {
  return (
    <Link href={link} target="_blank">
      <span className="flex items-center gap-2 w-fit rounded border border-gray-500 py-1 px-2 hover:border-white">
        <Icon src={logoSrc} alt={title} size={22} />
        <Text>{title}</Text>
      </span>
    </Link>
  );
}