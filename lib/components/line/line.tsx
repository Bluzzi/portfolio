import { ReactElement } from "react";
import { LineProps } from "./line.type";
import { cx } from "classix";
import { tw } from "typewind";

export function Line({ className, ...props }: LineProps): ReactElement {
  return <span className={cx(className, tw.block.bg_gray.h_["1px"].w_full)} {...props} />;
}