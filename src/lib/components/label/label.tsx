import type { ReactElement } from "react";
import type { LabelProps } from "./label.type";
import { Text } from "#source/lib/components/text";
import { ExternalLinkIcon } from "lucide-react";
import { clsx } from "clsx";

export const Label = ({ text, color, link }: LabelProps): ReactElement => {
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
            "bg-green text-white": color === "green",
          },
        )}
      >
        <span>{text}</span>

        {link && <ExternalLinkIcon size={12} />}
      </Text>
    </Tag>
  );
};
