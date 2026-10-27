import type { Route } from "./app/+types/root";
import type { PropsWithChildren, ReactElement } from "react";
import { metadata } from "#source/lib/configs/metadata";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "#source/lib/styles/tailwind.css";
import "#source/lib/styles/reset.css";
import "#source/lib/styles/font.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: metadata.icons },
];

export const meta: Route.MetaFunction = () => {
  const openGraphImage = new URL("/opengraph-image", metadata.metadataBase);
  const twitterImage = new URL("/twitter-image", metadata.metadataBase);

  return [
    { title: metadata.title },

    { name: "description", content: metadata.description },

    { name: "theme-color", content: "#FFFFFF" },

    { property: "og:title", content: metadata.openGraph.title },
    { property: "og:description", content: metadata.openGraph.description },
    { property: "og:url", content: metadata.openGraph.url },
    { property: "og:site_name", content: metadata.openGraph.siteName },
    { property: "og:type", content: metadata.openGraph.type },
    { property: "og:image", content: openGraphImage.href },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "600" },
    { property: "og:image:height", content: "300" },
    { property: "og:image:alt", content: metadata.title },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metadata.twitter.title },
    { name: "twitter:description", content: metadata.twitter.description },
    { name: "twitter:image", content: twitterImage.href },
    { name: "twitter:image:alt", content: metadata.title },
    { name: "twitter:image:type", content: "image/png" },
    { name: "twitter:image:width", content: "600" },
    { name: "twitter:image:height", content: "300" },
  ];
};

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
      </head>

      <body
        // https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c
        suppressHydrationWarning={true}
      >
        <main className="min-h-screen scroll-smooth bg-black py-16">
          <div className="mx-auto w-1/2 max-xl:w-5/6 max-lg:w-3/4 max-sm:w-11/12">
            {children}
          </div>
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = (): ReactElement => {
  return <Outlet />;
};

export default App;
