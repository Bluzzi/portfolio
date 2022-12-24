import { LinkButton } from "$lib/components/link-button";
import { ReactElement } from "react";

export function LinkSection(): ReactElement {
  return (
    <div className="flex gap-2 flex-wrap">
      <LinkButton href="https://github.com/Bluzzi">GitHub</LinkButton>
      <LinkButton href="https://www.linkedin.com/in/camille-dugas">LinkedIn</LinkButton>
      <LinkButton href="https://www.malt.fr/profile/camilledugas">Malt</LinkButton>
      <LinkButton href="mailto:camilledugas.pro@gmail.com">Email</LinkButton>
    </div>
  );
}