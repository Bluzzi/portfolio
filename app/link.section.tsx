import { LinkButton } from "$lib/components/link-button";
import { ReactElement } from "react";

export function LinkSection(): ReactElement {
  return (
    <div className="flex gap-2 flex-wrap">
      <LinkButton href="https://github.com/Bluzzi" target="_blank">GitHub</LinkButton>
      <LinkButton href="https://www.linkedin.com/in/camille-dugas" target="_blank">LinkedIn</LinkButton>
      <LinkButton href="https://www.malt.fr/profile/camilledugas" target="_blank">Malt</LinkButton>
      <LinkButton href="mailto:camilledugas.pro@gmail.com" target="_blank">Email</LinkButton>
    </div>
  );
}