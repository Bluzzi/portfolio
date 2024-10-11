import type { ReactElement } from "react";
import { Text } from "#source/lib/components/text";
import { SocialButton } from "#source/lib/components/social-button";
import Image from "next/image";

export function AboutSection(): ReactElement {
  return (
    <div className="flex justify-between gap-16">
      <div className="space-y-5">
        <Text size="3xl">Camille Dugas</Text>

        <Text color="gray">
          Développeur Full-Stack depuis 2016, spécialisé dans l{"'"}écosystème TypeScript.
        </Text>

        <div className="flex items-center gap-4">
          <SocialButton href="https://github.com/Bluzzi" target="_blank" logoSrc="/socials/github.svg" alt="GitHub" />
          <SocialButton href="mailto:contact@camilledugas.me" target="_blank" logoSrc="/socials/gmail.svg" alt="Email" />
          <SocialButton href="https://www.linkedin.com/in/camille-dugas" target="_blank" logoSrc="/socials/linkedin.svg" alt="LinkedIn" />
        </div>
      </div>

      <div className="relative h-32 w-32 rounded-lg rotate-3 hover:-rotate-2 transition-transform hover:border border-white cursor-crosshair shrink-0 sm:hidden">
        <Image src="/camille.jpg" alt="Profile picture" fill className="rounded-lg" />
      </div>
    </div>
  );
}