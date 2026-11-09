import type { ReactElement } from "react";

// Test-only route whose render always throws, so e2e tests can render the root ErrorBoundary
// page with a plain navigation. Always registered, so it ships in production builds: visiting
// /error-test just renders the error page. In production React Router sanitizes the thrown
// message to "Unexpected Server Error", which the e2e test asserts:
export default function ErrorTestRoute(): ReactElement {
  throw new Error("Erreur de chargement des données (test)");
}
