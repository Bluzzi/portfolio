import { cx } from "classix";
import { ReactElement } from "react";
import { TextProps } from "./text.type";

export function Text({ children, type, color, size, className, ...props }: TextProps): ReactElement {
  const style = cx(
    className,

    // Text color:
    (!color || color === "white") && "text-white",
    color === "black" && "text-black",
    color === "gray" && "text-gray",

    // Font size:
    size === "small" && "text-sm",
    !size || size === "base" && "text-base",
    size === "large" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",
    size === "3xl" && "text-3xl"
  );

  const Tag = type ?? "p";

  return <Tag className={style} {...props}>{children}</Tag>;
}