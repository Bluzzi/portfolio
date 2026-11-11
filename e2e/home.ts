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

  // Count the skill links inside the backpack section (19 category tags + the 20 visible
  // occasional skills, before expanding the list):
  await expect(page.locator("#sac").getByRole("link")).toHaveCount(39);
});

/**
 * Ensures the "et aussi" toggle actually expands and collapses the occasional skills
 * list: the count test above never clicks, so a broken toggle would be a silently
 * dead feature. Counts are deliberately brittle and match the config values.
 */
test("expands and collapses the occasional skills list", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Expand the list from the "…" chip (19 category links + 69 occasional links once open):
  const backpack = page.locator("#sac");
  const expand = page.getByRole("button", { name: "…", exact: true });
  await expand.click();
  await expect(backpack.getByRole("link")).toHaveCount(88);

  // Collapse it back from the "réduire ↑" chip:
  const collapse = page.getByRole("button", { name: "réduire ↑", exact: true });
  await expect(collapse).toBeVisible();
  await collapse.click();
  await expect(backpack.getByRole("link")).toHaveCount(39);
  await expect(expand).toBeVisible();
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
 * The contact button keeps its mailto link but also copies the email address to the
 * clipboard on click: a wrong address or a silent copy failure sends visitors away
 * with nothing when their mail client is missing. Clipboard permissions are granted
 * for the test so the copied content can be verified, alongside the link href and
 * the visible confirmation feedback.
 */
test("copies the expected email address on click", async ({ page, context }): Promise<void> => {
  // Grant clipboard access so the copy can be verified:
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);

  // Navigate to the home page:
  await page.goto("/");

  // Select the contact link by its accessible name:
  const emailLink = page.getByRole("link", { name: "m'écrire un message" });

  // Check its href (strict mode fails if there is no match or several):
  await expect(emailLink).toHaveAttribute("href", "mailto:contact@camilledugas.me");

  // Copy the address and check the visible confirmation feedback:
  await emailLink.click();
  await expect(page.getByRole("status")).toHaveText("email copié");

  // Check the copied content:
  await expect.poll(async () => page.evaluate(async () => navigator.clipboard.readText())).toBe("contact@camilledugas.me");
});

/**
 * Same guard for the Cal.com booking link: a wrong booking URL silently
 * sends visitors to someone else's calendar. Strict mode enforces uniqueness.
 */
test("exposes a single correct Cal.com link", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Select the booking link by its accessible name:
  const calLink = page.getByRole("link", { name: "réserver un appel →" });

  // Check its href (strict mode fails if there is no match or several):
  await expect(calLink).toHaveAttribute("href", "https://cal.com/camilledugas/30min");
});

/**
 * Same guard as the email copy and Cal.com tests for the GitHub and LinkedIn profiles:
 * a wrong social URL silently sends visitors to the wrong account. Both occurrences
 * are checked, scoped by location since the backpack also renders a "GitHub" skill
 * chip pointing to github.com.
 */
test("exposes the expected GitHub and LinkedIn links", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Check the hero cluster (capitalized labels):
  const hero = page.locator("#top");
  await expect(hero.getByRole("link", { name: "GitHub", exact: true })).toHaveAttribute("href", "https://github.com/Bluzzi");
  await expect(hero.getByRole("link", { name: "LinkedIn", exact: true })).toHaveAttribute("href", "https://www.linkedin.com/in/camille-dugas");

  // Check the footer (lowercase labels):
  const footer = page.locator("#contact");
  await expect(footer.getByRole("link", { name: "github", exact: true })).toHaveAttribute("href", "https://github.com/Bluzzi");
  await expect(footer.getByRole("link", { name: "linkedin", exact: true })).toHaveAttribute("href", "https://www.linkedin.com/in/camille-dugas");
});

/**
 * Ensures the SSR head metadata stays correct: a broken title or description is
 * invisible in the browser but crawler-visible, and a missing favicon fails
 * silently on every visit.
 */
test("exposes the expected SEO metadata", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Check the document title:
  await expect(page).toHaveTitle("Camille Dugas | Développeur Full-Stack TypeScript");

  // Check the meta description:
  const description = page.locator("meta[name='description']");
  await expect(description).toHaveAttribute("content", "Développeur full-stack TypeScript depuis 2016. Je construis des produits web qui tiennent, et je passe mes week-ends là-haut.");

  // Check the favicon is declared and actually served by the build:
  const favicon = page.locator("link[rel='icon']");
  await expect(favicon).toHaveAttribute("href", "/favicons/favicon.ico");
  expect((await page.request.get("/favicons/favicon.ico")).status()).toBe(200);
});
