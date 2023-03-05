import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { SkillButtonProps } from "./skill-button.type";
import { Icon } from "$lib/components/icon";
import { tw } from "typewind";
import Link from "next/link";

export function SkillButton({ title, logoSrc, link }: SkillButtonProps): ReactElement {
  return (
    <Link href={link} target="_blank">
      <span className={tw.flex.w_fit.items_center.gap_2.rounded.border.border_gray.py_1.px_2.hover(tw.border_white)}>
        <Icon src={logoSrc} alt={title} size={22} />
        <Text>{title}</Text>
      </span>
    </Link>
  );
}