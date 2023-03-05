import { cx } from "classix";
import { ReactElement } from "react";
import { tw } from "typewind";
import { TextProps } from "./text.type";

export function Text({ children, type, color, size, className, ...props }: TextProps): ReactElement {
  const style = cx(
    className,

    // Text color:
    (!color || color === "white") && tw.text_white,
    color === "black" && tw.text_black,
    color === "gray" && tw.text_gray,

    // Font size:
    size === "small" && tw.text_sm,
    !size || size === "base" && tw.text_base,
    size === "large" && tw.text_lg,
    size === "xl" && tw.text_xl,
    size === "2xl" && tw.text_2xl,
    size === "3xl" && tw.text_3xl
  );

  const Tag = type ?? "p";

  return <Tag className={style} {...props}>{children}</Tag>;
}