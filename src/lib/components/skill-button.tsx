import type { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { Link } from "react-router";

export type SkillButtonProps = {
  title: string;
  logoSrc: string;
  link: string;
};

export const SkillButton = ({ title, logoSrc, link }: SkillButtonProps): ReactElement => {
  return (
    <Link to={link} target="_blank">
      <span className="flex items-center gap-2 w-fit rounded border border-gray-500 py-1 px-2 hover:border-white">
        <img src={logoSrc} alt={title} className="size-5.5 object-contain" />
        <Text>{title}</Text>
      </span>
    </Link>
  );
};
