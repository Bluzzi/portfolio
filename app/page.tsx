import { LinkButton } from "$lib/components/link-button";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className="grid place-content-center h-screen">
      <p className="text-white">Hello world!</p>

      <LinkButton href="https://twitter.com/Bluzzi">About me</LinkButton>
    </div>
  );
}