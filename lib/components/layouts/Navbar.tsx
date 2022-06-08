import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Button from "../elements/Button";

// NavElement component :
interface NavElementProps {
  children: ReactNode;
}

const NavElement: FunctionComponent<NavElementProps> = ({ children }) => (
  <a 
    className="text-white-normal cursor-pointer transition-colors 
    hover:underline hover:text-primary-normal"
  >
    {children}
  </a>
);

// Navbar component :
const Navbar: FunctionComponent = () => {
  return (
    <div className="h-navbar flex flex-col justify-between">
      <hr className="h-0.5 w-full bg-primary-normal" />

      <div className="flex justify-between items-center">
        <span className="ml-16">
          <Image src="/avatar.gif" alt="avatar" height={40} width={40} className="rounded-full" />
        </span>

        <nav className="flex items-baseline gap-12 mr-16">
          <NavElement>About</NavElement>
          <NavElement>Skills</NavElement>
          <NavElement>Blog</NavElement>

          <Button>Contact</Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;