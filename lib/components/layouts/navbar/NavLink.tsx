import { ReactElement, ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}
  
export default function NavLink({ children, href }: NavLinkProps) : ReactElement {
  return (
    <Link href={href}>
      <a 
        className="text-base text-white transition-colors 
        hover:underline hover:text-primary-normal"
      >
        {children}
      </a>
    </Link>
  );
}