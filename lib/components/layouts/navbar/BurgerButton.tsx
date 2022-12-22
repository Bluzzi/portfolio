import { Dispatch, ReactElement, SetStateAction } from "react";
import Image from "next/image";

interface BurgerButton {
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
}

export default function BurgerButton({ setActive, active }: BurgerButton) : ReactElement {
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