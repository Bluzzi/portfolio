import type { ReactElement } from "react";
import { LinkButton } from "#source/lib/components/link-button";

export function LinkSection(): ReactElement {
  return (
    <div className="flex flex-wrap gap-2">
      <LinkButton href="https://github.com/Bluzzi" target="_blank">GitHub</LinkButton>
      <LinkButton href="https://www.linkedin.com/in/camille-dugas" target="_blank">LinkedIn</LinkButton>
      <LinkButton href="https://www.malt.fr/profile/camilledugas" target="_blank">Malt</LinkButton>
      <LinkButton href="mailto:contact@camilledugas.me" target="_blank">Email</LinkButton>
    </div>
  );
}