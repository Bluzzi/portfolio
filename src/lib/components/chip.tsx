import type { ReactElement } from "react";
import { clsx } from "clsx";

export type ChipProps = {
  title: string;
  link?: string;
  onPress?: () => void;
};

// Dashed-border chip used for occasional technologies, as a link or a toggle button:
export const Chip = ({ title, link, onPress }: ChipProps): ReactElement => {
  const className = "inline-block border-2 border-dashed border-line px-3 py-[5px] text-[14px] font-medium text-lavender transition-colors hover:text-amber";

  if (link) {
    return (
      <a className={className} href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
    );
  }

  if (onPress) {
    return (
      <button type="button" className={clsx(className, "cursor-pointer")} onClick={onPress}>
        {title}
      </button>
    );
  }

  return <span className={className}>{title}</span>;
};
