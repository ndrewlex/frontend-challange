import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// One dev server for every daily exercise. Each exercise folder has its own
// index.html, so it is served at its folder path, e.g.
//   http://localhost:5173/2026-11/d01-semantic-form-layout/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
    css: false,
    passWithNoTests: true, // the suite starts empty; exercises add tests as you go
  },
});
