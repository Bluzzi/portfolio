import { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from "react";
import Button from "../elements/Button";
import Link from "next/link";
import Line from "../elements/geometry/Line";
import Image from "next/image";
import classNames from "classnames";

// BurgerButton component :
interface BurgerButton {
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
}

function BurgerButton({ setActive, active }: BurgerButton) : ReactElement {
  return (
    <span 
      className="fixed right-1 bottom-1 hidden lg:z-20 lg:flex lg:items-center lg:justify-center" 
      onClick={() => setActive(value => !value)}
    >
      <Image 
        src={active ? "/images/icons/navigation/xmark-white.svg" : "/images/icons/navigation/bars-white.svg"} 
        alt="Navbar button" height={38} width={38}
      />
    </span>
  );
}

// NavElement component :
interface NavElementProps {
  children: ReactNode;
  href: string;
}

function NavElement({ children, href }: NavElementProps) : ReactElement {
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

// Navbar component :
export default function Navbar() : ReactElement {
  const [active, setActive] = useState(false);

  const activeCss = classNames({ "lg:hidden": !active });

  return (
    <div>
      <BurgerButton active={active} setActive={setActive} />

      <div className={`h-navbar relative lg:bg-black lg:h-screen ${activeCss}`}>
        <span className="w-full absolute top-0 left-0"><Line /></span>

        <div className="h-full flex justify-between items-end lg:justify-evenly lg:flex-col lg:items-center">
          <nav className="flex items-baseline gap-12 ml-16 lg:flex-col lg:items-center lg:m-0">
            <NavElement href="/">Home</NavElement>
            <NavElement href="/#about">About</NavElement>
            <NavElement href="/#skills">Skills</NavElement>
            <NavElement href="/blog">Blog</NavElement>
          </nav>

          <div className="mr-16 lg:m-0">
            <Button href="/#contact">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}