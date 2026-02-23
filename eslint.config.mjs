import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  {
    ignores: [
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
