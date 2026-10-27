import type { ImgHTMLAttributes, ReactElement } from "react";

export type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;

  size?: number;
};

export const Icon = ({ src, alt, size = 22, ...props }: IconProps): ReactElement => {
  return <img src={src} alt={alt} height={size} width={size} {...props} />;
};
