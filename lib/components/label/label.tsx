import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { LabelProps } from "./label.type";
import { FiExternalLink } from "react-icons/fi";
import { clsx } from "clsx";
import { tw } from "typewind";

export function Label({ text, color, link }: LabelProps): ReactElement {
  const Tag = link ? "a" : "span";

  return (
    <Tag href={link} target="_blank" rel="noreferrer">
      <Text
        size="small"
        className={clsx(
          tw.rounded.uppercase.px_1,

          {
            [tw.flex.gap_1.items_center.hover(tw.brightness_110)]: link,

            [tw.bg_blue.text_white]: color === "blue",
            [tw.bg_green.text_white]: color === "green"
          }
        )}
      >
        <span>{text}</span>

        {link && <FiExternalLink />}
      </Text>
    </Tag>
  );
}