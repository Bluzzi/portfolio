import { LinkButton } from "$lib/components/link-button";
import { ReactElement } from "react";

export function ContactSection(): ReactElement {
  return (
    <div className="flex gap-3 flex-wrap">
      <LinkButton href="#">GitHub</LinkButton>
      <LinkButton href="#">LinkedIn</LinkButton>
      <LinkButton href="#">Malt</LinkButton>
    </div>
  );
}