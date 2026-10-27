import type { Route } from "./+types/root";
import type { PropsWithChildren, ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "#/lib/styles/tailwind.css";
import "#/lib/styles/reset.css";
import "#/lib/styles/font.css";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Camille Dugas | Développeur Full-Stack" },
    { name: "description", content: "Développeur Full-Stack depuis 2016. Spécialisé dans l'écosystème TypeScript, je travaille principalement avec NodeJS, ReactJS et NextJS." },
    { name: "theme-color", content: "#FFFFFF" },
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
    <main className="min-h-screen scroll-smooth bg-black py-16 font-sans">
      <div className="mx-auto w-1/2 max-xl:w-5/6 max-lg:w-3/4 max-sm:w-11/12">
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
    <main className="min-h-screen bg-black py-16 font-sans">
      <div className="mx-auto w-1/2 max-xl:w-5/6 max-lg:w-3/4 max-sm:w-11/12 space-y-5">
        <Text size="3xl">{title}</Text>

        {description && <Text color="gray">{description}</Text>}
      </div>
    </main>
  );
};

export default App;
