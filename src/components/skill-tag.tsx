import type { ReactElement } from "react";

export type SkillTagProps = {
  title: string;
  link?: string;
};

// Solid-bordered tag used inside backpack cards, clickable when a link is provided:
export const SkillTag = ({ title, link }: SkillTagProps): ReactElement => {
  const className = "inline-flex min-h-9 items-center border-2 border-line bg-night px-3.5 font-jersey text-[22px] tracking-[1px] text-cream transition-colors hover:text-amber";

  if (link) {
    return (
      <a className={className} href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
    );
  }

  return <span className={className}>{title}</span>;
};
