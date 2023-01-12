import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import Image from "next/image";

export function AboutSection(): ReactElement {
  return (
    <div className="flex justify-between gap-16">
      <div className="space-y-4">
        <Text size="3xl">Camille Dugas</Text>

        <Text color="gray">
          Développeur frontend depuis 2016.
          Spécialisé dans l{"'"}écosystème JavaScript, je travaille principalement avec les frameworks React et Next.
        </Text>
      </div>

      <div className="border-2 border-white rounded-full h-32 w-32 relative flex-shrink-0 sm:hidden">
        <Image src="/bluzzi.jpg" alt="Profile picture" fill className="rounded-full border-2" />
      </div>
    </div>
  );
}
