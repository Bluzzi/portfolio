import { expect, test } from "@playwright/test";

/**
 * Ensures the root ErrorBoundary renders the dedicated error page when a route fails.
 * A POST on an action-less route makes React Router throw a 405 to the boundary, which
 * exercises the real SSR error path with no test-only route involved:
 */
test("renders the error page from the root error boundary", async ({ request }): Promise<void> => {
  // Send an unsupported method to trigger the boundary:
  const response = await request.post("/");

  // Check the HTTP status:
  expect(response.status()).toBe(405);

  // React escapes quotes and apostrophes in SSR markup, so unescape them before matching:
  const html = (await response.text()).replaceAll("&#x27;", "'").replaceAll("&quot;", "\"");

  // Check the error page markup:
  expect(html).toContain("405 Method Not Allowed");
  expect(html).toContain("aïe… le feu s'est éteint");
  expect(html).toContain("détail de l'erreur");
  expect(html).toContain("↻ réessayer");
  expect(html).toContain("← retour au camp");
});

/**
 * Ensures the way home from the error page works: a dead escape link would trap visitors
 * on a broken state with no way out.
 */
test("navigates home from the error page", async ({ page }): Promise<void> => {
  // A POST cannot be triggered by page.goto, so upgrade the document request to a POST on
  // the fly to render the boundary in a real browser, then remove the interception so the
  // escape link navigates normally:
  await page.route("**/*", async (route): Promise<unknown> => {
    return route.request().resourceType() === "document" ? route.continue({ method: "POST" }) : route.continue();
  });
  await page.goto("/");
  await page.unroute("**/*");

  // Check the error page rendered:
  await expect(page.getByText("aïe… le feu s'est éteint")).toBeVisible();

  // Follow the way back home:
  await page.getByRole("link", { name: "← retour au camp" }).click();

  // Check the homepage rendered:
  await expect(page.getByRole("heading", { name: "Camille Dugas" })).toBeVisible();
});
