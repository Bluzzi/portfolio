import type { PropsWithChildren, ReactElement } from "react";
import type { Viewport } from "next";
import { CallButton } from "#/components/call-button";
import "#/styles/tailwind.css";
import "#/styles/reset.css";
import "#/styles/font.css";

export { metadata } from "#/configs/metadata";

export const viewport: Viewport = {
  themeColor: "#FFFFFF"
};

export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body className="min-h-screen scroll-smooth bg-black py-16">
        <main className="mx-auto w-1/2 xl:w-5/6 lg:w-3/4 sm:w-11/12">
          {children}
        </main>
      </body>

      <CallButton />
    </html>
  );
}