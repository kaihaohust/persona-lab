import { defineConfig } from 'vite';

export default defineConfig(({ command, isPreview }) => ({
  // Keep the workshop dev preview at /; publish production under the repo name.
  base: command === 'build' || isPreview ? '/persona-lab/' : '/',
}));
