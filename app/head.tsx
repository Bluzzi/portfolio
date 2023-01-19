import { ReactElement } from "react";

export default function Head(): ReactElement {
  return (
    <>
      <title>Camille Dugas - Portfolio</title>

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Développeur frontend depuis 2016. Spécialisé dans l'écosystème JavaScript,
          je travaille principalement avec les frameworks React et Next."
      />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}