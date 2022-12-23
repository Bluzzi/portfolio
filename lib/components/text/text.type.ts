import { ParamHTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren & ParamHTMLAttributes<HTMLParagraphElement> & {
  type?: "p" | "h3" | "h2" | "h1";
  color?: "white" | "black" | "gray";
  size?: "base" | "large" | "xl" | "2xl" | "3xl";
}