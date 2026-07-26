#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "==> Installing dependencies (npm ci)"
npm ci

echo "==> Lint"
npm run lint

echo "==> Type check"
npx tsc --noEmit

echo "==> Unit tests"
npm run test

echo "==> Production build"
npm run build

echo "==> Install Playwright Chromium"
npx playwright install chromium

echo "==> E2E tests (production server, CI=true)"
# Match GitHub Actions: Playwright uses next start when CI is set
CI=true npm run test:e2e

echo "==> Optional: slim deploy package dry-run"
rm -rf deploy_temp deploy.tar.gz
mkdir -p deploy_temp
cp -r .next public package.json package-lock.json next.config.js deploy_temp/
tar -czf deploy.tar.gz -C deploy_temp .
echo "Package size: $(ls -lh deploy.tar.gz | awk '{print $5}')"
rm -rf deploy_temp deploy.tar.gz

echo ""
echo "All local CI checks passed."