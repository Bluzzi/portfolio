import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/[home].tsx"),
  route("*", "./routes/[not-found].tsx"),

  // Test-only route for the error page e2e, registered when E2E_ERROR_ROUTE is set:
  ...(process.env.E2E_ERROR_ROUTE ? [route("/__error", "./routes/[error-test].tsx")] : []),
] satisfies RouteConfig;
