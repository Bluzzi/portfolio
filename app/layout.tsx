import { PropsWithChildren, ReactElement } from "react";
import "$lib/styles/tailwind.css";
import "$lib/styles/reset.css";
import "$lib/styles/font.css";
import { tw } from "typewind";

export default function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body className={tw.min_h_screen.scroll_smooth.bg_black.py_16}>
        <main className={tw.mx_auto.w_["1/2"].lg(tw.w_["3/4"]).sm(tw.w_["11/12"])}>
          {children}
        </main>
      </body>
    </html>
  );
}