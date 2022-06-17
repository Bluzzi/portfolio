import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface TextProps {
  children: ReactNode;

  // p = default
  type?: "p" | "h3" | "h2" | "h1";

  // white = default, primary is only for links
  color?: "white" | "black" | "gray" | "primary";
  
  // base = default
  size?: "base" | "large" | "xl" | "2xl" | "3xl";
};

export default function Text({ children, type, color, size }: TextProps) : ReactElement {
  const css = classNames({
    // Text color :
    "text-white": !color || color === "white",
    "text-black": color === "black",
    "text-gray": color === "gray",

    // Font size :
    "text-base": !size || size === "base",
    "text-lg": size === "large",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl"
  });

  const Tag = type ?? "p";

  return <Tag className={css}>{children}</Tag>;
};