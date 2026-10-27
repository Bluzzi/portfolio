import type { HTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

export type LineProps = HTMLAttributes<HTMLDivElement>;

export const Line = ({ className, ...props }: LineProps): ReactElement => {
  return <span className={clsx(className, "block border-t border-gray-500 w-full")} {...props} />;
};
