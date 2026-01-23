import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom for DOM testing with React components
    environment: 'jsdom',

    // Setup files run before each test file
    setupFiles: ['./src/test/setup.tsx'],

    // Include test files matching these patterns
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    // Exclude node_modules and e2e tests (handled by Playwright)
    exclude: ['node_modules', 'tests/e2e/**'],

    // Enable global test APIs (describe, it, expect) without imports
    globals: true,

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/**',
      ],
    },

    // Timeout for individual tests (5 seconds)
    testTimeout: 5000,

    // CSS handling - don't process CSS in tests
    css: false,
  },
  resolve: {
    // Match the path aliases from tsconfig.json
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
