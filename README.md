# Personal CV Project

[CI](https://github.com/Haskins2/personalCV/actions/workflows/ci.yml)  
[Deploy](https://github.com/Haskins2/personalCV/actions/workflows/deploy.yml)

## Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if you haven't already).
2. Install dependencies:
  ```bash
    npm install
  ```



### Running Locally

To start the development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building and Testing Production Build Locally

To simulate exactly what will run on the server, you can build and start the production version locally:

1. Build the project:
  ```bash
    npm run build
  ```
2. Start the production server:
  ```bash
    npm run start
  ```



## Testing

This project uses [Vitest](https://vitest.dev/) for unit testing and [Playwright](https://playwright.dev/) for E2E testing.

### Running Tests

```bash
# Run unit tests
npm run test

# Run unit tests in watch mode
npm run test:watch

# Run unit tests with coverage report
npm run test:coverage

# Run E2E tests (headless)
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed browser mode
npm run test:e2e:headed

# Run all tests (unit + E2E)
npm run test:all
```



### Test Structure

```
src/
├── components/__tests__/     # Component unit tests
│   ├── ThemeToggle.test.tsx
│   └── Breadcrumb.test.tsx
├── lib/__tests__/            # Utility function tests
│   └── utils.test.ts
└── test/
    └── setup.ts              # Vitest setup file

tests/
└── e2e/                      # Playwright E2E tests
    └── navigation.spec.ts
```



### Writing Tests

- **Unit tests**: Place in `__tests__` directories next to the code being tested
- **E2E tests**: Place in `tests/e2e/` directory
- Tests run automatically on every PR via GitHub Actions



## CI/CD Pipeline

This project uses GitHub Actions for CI/CD.

### Workflows



#### CI Workflow (`.github/workflows/ci.yml`)

Runs on:

- Pull requests targeting `main` or `develop`
- Pushes to `develop`
- `workflow_call` from the Deploy workflow (so `main` pushes do not run CI twice)

Jobs:

1. **Lint** - Runs ESLint to check code quality
2. **Type Check** - Runs TypeScript compiler to catch type errors
3. **Unit Tests** - Runs Vitest tests
4. **E2E Tests** - Builds the app, then runs Playwright against `next start` (production server)
5. **Build** - Verifies the production build succeeds

Jobs run in parallel where possible to minimize CI time.

#### Deploy Workflow (`.github/workflows/deploy.yml`)

Runs on pushes to `main` only:

1. Runs the reusable CI workflow first
2. If checks pass, builds and deploys a slim runtime package to the Linode server
3. Verifies PM2 reports the app as `online`
4. Health-checks `https://stephenhaskins.com` (fails the job on non-200)
5. Rolls back to the previous `.next` backup if start or health check fails



### GitHub Secrets Required

The following secrets must be configured in the repo settings:


| Secret            | Description                       |
| ----------------- | --------------------------------- |
| `LINODE_SSH_HOST` | Server IP address                 |
| `LINODE_SSH_USER` | SSH username                      |
| `LINODE_SSH_KEY`  | Private SSH key for server access |




### CI Status Badges

- CI: `![CI](https://github.com/Haskins2/personalCV/actions/workflows/ci.yml/badge.svg)`
- Deploy: `![Deploy](https://github.com/Haskins2/personalCV/actions/workflows/deploy.yml/badge.svg)`



## Deployment

Push to the `main` branch to trigger automatic deployment via GitHub Actions. The workflow will:

1. Run all CI checks (lint, type-check, unit tests, e2e, build)
2. If all checks pass, deploy to the production server
3. Health-check the public site and roll back automatically on failure

### Server Configuration

The deployment targets the production server and assumes the application lives in `~/personalCV`. It uses [PM2](https://pm2.keymetrics.io/) to manage the application process on the server. The deploy package includes only runtime files (`.next`, `public`, `package.json`, `package-lock.json`, `next.config.js`).