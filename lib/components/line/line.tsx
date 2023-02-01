import { ReactElement } from "react";
import { LineProps } from "./line.type";
import { cx } from "classix";

export function Line({ className, ...props }: LineProps): ReactElement {
  return <span className={cx(className, "block bg-gray h-[1px] w-full")} {...props} />;
}