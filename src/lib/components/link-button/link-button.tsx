import type { ReactElement } from "react";
import type { LinkButtonProps } from "./link-button.type";

export function LinkButton({ children, ...props }: LinkButtonProps): ReactElement {
  return <a className="rounded border border-gray py-1 px-5 text-white hover:border-white" {...props}>{children}</a>;
}