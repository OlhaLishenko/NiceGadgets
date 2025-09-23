import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import cypress from "eslint-plugin-cypress";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import airbnb from "eslint-config-airbnb-typescript";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  airbnb,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
      cypress,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    rules: {
      // --- JS ---
      semi: "off",
      "@typescript-eslint/semi": ["error", "always"],
      "prefer-const": 2,
      curly: [2, "all"],
      "max-len": [
        "error",
        { ignoreTemplateLiterals: true, ignoreComments: true },
      ],
      "no-redeclare": [2, { builtinGlobals: true }],
      "no-console": 2,
      "operator-linebreak": 0,
      "brace-style": [2, "1tbs"],
      "arrow-body-style": 0,
      "arrow-parens": 0,
      "no-param-reassign": [2, { props: true }],
      "padding-line-between-statements": [
        2,
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "block-like", next: "*" },
      ],
      "implicit-arrow-linebreak": 0,

      // --- React ---
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "import/prefer-default-export": 0,
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "react/destructuring-assignment": 0,
      "react/jsx-props-no-spreading": 0,
      "react/state-in-constructor": [2, "never"],
      "react-hooks/rules-of-hooks": 2,
      "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
      "jsx-a11y/label-has-for": [
        2,
        {
          components: ["Label"],
          required: { some: ["id", "nesting"] },
          allowChildren: true,
        },
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // --- TypeScript ---
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/indent": ["error", 2],
      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
    ignores: [
      "dist",
      ".eslintrc.cjs",
      "vite.config.ts",
      "src/vite-env.d.ts",
      "cypress",
    ],
  },
  // --- Overrides ---
  {
    files: ["**/*.spec.jsx"],
    rules: {
      "react/jsx-filename-extension": "off",
    },
  },
);
