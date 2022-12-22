import { ReactElement } from "react";
import { ButtonProps } from "./button.type";

export function Button({ children }: ButtonProps) : ReactElement {
  return <button>{children}</button>;
}