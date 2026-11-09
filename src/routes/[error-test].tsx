import type { ReactElement } from "react";

// Test-only route whose render always throws, so e2e tests can render the root ErrorBoundary
// page. Registered in routes.ts only when E2E_ERROR_ROUTE is set, never part of production
// builds. Throwing from the render (not from a loader) keeps the original message available
// to the boundary: loader errors are sanitized by React Router in production:
export default function ErrorTestRoute(): ReactElement {
  throw new Error("Erreur de chargement des données (test)");
}
