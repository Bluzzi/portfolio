import type { ImgHTMLAttributes } from "react";

export type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;

  size?: number;
};
