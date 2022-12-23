import { PropsWithChildren, ReactElement } from "react";
import "$lib/styles/tailwind.css";
import "$lib/styles/reset.css";
import "$lib/styles/font.css";

export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html>
      <head />

      <body className="scroll-smooth bg-black min-h-screen pt-24">
        {children}
      </body>
    </html>
  );
}