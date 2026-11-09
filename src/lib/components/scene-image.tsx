import type { ImgHTMLAttributes, ReactElement } from "react";
import { PixelImage } from "#/lib/components/pixel-image";
import { clsx } from "clsx";

export type SceneImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

// Wide pixel scene anchored at the bottom center of a section, rendered at its natural
// 3200px width so its height always matches the section heights it was designed for:
export const SceneImage = ({ src, alt, className, ...props }: SceneImageProps): ReactElement => {
  return (
    <PixelImage
      className={clsx("absolute bottom-0 left-1/2 h-auto w-[3200px] max-w-none -translate-x-1/2", className)}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
