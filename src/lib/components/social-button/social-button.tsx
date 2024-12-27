import type { ReactElement } from "react";
import type { SocialButtonProps } from "./social-buton.type";
import { Icon } from "#source/lib/components/icon";

export const SocialButton = ({ logoSrc, alt, ...props }: SocialButtonProps): ReactElement => {
  return (
    <a className="transition-transform hover:scale-95 hover:brightness-105" {...props}>
      <Icon src={logoSrc} alt={alt} size={24} />
    </a>
  );
};
