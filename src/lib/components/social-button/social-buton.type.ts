import type { AnchorHTMLAttributes } from "react";

export type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  logoSrc: string;
  alt: string;
};
