import type { PropsWithChildren, ReactElement } from "react";
import type { Viewport } from "next";
import "#source/lib/styles/tailwind.css";
import "#source/lib/styles/reset.css";
import "#source/lib/styles/font.css";

export { metadata } from "#source/lib/configs/metadata";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <head />

      <body
        // https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c
        suppressHydrationWarning={true}
      >
        <main className="min-h-screen scroll-smooth bg-gray-950 py-16">
          <div className="mx-auto w-1/2 xl:w-5/6 lg:w-3/4 sm:w-11/12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
