import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  large?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ children, large }) => {
  const css = classNames(
    "text-primary-normal px-8 py-2 w-max",
    "rounded-full border-primary-normal border",
    "transition-all hover:bg-primary-transparent",
    {
      "text-2xl": large,
    }
  );

  return (
    <a href="#" className={css}>{children}</a>
  );
};

export default Button;