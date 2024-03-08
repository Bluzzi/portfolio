import type { ReactElement } from "react";
import { Text } from "#/components/text";
import Image from "next/image";

export function AboutSection(): ReactElement {
  return (
    <div className="flex justify-between gap-16">
      <div className="space-y-5">
        <Text size="3xl">Camille Dugas</Text>

        <Text color="gray">
          Développeur full-stack depuis 2016, spécialisé dans l{"'"}écosystème TypeScript.
        </Text>
      </div>

      <div className="relative h-32 w-32 shrink-0 rounded-full sm:hidden">
        <Image src="/bluzzi.jpg" alt="Profile picture" fill className="rounded-full border-2" />
      </div>
    </div>
  );
}