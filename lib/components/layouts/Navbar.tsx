import { FunctionComponent, ReactNode } from "react";
import Button from "../elements/Button";
import Link from "next/link";
import Line from "../elements/geometry/Line";

// NavElement component :
interface NavElementProps {
  children: ReactNode;
  href: string;
}

const NavElement: FunctionComponent<NavElementProps> = ({ children, href }) => (
  <Link href={href}>
    <a 
      className="text-base text-white transition-colors 
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
      <Line />

      <div className="flex justify-between items-center">
        <nav className="flex items-baseline gap-12 ml-16">
          <NavElement href="/">Home</NavElement>
          <NavElement href="/#about">About</NavElement>
          <NavElement href="/#skills">Skills</NavElement>
          <NavElement href="/blog">Blog</NavElement>
        </nav>

        <div className="mr-16">
          <Button href="/#contact">Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;