import type { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { clsx } from "clsx";
import { ExternalLinkIcon } from "lucide-react";

export type LabelColor = "blue" | "green";

export type LabelProps = {
  color: LabelColor;
  text: string;
  link?: string;
};

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
