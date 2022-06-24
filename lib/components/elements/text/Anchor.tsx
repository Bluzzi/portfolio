import classNames from "clsx";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

interface AnchorProps {
  children: ReactNode;
  href: string;
}

export default function Anchor({ children, href }: AnchorProps) : ReactElement {
  const css = classNames(
    "text-white transition-colors",
    "underline underline hover:text-primary-normal"
  );

  return <Link href={href}><a className={css}>{children}</a></Link>;
}