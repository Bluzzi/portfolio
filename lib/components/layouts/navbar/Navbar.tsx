import { ReactElement, useState } from "react";
import Button from "../../elements/Button";
import Line from "../../elements/geometry/Line";
import classNames from "clsx";
import BurgerButton from "./BurgerButton";
import NavLink from "./NavLink";

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
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#skills">Skills</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>

          <div className="mr-16 lg:m-0">
            <Button href="/#contact">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}