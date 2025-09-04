#!/bin/bash

set -euo pipefail

# Deployment script for Personal CV
echo "🚀 Starting deployment..."

# Directory and branch setup
REPO_DIR="/root/personalCV"
BRANCH="${1:-main}"

echo "📁 Changing to repo directory: ${REPO_DIR}"
cd "${REPO_DIR}"

# Pull latest changes
if command -v git >/dev/null 2>&1; then
  echo "⬇️  Fetching and pulling latest from origin/${BRANCH}..."
  git fetch --all --prune
  git checkout "${BRANCH}"
  git pull --ff-only origin "${BRANCH}"
else
  echo "⚠️  git not found; skipping pull."
fi

# Ensure Node modules are up to date (use clean install for reproducibility)
echo "📦 Installing dependencies (npm install)..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Start or reload PM2 using ecosystem file
echo "🔄 Reloading PM2 process..."
if command -v pm2 >/dev/null 2>&1; then
  # Use startOrReload for zero-downtime if already running
  pm2 startOrReload ecosystem.config.js --env production
  pm2 save
else
  echo "❌ PM2 is not installed. Install with: npm i -g pm2"
  exit 1
fi

# Reload Nginx configuration
echo "🔄 Reloading Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: https://stephenhaskins.me"

