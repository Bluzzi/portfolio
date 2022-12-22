import { ReactElement } from "react";
import { LinkButtonProps } from "./link-button.type";

export function LinkButton({ children, ...props }: LinkButtonProps): ReactElement {
  return <a className="text-gray py-2 px-5 rounded border border-gray hover:text-white hover:border-white" {...props}>{children}</a>;
}