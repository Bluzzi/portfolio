import type { Route } from "./+types/root";
import type { PropsWithChildren, ReactElement } from "react";
import { Container } from "#/lib/components/container";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "#/lib/styles/tailwind.css";
import "#/lib/styles/reset.css";
import "#/lib/styles/font.css";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Camille Dugas — Développeur Full-Stack TypeScript" },
    { name: "description", content: "Développeur full-stack TypeScript depuis 2016. Je construis des produits web qui tiennent, et je passe mes week-ends là-haut." },
    { name: "theme-color", content: "#141A3F" },
  ];
};

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
];

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />

        <Meta />
        <Links />
      </head>

      <body
        // https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c
        suppressHydrationWarning={true}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = (): ReactElement => {
  return (
    <main className="min-h-screen scroll-smooth bg-night font-sans text-cream">
      <Outlet />
    </main>
  );
};

// https://reactrouter.com/how-to/error-boundary
export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps): ReactElement => {
  let title = "Unknown Error";
  let description: string | null = null;

  if (isRouteErrorResponse(error)) {
    title = `${String(error.status)} ${error.statusText}`.trim();
    description = String(error.data);
  }
  else if (error instanceof Error) {
    title = "Error";
    description = error.message;
  }

  return (
    <main className="min-h-screen bg-night font-sans text-cream">
      <Container className="space-y-5 py-16">
        <h1 className="font-jersey text-[64px] leading-none max-sm:text-[40px]">{title}</h1>

        {description && <p className="text-lavender">{description}</p>}
      </Container>
    </main>
  );
};

export default App;
