import { eslintConfig } from "@bluzzi/eslint-config";

export default eslintConfig(
  {
    typescript: { tsconfigPath: "./tsconfig.json" },
  },
  {
    ignores: ["**/.react-router", "**/build", "**/playwright-report", "**/test-results"],
  },
);
