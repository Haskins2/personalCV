# Personal CV Project

[![CI](https://github.com/Haskins2/personalCV/actions/workflows/ci.yml/badge.svg)](https://github.com/Haskins2/personalCV/actions/workflows/ci.yml)
[![Deploy](https://github.com/Haskins2/personalCV/actions/workflows/deploy.yml/badge.svg)](https://github.com/Haskins2/personalCV/actions/workflows/deploy.yml)

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It serves as a personal CV and portfolio website.

## Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository (if you haven't already).
2.  Install dependencies:

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

1.  Build the project:

    ```bash
    npm run build
    ```

2.  Start the production server:

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

This project uses GitHub Actions for continuous integration and deployment.

### Workflows

#### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request to `main` and `develop` branches:

1. **Lint** - Runs ESLint to check code quality
2. **Type Check** - Runs TypeScript compiler to catch type errors
3. **Unit Tests** - Runs Vitest tests with coverage reporting
4. **E2E Tests** - Runs Playwright tests against a built version
5. **Build** - Verifies the production build succeeds

Jobs run in parallel where possible to minimize CI time.

#### Deploy Workflow (`.github/workflows/deploy.yml`)

Runs on pushes to `main` branch only:

1. Runs all CI checks first
2. If checks pass, deploys to the Linode production server
3. Performs health check after deployment

### GitHub Secrets Required

The following secrets must be configured in your repository settings:

| Secret | Description |
|--------|-------------|
| `LINODE_SSH_HOST` | Server IP address (e.g., `172.237.120.179`) |
| `LINODE_SSH_USER` | SSH username (e.g., `root`) |
| `LINODE_SSH_KEY` | Private SSH key for server access |

### CI Status Badges

Add these badges to track CI status:
- CI: `![CI](https://github.com/YOUR_USERNAME/personalCV/actions/workflows/ci.yml/badge.svg)`
- Deploy: `![Deploy](https://github.com/YOUR_USERNAME/personalCV/actions/workflows/deploy.yml/badge.svg)`

## Deployment

This project supports two deployment methods:

### Automatic Deployment (Recommended)

Push to the `main` branch to trigger automatic deployment via GitHub Actions. The workflow will:

1. Run all CI checks (lint, type-check, test, build)
2. If all checks pass, deploy to the production server
3. Perform a health check to verify the deployment

### Manual Deployment

To deploy manually, run the `deploy.sh` script from the project root:

```bash
chmod +x deploy.sh  # Ensure the script is executable (only needed once)
./deploy.sh
```

The script performs the following steps:

1.  **Local Build**: Runs `npm run build` locally to ensure the project compiles successfully.
2.  **Package**: Creates a deployment package with the built application, static files, and configuration.
3.  **Upload**: Uploads the package to the server via `SCP`.
4.  **Remote Deploy**:
    - Connects to the server via SSH.
    - Stops the existing PM2 process.
    - Backs up the previous build.
    - Extracts the new build.
    - Installs production dependencies (`npm ci --only=production`).
    - Restarts the application using PM2.
    - Cleans up temporary files.

### Server Configuration

The deployment targets the server at `172.237.120.179` and assumes the application lives in `~/personalCV`. It uses [PM2](https://pm2.keymetrics.io/) to manage the application process on the server.

### Server Requirements

The server should have:

- Node.js installed.
- PM2 installed globally (`npm install -g pm2`).
- SSH access configured for the deploying user.
