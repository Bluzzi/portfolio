import { expect, test } from "@playwright/test";

/**
 * Ensures unknown URLs return a real HTTP 404 status (not just a 404-looking page)
 * and that the not-found content renders. The status matters for crawlers.
 */
test("returns an HTTP 404 status for unknown URLs", async ({ page }): Promise<void> => {
  // Navigate to an unknown URL, watching for the lost hiker sprite network request. The
  // sprite is a CSS background image (not an <img>), so the every-image check on the home
  // page cannot cover it, and the watcher must be registered before the navigation:
  const sprite = page.waitForResponse((response): boolean => response.url().endsWith("/images/lost-hiker.png"));
  const response = await page.goto("/this-page-does-not-exist");
  expect((await sprite).status()).toBe(200);

  // Check the HTTP status:
  expect(response?.status()).toBe(404);

  // Check the not-found content:
  await expect(page.getByText("404", { exact: true })).toBeVisible();
  await expect(page.getByText("Cette page n'existe pas, ou plus. Pas de panique, le campement n'est pas loin et le feu est encore allumé.", { exact: true })).toBeVisible();

  // Check the call to action targets:
  await expect(page.getByRole("link", { name: "← retour au camp" })).toHaveAttribute("href", "/");
  await expect(page.getByRole("link", { name: "voir mon parcours" })).toHaveAttribute("href", "/#parcours");
});

/**
 * Ensures the way home from the not-found page actually works: a dead call to action
 * would trap lost visitors on the error page with no way out.
 */
test("navigates home from the not-found call to action", async ({ page }): Promise<void> => {
  // Navigate to an unknown URL:
  await page.goto("/this-page-does-not-exist");

  // Follow the way back home:
  await page.getByRole("link", { name: "← retour au camp" }).click();

  // Check the homepage rendered:
  await expect(page.getByRole("heading", { name: "Camille Dugas" })).toBeVisible();
});
