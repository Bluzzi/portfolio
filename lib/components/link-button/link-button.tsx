import { ReactElement } from "react";
import { LinkButtonProps } from "./link-button.type";

export function LinkButton({ children, ...props }: LinkButtonProps): ReactElement {
  return <a className="text-white py-1 px-5 rounded border border-gray hover:border-white" {...props}>{children}</a>;
}