import type { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { data, Link } from "react-router";

export const loader = () => data(null, { status: 404 });

const NotFound = (): ReactElement => {
  return (
    <div className="space-y-6 py-16 text-center">
      <Text size="5xl" font="display">404</Text>

      <Text color="gray">Cette page n'existe pas.</Text>

      <Link
        to="/"
        className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-white transition-all hover:-translate-y-0.5 hover:border-volt/50"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
