import type { ReactElement } from "react";
import type { LineProps } from "./line.type";
import { clsx } from "clsx";

export function Line({ className, ...props }: LineProps): ReactElement {
  return <span className={clsx(className, "block bg-gray h-0.5 w-full")} {...props} />;
}