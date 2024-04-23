import globals from 'globals';
import js from '@eslint/js';
import html from 'eslint-plugin-html';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      globals: globals.browser
    },
    plugins: {
      html: html
    }
  }
];
