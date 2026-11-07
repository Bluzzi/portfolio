import type { ReactElement, ReactNode } from "react";

export type ButtonProps = {
  href: string;
  children: ReactNode;
};

// Orange pixel button with a hard shadow that presses down on hover:
export const Button = ({ href, children }: ButtonProps): ReactElement => {
  return (
    <a
      className="inline-flex min-h-14 items-center border-3 border-abyss bg-amber px-6.5 font-jersey text-[28px] tracking-[1px] text-abyss shadow-button transition-[translate,box-shadow] duration-[80ms] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-amber-light hover:shadow-button-press"
      href={href}
    >
      {children}
    </a>
  );
};
