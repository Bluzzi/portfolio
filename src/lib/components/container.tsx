import type { HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { clsx } from "clsx";

// Shared content wrapper: centered, max-width 1200px with horizontal padding:
export const Container = ({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  return (
    <div className={clsx("relative mx-auto max-w-[1200px] px-10 max-sm:px-5", className)} {...props}>
      {children}
    </div>
  );
};
