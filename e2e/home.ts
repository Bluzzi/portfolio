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
  await expect(page.getByRole("heading", { name: "Camille Dugas" })).toBeVisible();

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
  const total = await page.getByRole("img").count();
  expect(total).toBeGreaterThan(0);

  // Scroll through the page so below-the-fold lazy images start loading:
  await page.evaluate(async (): Promise<void> => {
    return new Promise((resolve): void => {
      const scrollToNext = (): void => {
        window.scrollBy(0, 600);
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          resolve();
          return;
        }
        window.setTimeout(scrollToNext, 50);
      };
      scrollToNext();
    });
  });

  // Wait until every image finished loading:
  await page.waitForFunction((): boolean => {
    return Array.from(document.images).every((image): boolean => image.complete);
  });

  // List broken images (a broken image has naturalWidth === 0):
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

  // Count the skill links inside the backpack section (17 category tags + the 20 visible
  // occasional skills, before expanding the list):
  await expect(page.locator("#sac").getByRole("link")).toHaveCount(37);
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
  await expect(experience.getByText("2022 – 2023", { exact: true })).toBeVisible();
  await expect(experience.getByText("6 mois", { exact: true })).toBeVisible();
});

/**
 * Ensures the Email contact link exists exactly once and points to the expected
 * address: a wrong email is a fully silent failure for visitors. Strict mode
 * enforces uniqueness (fails if the link is missing or duplicated).
 */
test("exposes a single correct mailto link", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Select the Email link by its accessible name:
  const emailLink = page.getByRole("link", { name: "m'écrire un message →" });

  // Check its href (strict mode fails if there is no match or several):
  await expect(emailLink).toHaveAttribute("href", "mailto:contact@camilledugas.me");
});

/**
 * Same guard for the Cal.com booking link: a wrong booking URL silently
 * sends visitors to someone else's calendar. Strict mode enforces uniqueness.
 */
test("exposes a single correct Cal.com link", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Select the booking link by its accessible name:
  const calLink = page.getByRole("link", { name: "réserver un appel" });

  // Check its href (strict mode fails if there is no match or several):
  await expect(calLink).toHaveAttribute("href", "https://cal.com/camilledugas/30min");
});
