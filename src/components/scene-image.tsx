import type { ReactElement, ReactNode } from "react";
import { PixelImage } from "#/lib/components/pixel-image";
import { clsx } from "clsx";

export type SceneImageProps = {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
};

// Wide pixel scene anchored at the bottom center of a section, rendered at its natural
// 3200px width so its height always matches the section heights it was designed for.
// Animated layers render inside the same 3200px coordinate space and the whole scene
// scales as one unit, so the design positions stay valid at every breakpoint:
export const SceneImage = ({ src, alt, className, children }: SceneImageProps): ReactElement => {
  return (
    <div className={clsx("absolute bottom-0 left-1/2 w-[3200px] -translate-x-1/2", className)}>
      <PixelImage className="block h-auto w-full" src={src} alt={alt} />
      {children}
    </div>
  );
};
