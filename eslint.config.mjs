// @ts-check

import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  eslintPluginAstro.configs.base,
  globalIgnores([`.astro/*`]),
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
      '@stylistic/quotes': [`error`, `backtick`],
    },
  },
);
