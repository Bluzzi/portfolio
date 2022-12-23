import { Text } from "$lib/components/text";
import { ReactElement } from "react";
import Image from "next/image";

export default function Home(): ReactElement {
  return (
    <>
      <div className="mx-auto w-1/2 flex flex-col mt-24">
        {/* Name and profile picture */}
        <div className="flex justify-between gap-16">
          <div className="space-y-3">
            <Text size="3xl">Camille Dugas</Text>

            <Text size="large" color="gray">Développeur front-end • React • NextJS • TypeScript</Text>

            <Text color="gray">
              I{"'"}m a passionate front-end developer since 2016.
              I mainly work with the technologies proposed by the NodeJS universe to create modern web applications.
            </Text>
          </div>

          <div className="border-2 border-white rounded-full h-40 w-40 relative flex-shrink-0">
            <Image src="/bluzzi.jpg" alt="Profile picture" fill className="rounded-full border-2" />
          </div>
        </div>

        {/* ... */}
      </div>
    </>
  );
}