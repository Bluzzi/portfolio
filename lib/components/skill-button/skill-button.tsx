import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { SkillButtonProps } from "./skill-button.type";
import { Icon } from "$lib/components/icon";
import Link from "next/link";

export function SkillButton({ title, logoSrc, link }: SkillButtonProps): ReactElement {
  return (
    <Link href={link} target="_blank">
      <span className="flex items-center gap-2 border border-gray hover:border-white rounded py-1 px-2 w-fit">
        <Icon src={logoSrc} alt={title} size={22} />
        <Text>{title}</Text>
      </span>
    </Link>
  );
}