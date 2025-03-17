import type { LineProps } from "./line.type";
import type { ReactElement } from "react";
import { clsx } from "clsx";

export const Line = ({ className, ...props }: LineProps): ReactElement => {
  return <span className={clsx(className, "block border-t border-gray-500 w-full")} {...props} />;
};
