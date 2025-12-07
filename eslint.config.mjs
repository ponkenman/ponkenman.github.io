// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  eslintPluginAstro.configs.base,
  globalIgnores([`.astro/*`, `**/*.astro`]),
  stylistic.configs.customize({
    semi: true,
    braceStyle: `1tbs`,
    indent: 2,
  }),
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/yield-star-spacing': [`error`, `after`],
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    },
  },
);
