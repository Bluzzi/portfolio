import { ReactElement } from "react";
import { tw } from "typewind";
import { LinkButtonProps } from "./link-button.type";

export function LinkButton({ children, ...props }: LinkButtonProps): ReactElement {
  return <a className={tw.rounded.border.border_gray.py_1.px_5.text_white.hover(tw.border_white)} {...props}>{children}</a>;
}