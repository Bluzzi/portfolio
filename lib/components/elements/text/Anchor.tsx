import classNames from "classnames";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface AnchorProps {
  children: ReactNode;
  href: string;
};

const Anchor: FunctionComponent<AnchorProps> = ({ children, href }) => {
  const css = classNames(
    "text-white cursor-pointer transition-colors",
    "underline underline hover:text-primary-normal"
  );

  return <Link href={href}><a className={css}>{children}</a></Link>;
};

export default Anchor;