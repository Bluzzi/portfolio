import type { AnchorHTMLAttributes, ReactElement } from "react";
import { Icon } from "#/lib/components/icon";

export type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  logoSrc: string;
  alt: string;
};

export const SocialButton = ({ logoSrc, alt, ...props }: SocialButtonProps): ReactElement => {
  return (
    <a
      className="skill-pill group flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-[border-color,background-color,box-shadow] hover:border-volt hover:bg-white/[0.07] hover:shadow-[0_0_26px_-6px_rgb(234_255_61/0.4)]"
      {...props}
    >
      <Icon src={logoSrc} alt={alt} size={20} className="transition-[filter] group-hover:drop-shadow-[0_0_5px_rgb(234_255_61/0.9)]" />
    </a>
  );
};
