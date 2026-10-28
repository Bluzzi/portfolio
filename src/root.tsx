import type { Route } from "./+types/root";
import type { PropsWithChildren, ReactElement } from "react";
import { Backdrop } from "#/lib/components/backdrop";
import { Text } from "#/lib/components/text";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "#/lib/styles/tailwind.css";
import "#/lib/styles/reset.css";
import "#/lib/styles/font.css";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Camille Dugas | Développeur Full-Stack" },
    { name: "description", content: "Développeur Full-Stack depuis 2016. Spécialisé dans l'écosystème TypeScript, je travaille principalement avec NodeJS, ReactJS et NextJS." },
    { name: "theme-color", content: "#050509" },
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
    <main className="relative min-h-screen scroll-smooth bg-night-950 py-20 font-sans text-white max-sm:py-14">
      <Backdrop />

      <div className="relative mx-auto w-11/12 max-w-4xl">
        <Outlet />
      </div>
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
    <main className="min-h-screen bg-night-950 py-20 font-sans text-white max-sm:py-14">
      <div className="mx-auto w-11/12 max-w-4xl space-y-5">
        <Text size="3xl" font="display">{title}</Text>

        {description && <Text color="gray">{description}</Text>}
      </div>
    </main>
  );
};

export default App;
