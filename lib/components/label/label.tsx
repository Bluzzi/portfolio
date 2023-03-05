import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { LabelProps } from "./label.type";
import { FiExternalLink } from "react-icons/fi";
import { cx } from "classix";
import { tw } from "typewind";

export function Label({ text, color, link }: LabelProps): ReactElement {
  const Tag = link ? "a" : "span";

  return (
    <Tag href={link} target="_blank" rel="noreferrer">
      <Text
        size="small"
        className={cx(
          tw.rounded.uppercase.px_1,

          link && tw.flex.gap_1.items_center.hover(tw.brightness_110),

          color === "blue" && tw.bg_blue.text_white,
          color === "green" && tw.bg_green.text_white,
        )}
      >
        <span>{text}</span>

        {link && <FiExternalLink />}
      </Text>
    </Tag>
  );
}