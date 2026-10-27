import type { PropsWithChildren, HTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

export type TextProps = PropsWithChildren & HTMLAttributes<HTMLParagraphElement> & {
  type?: "p" | "h3" | "h2" | "h1";
  color?: "white" | "black" | "gray";
  size?: "small" | "base" | "large" | "xl" | "2xl" | "3xl";
};

export const Text = ({ children, type, color, size, className, ...props }: TextProps): ReactElement => {
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
      "text-3xl": size === "3xl",
    },
  );

  const Tag = type ?? "p";

  return <Tag className={style} {...props}>{children}</Tag>;
};
