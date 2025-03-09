import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Disables warnings for <img> usage
      "react-hooks/exhaustive-deps": "off", // Disables missing dependency warnings
      "@typescript-eslint/no-explicit-any": "off", // Allows usage of 'any' type
      "prefer-const": "off", // Allows usage of 'let' instead of 'const'
      "@typescript-eslint/no-unused-vars": "off", // Suppresses unused variable warnings
      "no-var": "off", // Allows usage of 'var'
    },
  },
];

export default eslintConfig;
