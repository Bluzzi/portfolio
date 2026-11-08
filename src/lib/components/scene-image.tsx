import type { ImgHTMLAttributes, ReactElement } from "react";
import { PixelImage } from "#/lib/components/pixel-image";

export type SceneImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

// Wide pixel scene anchored at the bottom center of a section:
export const SceneImage = ({ src, alt, ...props }: SceneImageProps): ReactElement => {
  return (
    <PixelImage
      className="absolute bottom-0 left-1/2 h-auto w-[3200px] max-w-none -translate-x-1/2 max-[900px]:w-[1600px]"
      src={src}
      alt={alt}
      {...props}
    />
  );
};
