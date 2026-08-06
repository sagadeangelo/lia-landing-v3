import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 30000,
  expect: {
    timeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 },
      },
    },
  ],
  use: {
    actionTimeout: 10000,
    navigationTimeout: 30000,
    baseURL: 'http://127.0.0.1:4174',
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4174 --strictPort',
    port: 4174,
    reuseExistingServer: true,
    timeout: 120000,
    cwd: process.cwd(),
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
