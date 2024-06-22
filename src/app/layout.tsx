import type { PropsWithChildren, ReactElement } from "react";
import type { Viewport } from "next";
import "#source/lib/styles/tailwind.css";
import "#source/lib/styles/reset.css";
import "#source/lib/styles/font.css";

export { metadata } from "#source/lib/configs/metadata";

export const viewport: Viewport = {
  themeColor: "#FFFFFF"
};

export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body className="min-h-screen scroll-smooth bg-gray-950 py-16">
        <main className="mx-auto w-1/2 xl:w-5/6 lg:w-3/4 sm:w-11/12">
          {children}
        </main>
      </body>
    </html>
  );
}