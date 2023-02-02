import { PropsWithChildren, ReactElement } from "react";
import "$lib/styles/tailwind.css";
import "$lib/styles/reset.css";
import "$lib/styles/font.css";

export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body className="scroll-smooth bg-black min-h-screen py-16">
        <main className="mx-auto w-1/2 lg:w-3/4 sm:w-11/12">
          {children}
        </main>
      </body>
    </html>
  );
}