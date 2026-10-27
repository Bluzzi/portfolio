import type { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { data } from "react-router";

export const loader = () => data(null, { status: 404 });

const NotFound = (): ReactElement => {
  return (
    <div className="space-y-5">
      <Text size="3xl">404</Text>

      <Text color="gray">Cette page n'existe pas.</Text>
    </div>
  );
};

export default NotFound;
