import { ReactElement } from "react";
import { IconProps } from "./icon.type";
import Image from "next/image";

export function Icon({ src, alt, size = 22, ...props }: IconProps): ReactElement {
  return <Image src={src} alt={alt} height={size} width={size} {...props} />;
}