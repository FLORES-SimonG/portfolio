import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  // 1. Ignorar archivos que no deben ser analizados con TypeScript
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "*.config.cjs",
      "*.config.mjs",
      ".eslintrc.cjs",
      "eslint.config.mjs",   // nos ignoramos a nosotros mismos
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    // Solo aplicar TypeScript + Next.js a archivos de código real
    files: ["**/*.{ts,tsx,js,jsx}"],
    
    plugins: {
      "@next/next": nextPlugin,
      import: importPlugin,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globalThis.browser,
        ...globalThis.node,
      },
    },

    settings: {
      "import/resolver": {
        typescript: {},
      },
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // Import order
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],

      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Reglas que desactivamos por ser demasiado estrictas en Next.js
      "import/no-unused-modules": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "id-length": "off",
      "prefer-const": "error",           // útil
    },
  }
);