import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/[home].tsx"),
  route("/error-test", "./routes/[error-test].tsx"),
  route("*", "./routes/[not-found].tsx"),
] satisfies RouteConfig;
