import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Button from "../elements/Button";
import Link from "next/link";

// NavElement component :
interface NavElementProps {
  children: ReactNode;
  href: string;
}

const NavElement: FunctionComponent<NavElementProps> = ({ children, href }) => (
  <Link href={href}>
    <a 
      className="text-white cursor-pointer transition-colors 
      hover:underline hover:text-primary-normal"
    >
      {children}
    </a>
  </Link>
);

// Navbar component :
const Navbar: FunctionComponent = () => {
  return (
    <div className="h-navbar flex flex-col justify-between">
      <hr className="h-0.5 w-full bg-primary-normal" />

      <div className="flex justify-between items-center">
        <nav className="flex items-baseline gap-12 ml-16">
          <NavElement href="/">Home</NavElement>
          <NavElement href="/#about">About</NavElement>
          <NavElement href="/#skills">Skills</NavElement>
          <NavElement href="/blog">Blog</NavElement>
        </nav>

        <span className="mr-16">
          <Button href="#">Contact</Button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;