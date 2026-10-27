import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("page.tsx"),
  route("opengraph-image", "opengraph-image.tsx"),
  route("twitter-image", "twitter-image.tsx"),
] satisfies RouteConfig;
