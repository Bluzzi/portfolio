import { expect, test } from "@playwright/test";

/**
 * Ensures the root ErrorBoundary renders the dedicated error page when a route throws:
 * status propagated to the document, extinguished fire scene loaded, title, detail box
 * and actions. The /__error route is registered only for e2e runs (E2E_ERROR_ROUTE).
 */
test("renders the error page from the root error boundary", async ({ page }): Promise<void> => {
  // Navigate to the test-only route that always throws, waiting for the error scene:
  const scene = page.waitForResponse((response): boolean => response.url().includes("/backgrounds/scene-error.png"));
  const response = await page.goto("/__error");
  expect((await scene).status()).toBe(200);

  // Check the HTTP status:
  expect(response?.status()).toBe(500);

  // Check the error page content:
  await expect(page.getByText("Quelque chose s'est mal passé", { exact: true })).toBeVisible();
  await expect(page.getByText("aïe… le feu s'est éteint")).toBeVisible();
  await expect(page.getByText("détail de l'erreur", { exact: true })).toBeVisible();

  // React Router sanitizes server error messages in production, so the detail box shows
  // a generic placeholder. Only check that it renders with some content:
  const detail = page.locator("p.font-mono");
  await expect(detail).toBeVisible();
  await expect(detail).toHaveText(/\S/u);

  await expect(page.getByRole("button", { name: "↻ réessayer" })).toBeVisible();
});

/**
 * Ensures the way home from the error page works: a dead escape link would trap
 * visitors on a broken state with no way out.
 */
test("navigates home from the error page", async ({ page }): Promise<void> => {
  // Navigate to the test-only route that always throws:
  await page.goto("/__error");

  // Follow the way back home:
  await page.getByRole("link", { name: "← retour au camp" }).click();

  // Check the homepage rendered:
  await expect(page.getByRole("heading", { name: "Camille Dugas" })).toBeVisible();
});
