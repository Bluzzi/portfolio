import type { IconProps } from "./icon.type";
import type { ReactElement } from "react";
import Image from "next/image";

export const Icon = ({ src, alt, size = 22, ...props }: IconProps): ReactElement => {
  return <Image src={src} alt={alt} height={size} width={size} {...props} />;
};
