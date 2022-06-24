import classNames from "clsx";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  large?: boolean;
  href: string;
}

export default function Button({ children, large, href }: ButtonProps) : ReactElement {
  const css = classNames(
    "text-primary-normal px-8 py-2 w-max",
    "rounded-full border-primary-normal border",
    "transition-all hover:bg-primary-transparent",
    {
      "text-xl": !large,
      "text-2xl": large,
    }
  );

  return <Link href={href}><a className={css}>{children}</a></Link>;
}