import { expect, test } from "@playwright/test";

/**
 * Ensures the root ErrorBoundary renders the dedicated error page when a route fails to render.
 * A test-only route that always throws exercises the real SSR error path with a plain navigation,
 * no request interception involved:
 */
test("renders the error page from the root error boundary", async ({ page }): Promise<void> => {
  // Navigate to the test-only route that throws during render:
  const response = await page.goto("/error-test");

  // Check the HTTP status:
  expect(response?.status()).toBe(500);

  // Check the error page content:
  await expect(page.getByText("aïe… le feu s'est éteint")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Quelque chose s'est mal passé" })).toBeVisible();

  // Check the detail box shows the sanitized error, production never leaks internal messages:
  await expect(page.getByText("détail de l'erreur")).toBeVisible();
  await expect(page.getByText("Unexpected Server Error")).toBeVisible();

  // Check both actions:
  await expect(page.getByRole("button", { name: "↻ réessayer" })).toBeVisible();
  await expect(page.getByRole("link", { name: "← retour au camp" })).toBeVisible();
});

/**
 * Ensures the way home from the error page works: a dead escape link would trap visitors
 * on a broken state with no way out.
 */
test("navigates home from the error page", async ({ page }): Promise<void> => {
  // Navigate to the error page:
  await page.goto("/error-test");

  // Follow the way back home:
  await page.getByRole("link", { name: "← retour au camp" }).click();

  // Check the homepage rendered:
  await expect(page.getByRole("heading", { name: "Camille Dugas" })).toBeVisible();
});
