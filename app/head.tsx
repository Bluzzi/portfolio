import { ReactElement } from "react";

export default function Head(): ReactElement {
  return (
    <>
      <title>Camille Dugas - Portfolio</title>

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="I'm Camille Dugas, a passionate full-stack developer since 2016. I maintly work with React, Next and NestJS."
      />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}