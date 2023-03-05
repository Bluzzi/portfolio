import { clsx } from "clsx";
import { ReactElement } from "react";
import { tw } from "typewind";
import { TextProps } from "./text.type";

export function Text({ children, type, color, size, className, ...props }: TextProps): ReactElement {
  const style = clsx(
    className,

    {
      // Text color:
      [tw.text_white]: !color || color === "white",
      [tw.text_black]: color === "black",
      [tw.text_gray]: color === "gray",

      // Font size:
      [tw.text_sm]: size === "small",
      [tw.text_base]: !size || size === "base",
      [tw.text_lg]: size === "large",
      [tw.text_xl]: size === "xl",
      [tw.text_2xl]: size === "2xl",
      [tw.text_3xl]: size === "3xl"
    }
  );

  const Tag = type ?? "p";

  return <Tag className={style} {...props}>{children}</Tag>;
}