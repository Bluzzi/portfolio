import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/page.tsx"),
  route("opengraph-image", "./routes/opengraph-image.tsx"),
  route("twitter-image", "./routes/twitter-image.tsx"),
  route("*", "./routes/not-found.tsx"),
] satisfies RouteConfig;
