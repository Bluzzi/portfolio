import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { LabelProps } from "./label.type";
import { clsx } from "clsx";

export function Label({ children, color }: LabelProps): ReactElement {
  return (
    <span>
      <Text
        size="small"
        className={clsx("rounded px-1", {
          "bg-blue text-white": color === "blue",
          "bg-green text-white": color === "green"
        })}
      >
        {children}
      </Text>
    </span>
  );
}