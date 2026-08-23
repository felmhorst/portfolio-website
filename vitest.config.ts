import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const scssMock: Plugin = {
  name: 'scss-mock',
  enforce: 'pre',
  resolveId(id: string) {
    if (id.endsWith('.module.scss')) return '\0scss-mock.js';
  },
  load(id: string) {
    if (id === '\0scss-mock.js') {
      return 'export default new Proxy({}, { get(_, key) { return key } })';
    }
  },
};

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), scssMock],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    globals: true,
    css: false,
  },
});
