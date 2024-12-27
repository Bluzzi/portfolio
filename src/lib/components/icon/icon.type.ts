import type { ImageProps } from "next/image";

export type IconProps = ImageProps & {
  src: string;
  alt: string;

  size?: number;
};
