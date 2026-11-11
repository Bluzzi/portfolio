import type { ReactElement, ReactNode } from "react";
import { clsx } from "clsx";

export type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  newTab?: boolean;
  children: ReactNode;
};

// Button variants, both pressed toward the bottom right on hover:
const variantClasses = {
  primary: "bg-amber text-abyss shadow-button hover:bg-amber-light hover:shadow-button-press",
  secondary: "bg-night text-amber-pale shadow-button-outline hover:bg-card hover:text-white hover:shadow-button-outline-press",
};

// Pixel button with a hard shadow that presses down on hover, rendered as an anchor when href
// is set and as a plain button otherwise, with the click handler passed through in both cases:
export const Button = ({ href, onClick, variant = "primary", newTab = false, children }: ButtonProps): ReactElement => {
  const className = clsx(
    "inline-flex min-h-12 items-center border-3 border-abyss px-5 font-jersey text-[24px] tracking-[1px] transition-[translate,box-shadow] duration-[80ms] sm:min-h-14 sm:px-6.5 sm:text-[28px]",
    "hover:translate-x-[3px] hover:translate-y-[3px]",
    variantClasses[variant],
  );

  if (href === undefined) {
    return (
      <button className={className} type="button" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <a className={className} href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} onClick={onClick}>
      {children}
    </a>
  );
};
