import { ReactElement } from "react";
import { Text } from "#/components/text";
import { LabelProps } from "./label.type";
import { FiExternalLink } from "react-icons/fi";
import { clsx } from "clsx";

export function Label({ text, color, link }: LabelProps): ReactElement {
  const Tag = link ? "a" : "span";

  return (
    <Tag href={link} target="_blank" rel="noreferrer">
      <Text
        size="small"
        className={clsx(
          "rounded uppercase px-1",

          {
            "flex gap-1 items-center hover:brightness-110": link,

            "bg-blue text-white": color === "blue",
            "bg-green text-white": color === "green"
          }
        )}
      >
        <span>{text}</span>

        {link && <FiExternalLink />}
      </Text>
    </Tag>
  );
}