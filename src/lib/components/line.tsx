import type { HTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

export type LineProps = HTMLAttributes<HTMLDivElement>;

export const Line = ({ className, ...props }: LineProps): ReactElement => {
  return (
    <span aria-hidden className={clsx(className, "relative block h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-white/15 to-transparent")} {...props}>
      {/* Current pulse traveling along the wire: */}
      <span className="travel-pulse" />
    </span>
  );
};
