import type { ReactElement } from "react";
import type { TextProps } from "./text.type";
import { clsx } from "clsx";

export function Text({ children, type, color, size, className, ...props }: TextProps): ReactElement {
  const style = clsx(
    className,

    {
      // Text color:
      "text-white": !color || color === "white",
      "text-black": color === "black",
      "text-gray-400": color === "gray",

      // Font size:
      "text-sm": size === "small",
      "text-base": !size || size === "base",
      "text-lg": size === "large",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-3xl": size === "3xl"
    }
  );

  const Tag = type ?? "p";

  return <Tag className={style} {...props}>{children}</Tag>;
}