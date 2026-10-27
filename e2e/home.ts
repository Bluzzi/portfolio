import { expect, test } from "@playwright/test";

/**
 * Ensures the home page responds and every key section renders.
 * The single real user journey: catches SSR crashes, broken builds and blank pages.
 */
test("displays key content from every section", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  const response = await page.goto("/");

  // Check the HTTP status:
  expect(response?.status()).toBe(200);

  // About section:
  await expect(page.getByText("Camille Dugas", { exact: true })).toBeVisible();

  // Skills section:
  await expect(page.getByRole("link", { name: "NodeJS" })).toBeVisible();

  // Experiences section:
  await expect(page.getByText("Ingénieur QA", { exact: true })).toBeVisible();
});

/**
 * Ensures loading the page produces no console errors and no uncaught exceptions.
 * Main safety net against React SSR hydration mismatches and silent asset failures.
 */
test("logs no console errors or uncaught exceptions on load", async ({ page }): Promise<void> => {
  // Collect console errors and uncaught page exceptions:
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message): void => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  page.on("pageerror", (error): void => {
    pageErrors.push(error.message);
  });

  // Navigate to the home page and wait for the network to settle:
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // Check that nothing was logged:
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

/**
 * Ensures every `<img>` in the DOM actually loads (naturalWidth > 0).
 * Image paths are hand-written strings in the configs, which TypeScript cannot verify.
 */
test("loads every image without a 404", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Check that the page contains images:
  const total = await page.locator("img").count();
  expect(total).toBeGreaterThan(0);

  // List broken images (after the "load" event, a broken image has naturalWidth === 0):
  const brokenImages = await page.evaluate((): string[] => {
    return Array.from(document.images).filter((image): boolean => {
      return !image.complete || image.naturalWidth === 0;
    }).map((image): string => {
      return image.src;
    });
  });

  // Check that no image is broken:
  expect(brokenImages).toEqual([]);
});

/**
 * Deliberately brittle assertion on the exact number of rendered skills:
 * any content change must fail the test and force a conscious review.
 */
test("displays the exact expected number of skills", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Count skill links (each skill renders as a link wrapping an <img> served from /skills/):
  await expect(page.locator("a:has(img[src^=\"/skills/\"])")).toHaveCount(18);
});

/**
 * Deliberately brittle assertion on a specific experience: fails as soon as its content
 * or duration formatting drifts. Update it consciously when the content legitimately changes.
 */
test("displays the expected date on the Okosmo experience", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Select one experience block (each experience renders as an <article>):
  const experience = page.getByRole("article").filter({ hasText: "Okosmo" });

  // Check the formatted date range with the computed duration:
  await expect(experience.getByText("11/07/2022 - 18/01/2023 (6 mois)", { exact: true })).toBeVisible();
});

/**
 * Ensures exactly one mailto link exists and points to the expected address:
 * a wrong email is a fully silent failure for visitors.
 */
test("exposes a single correct mailto link", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Select every mailto link:
  const mailtoLinks = page.locator("a[href^=\"mailto:\"]");

  // Check that there is exactly one and it points to the expected address:
  await expect(mailtoLinks).toHaveCount(1);
  await expect(mailtoLinks).toHaveAttribute("href", "mailto:contact@camilledugas.me");
});

/**
 * Ensures holding a mouse press on the profile photo plays the breaking stages and
 * swaps the image to the hidden easter egg. Desktop-only behavior (hidden on small
 * viewports). The assertion auto-waits instead of sleeping, which avoids flakes.
 */
test("breaks the profile photo after holding a mouse press", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Select the profile photo:
  const photo = page.getByRole("img", { name: "Profile picture" });

  // Check the initial state is intact:
  await expect(photo).toHaveAttribute("src", "/camille.jpg");

  // Get the photo position in the viewport:
  const boundingBox = await photo.boundingBox();
  if (!boundingBox) {
    throw new Error("The profile photo is not visible in the desktop viewport");
  }

  // Hold the press at the photo center (the <img> is pointer-events-none, so the events land
  // on its container and bubble up to the breaking handler; while pressed, breaking progress
  // cannot be cancelled):
  await page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
  await page.mouse.down();

  // Wait for the breaking to complete (10 stages × 180ms ≈ 1800ms of holding):
  await expect(photo).toHaveAttribute("src", "/pixelbluzzi.png", { timeout: 5000 });

  // Release the press:
  await page.mouse.up();
});
