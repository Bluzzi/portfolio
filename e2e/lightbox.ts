import { expect, test } from "@playwright/test";

// First polaroid identity, reused by every test of this file:
const firstPolaroid = "Agrandir la photo (Coucher de soleil sur les montagnes corses depuis Calenzana)";
const firstCaption = "Calenzana";
const firstFullImage = "/hikes/calenzana.jpg";

/**
 * Ensures clicking a polaroid opens the lightbox dialog with its caption and the
 * full-resolution photo. The full photo is only fetched when the dialog opens, so
 * a wrong path in the hikes config stays invisible to every other test.
 */
test("opens the lightbox with the full-resolution photo", async ({ page }): Promise<void> => {
  // Navigate to the home page:
  await page.goto("/");

  // Open the first polaroid:
  await page.getByRole("button", { name: firstPolaroid }).click();

  // Check the dialog and its caption:
  const dialog = page.getByRole("dialog", { name: firstCaption });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText(firstCaption, { exact: true })).toBeVisible();

  // Check the photo swapped from the thumbnail to the full-resolution image,
  // a swap that only happens once the full photo finished loading:
  await expect(dialog.getByRole("img")).toHaveAttribute("src", firstFullImage);

  // Check the background scroll is locked while the lightbox is open:
  await expect.poll(async (): Promise<string> => page.evaluate((): string => document.body.style.overflow)).toBe("hidden");
});

/**
 * Ensures the dedicated close button unmounts the dialog and restores the background
 * scroll. A broken close traps visitors fullscreen with no way back.
 */
test("closes the lightbox via the close button", async ({ page }): Promise<void> => {
  // Navigate to the home page and open the first polaroid:
  await page.goto("/");
  await page.getByRole("button", { name: firstPolaroid }).click();

  const dialog = page.getByRole("dialog", { name: firstCaption });
  await expect(dialog).toBeVisible();

  // Close via the dedicated button:
  await dialog.getByRole("button", { name: "Fermer" }).click();

  // Check the dialog left the DOM once its exit animation finished:
  await expect(dialog).toHaveCount(0);

  // Check the background scroll is unlocked again:
  await expect.poll(async (): Promise<string> => page.evaluate((): string => document.body.style.overflow)).toBe("");
});

/**
 * Ensures the Escape key closes the lightbox: keyboard users otherwise stay trapped
 * in the fullscreen dialog.
 */
test("closes the lightbox via the Escape key", async ({ page }): Promise<void> => {
  // Navigate to the home page and open the first polaroid:
  await page.goto("/");
  await page.getByRole("button", { name: firstPolaroid }).click();

  const dialog = page.getByRole("dialog", { name: firstCaption });
  await expect(dialog).toBeVisible();

  // Close via the Escape key:
  await page.keyboard.press("Escape");

  // Check the dialog left the DOM once its exit animation finished:
  await expect(dialog).toHaveCount(0);
});

/**
 * Ensures clicking the dark backdrop closes the lightbox, the third expected close
 * gesture besides the close button and the Escape key.
 */
test("closes the lightbox via a backdrop click", async ({ page }): Promise<void> => {
  // Navigate to the home page and open the first polaroid:
  await page.goto("/");
  await page.getByRole("button", { name: firstPolaroid }).click();

  const dialog = page.getByRole("dialog", { name: firstCaption });
  await expect(dialog).toBeVisible();

  // Click the top-left corner of the fullscreen backdrop, away from photo and button:
  await dialog.click({ position: { x: 10, y: 10 } });

  // Check the dialog left the DOM once its exit animation finished:
  await expect(dialog).toHaveCount(0);
});

/**
 * Loops over every hike and opens its lightbox: the fullImage paths are hand-written
 * strings TypeScript cannot verify, so one wrong path silently shows a thumbnail
 * (the swap never happens) or a broken photo for that hike only.
 */
test("loads the full-resolution photo of every hike", async ({ page }): Promise<void> => {
  // Every polaroid with its accessible name, caption and expected full-resolution photo:
  const photos = [
    { button: "Agrandir la photo (Coucher de soleil sur les montagnes corses depuis Calenzana)", caption: "Calenzana", src: "/hikes/calenzana.jpg" },
    { button: "Agrandir la photo (Randonneur au sommet du Monte Cinto, face aux nuages)", caption: "Monte Cinto · 2 706 m", src: "/hikes/monte-cinto.jpg" },
    { button: "Agrandir la photo (Aiguilles de Bavella au soleil couchant)", caption: "Aiguilles de Bavella", src: "/hikes/bavella.jpg" },
    { button: "Agrandir la photo (Vue sur la mer depuis les falaises d'Étretat)", caption: "Falaises d'Étretat", src: "/hikes/etretat.jpg" },
  ];

  // Navigate to the home page:
  await page.goto("/");

  for (const photo of photos) {
    // Open the polaroid and check the full-resolution photo:
    await page.getByRole("button", { name: photo.button }).click();
    const dialog = page.getByRole("dialog", { name: photo.caption });
    await expect(dialog.getByRole("img")).toHaveAttribute("src", photo.src);

    // Close before opening the next one:
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
  }
});
