import type { ReactElement } from "react";
import { Container } from "#/lib/components/container";
import { data } from "react-router";

export const loader = () => data(null, { status: 404 });

const NotFound = (): ReactElement => {
  return (
    <Container className="space-y-5 py-16">
      <h1 className="font-jersey text-[64px] leading-none max-sm:text-[40px]">404</h1>
      <p className="text-lavender">Cette page n'existe pas.</p>
    </Container>
  );
};

export default NotFound;
