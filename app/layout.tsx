import type { PropsWithChildren, ReactElement } from "react";
import "#/styles/tailwind.css";
import "#/styles/reset.css";
import "#/styles/font.css";

// Metadata :
export { metadata } from "#/configs/metadata";

// Layout:
export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body className="min-h-screen scroll-smooth bg-black py-16">
        <main className="mx-auto w-1/2 xl:w-5/6 lg:w-3/4 sm:w-11/12">
          {children}
        </main>
      </body>
    </html>
  );
}