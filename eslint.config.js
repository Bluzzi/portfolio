import { eslintConfig } from "@bluzzi/eslint-config";

export default eslintConfig(
  {
    typescript: { tsconfigPath: "./tsconfig.json" },
  },
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
);
