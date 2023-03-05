import { LinkButton } from "$lib/components/link-button";
import { ReactElement } from "react";
import { tw } from "typewind";

export function LinkSection(): ReactElement {
  return (
    <div className={tw.flex.flex_wrap.gap_2}>
      <LinkButton href="https://github.com/Bluzzi" target="_blank">GitHub</LinkButton>
      <LinkButton href="https://www.linkedin.com/in/camille-dugas" target="_blank">LinkedIn</LinkButton>
      <LinkButton href="https://www.malt.fr/profile/camilledugas" target="_blank">Malt</LinkButton>
      <LinkButton href="mailto:contact@camilledugas.me" target="_blank">Email</LinkButton>
    </div>
  );
}