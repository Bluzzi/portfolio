import { LinkButton } from "$lib/components/link-button";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className="grid place-content-center gap-2 h-screen">
      <p className="text-white">Mon portfolio est en création...</p>

      <div className="flex gap-3 flex-wrap">
        <LinkButton href="https://github.com/Bluzzi">GitHub</LinkButton>
        <LinkButton href="https://www.malt.fr/profile/camilledugas">Malt</LinkButton>
        <LinkButton href="https://www.linkedin.com/in/camille-dugas/">LinkedIn</LinkButton>
      </div>
    </div>
  );
}