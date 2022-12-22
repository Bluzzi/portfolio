import { PropsWithChildren, ReactElement } from "react";
import "$lib/styles/tailwind.css";
import "$lib/styles/reset.css";
import "$lib/styles/global.css";
import "$lib/styles/font.css";

export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html>
      <head />

      <body>{children}</body>
    </html>
  );
}