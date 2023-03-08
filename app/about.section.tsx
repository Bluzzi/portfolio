import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { tw } from "typewind";
import Image from "next/image";

export function AboutSection(): ReactElement {
  return (
    <div className={tw.flex.justify_between.gap_16}>
      <div className={tw.space_y_5}>
        <Text size="3xl">Camille Dugas</Text>

        <Text color="gray">
          Développeur frontend depuis 2016.
          Spécialisé dans l{"'"}écosystème JavaScript, je travaille principalement avec les frameworks React et Next.
        </Text>
      </div>

      <div className={tw.relative.h_32.w_32.shrink_0.rounded_full.sm(tw.hidden)}>
        <Image src="/bluzzi.jpg" alt="Profile picture" fill className={tw.rounded_full.border_2} />
      </div>
    </div>
  );
}