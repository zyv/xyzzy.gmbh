import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import html from 'eslint-plugin-html';

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: {
      js
    },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.html'],
    plugins: {
      html: html
    },
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      globals: globals.browser
    }
  }
]);
