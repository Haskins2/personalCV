import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright configuration for E2E testing
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Directory containing test files
  testDir: './tests/e2e',

  // Run tests in parallel for faster execution
  fullyParallel: true,

  // Fail the build on CI if test.only() is accidentally left in code
  forbidOnly: !!process.env.CI,

  // Retry failed tests once on CI to handle flaky tests
  retries: process.env.CI ? 1 : 0,

  // Limit parallel workers on CI to prevent resource exhaustion
  workers: process.env.CI ? 2 : undefined,

  // Reporter configuration - different output for CI vs local
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'on-failure' }]],

  // Shared settings for all projects
  use: {
    // Base URL for navigation - uses dev server
    baseURL: 'http://localhost:3000',

    // Capture trace on first retry for debugging failures
    trace: 'on-first-retry',

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Video recording for debugging (only on first retry to save resources)
    video: 'on-first-retry',
  },

  // Test timeout (30 seconds per test)
  timeout: 30000,

  // Expect timeout (5 seconds for assertions)
  expect: {
    timeout: 5000,
  },

  // Configure browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to test on more browsers (increases CI time)
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Run local dev server before starting tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    // Reuse existing server if already running (useful for local development)
    reuseExistingServer: !process.env.CI,
    // Timeout for server to start (60 seconds)
    timeout: 60000,
  },
})
