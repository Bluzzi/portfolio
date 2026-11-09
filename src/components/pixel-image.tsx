import type { ImgHTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

export type PixelImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

// Pixel art images must keep their crisp edges when scaled:
export const PixelImage = ({ src, alt, className, ...props }: PixelImageProps): ReactElement => {
  return <img src={src} alt={alt} className={clsx("pixelated", className)} {...props} />;
};
