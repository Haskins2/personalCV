#!/bin/bash

# Deployment script for Personal CV
echo "🚀 Starting deployment..."

# Update dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "🔄 Restarting PM2 process..."
pm2 restart ecosystem.config.js

# Reload Nginx configuration
echo "🔄 Reloading Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: https://stephenhaskins.me"

