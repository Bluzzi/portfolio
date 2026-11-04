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
    <Link
      to={link}
      target="_blank"
      className="skill-pill group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] py-2 pr-3.5 pl-3 transition-[border-color,background-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-azure/60 hover:bg-white/[0.07] hover:shadow-[0_8px_24px_-12px_rgb(122_162_247/0.3)]"
    >
      <img src={logoSrc} alt="" className="size-5 object-contain transition-[filter] group-hover:drop-shadow-[0_0_6px_rgb(122_162_247/0.6)]" />
      <Text size="small">{title}</Text>
    </Link>
  );
};
