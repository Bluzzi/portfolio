import { expect, test } from "@playwright/test";

// Hero navigation entries, the section ids are the tested contract:
const navLinks = [
  { label: "sorties", id: "sorties" },
  { label: "savoir-faire", id: "savoir-faire" },
  { label: "parcours", id: "parcours" },
  { label: "sac à dos", id: "sac" },
  { label: "contact", id: "contact" },
];

/**
 * Ensures every hero navigation link scrolls to its section. A broken anchor (renamed
 * section id, typo in a href) points into the void with no console error and leaves
 * the visitor where they were.
 */
test("scrolls to each section from the hero navigation", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  for (const link of navLinks) {
    // Click the navigation link:
    await page.getByRole("link", { name: link.label, exact: true }).click();

    // Check the URL hash and that the target section reached the viewport:
    await expect(page).toHaveURL(new RegExp(`#${link.id}$`, "u"));
    await expect(page.locator(`#${link.id}`)).toBeInViewport();
  }
});

/**
 * Ensures the hero call to action leads to the journey section like its nav link:
 * the CTA is the main entry point of the page, a dead one silently breaks it.
 */
test("scrolls to the journey section from the hero call to action", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Check the anchor target, then click the call to action:
  const cta = page.getByRole("link", { name: "voir mon parcours →" });
  await expect(cta).toHaveAttribute("href", "#parcours");
  await cta.click();

  // Check the URL hash and that the journey section reached the viewport:
  await expect(page).toHaveURL(/#parcours$/u);
  await expect(page.locator("#parcours")).toBeInViewport();
});
