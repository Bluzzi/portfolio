import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { LabelProps } from "./label.type";
import { FiExternalLink } from "react-icons/fi";
import { cx } from "classix";

export function Label({ text, color, link }: LabelProps): ReactElement {
  const Tag = link ? "a" : "span";

  return (
    <Tag href={link} target="_blank" rel="noreferrer">
      <Text
        size="small"
        className={cx(
          "rounded uppercase px-1",

          link && "flex gap-1 items-center hover:brightness-110",

          color === "blue" && "bg-blue text-white",
          color === "green" && "bg-green text-white"
        )}
      >
        <span>{text}</span>

        {link && <FiExternalLink />}
      </Text>
    </Tag>
  );
}