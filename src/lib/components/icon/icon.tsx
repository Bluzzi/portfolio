import type { IconProps } from "./icon.type";
import type { ReactElement } from "react";

export const Icon = ({ src, alt, size = 22, ...props }: IconProps): ReactElement => {
  return <img src={src} alt={alt} height={size} width={size} {...props} />;
};
