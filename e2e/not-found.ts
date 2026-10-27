import { expect, test } from "@playwright/test";

/**
 * Ensures unknown URLs return a real HTTP 404 status (not just a 404-looking page)
 * and that the not-found content renders. The status matters for crawlers.
 */
test("returns an HTTP 404 status for unknown URLs", async ({ page }): Promise<void> => {
  // Navigate to an unknown URL:
  const response = await page.goto("/this-page-does-not-exist");

  // Check the HTTP status:
  expect(response?.status()).toBe(404);

  // Check the not-found content:
  await expect(page.getByText("404", { exact: true })).toBeVisible();
  await expect(page.getByText("Cette page n'existe pas.", { exact: true })).toBeVisible();
});
