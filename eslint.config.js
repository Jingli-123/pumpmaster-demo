import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  // Basic ESLint recommended rules for JavaScript
  js.configs.recommended,

  // TypeScript-specific configurations from typescript-eslint
  ...tseslint.configs.recommendedTypeChecked, // or recommended, strict, strictTypeChecked

  {
    files: ["**/*.ts", "**/*.tsx"], // Apply these configurations to TypeScript files
    languageOptions: {
      parser: tseslint.parser, // Use the TypeScript parser
      parserOptions: {
        project: "./tsconfig.json", // Path to your tsconfig.json for type-aware linting
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // Add or override specific rules here
      // For example, to warn about unused variables:
      "no-unused-vars": "off", // Turn off base ESLint rule
      "@typescript-eslint/no-unused-vars": "warn", // Use TypeScript-specific rule
    },
  },

  // Configuration for ignoring files (similar to .eslintignore)
  {
    ignores: ["node_modules/", "dist/", "build/"],
  },
]);
