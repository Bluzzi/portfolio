import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { SkillProps } from "./skill.type";
import { Icon } from "$lib/components/icon";
import Link from "next/link";

export function Skill({ title, logoSrc, link }: SkillProps): ReactElement {
  return (
    <Link href={link} target="_blank">
      <span className="flex items-center gap-2 border border-gray hover:border-white rounded py-1 px-2 w-fit">
        <Icon src={logoSrc} alt={title} size={22} />
        <Text>{title}</Text>
      </span>
    </Link>
  );
}