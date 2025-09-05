#!/bin/bash

# Deploy script for personalCV
# Builds locally and deploys to server

SERVER_IP="root@172.237.120.179"
SERVER_PATH="~/personalCV"
LOCAL_BUILD_DIR=".next"
REMOTE_BUILD_DIR=".next"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment process...${NC}"

# Step 1: Build locally
echo -e "${YELLOW}📦 Building application locally...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ Build completed successfully${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

# Step 2: Create deployment package
echo -e "${YELLOW}📁 Creating deployment package...${NC}"
DEPLOY_DIR="deploy_temp"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

# Copy necessary files
cp -r .next $DEPLOY_DIR/
cp -r public $DEPLOY_DIR/
cp -r src $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp package-lock.json $DEPLOY_DIR/
cp next.config.mjs $DEPLOY_DIR/
cp tailwind.config.ts $DEPLOY_DIR/
cp tsconfig.json $DEPLOY_DIR/
cp postcss.config.mjs $DEPLOY_DIR/

# Step 3: Create tar archive
echo -e "${YELLOW}🗜️  Creating archive...${NC}"
tar -czf deploy.tar.gz -C $DEPLOY_DIR .

# Step 4: Upload to server
echo -e "${YELLOW}📤 Uploading to server...${NC}"
if scp deploy.tar.gz $SERVER_IP:$SERVER_PATH/; then
    echo -e "${GREEN}✅ Upload completed${NC}"
else
    echo -e "${RED}❌ Upload failed${NC}"
    exit 1
fi

# Step 5: Deploy on server
echo -e "${YELLOW}🔧 Deploying on server...${NC}"
ssh $SERVER_IP << 'EOF'
    cd ~/personalCV
    
    # Stop current process if running
    if pm2 list | grep -q "personalCV"; then
        echo "Stopping current process..."
        pm2 stop personalCV
        pm2 delete personalCV
    fi
    
    # Backup current .next if it exists
    if [ -d ".next" ]; then
        echo "Backing up current build..."
        mv .next .next.backup.$(date +%Y%m%d_%H%M%S)
    fi
    
    # Extract new build
    echo "Extracting new build..."
    tar -xzf deploy.tar.gz
    
    # Install dependencies
    echo "Installing dependencies..."
    npm ci --only=production
    
    # Start application
    echo "Starting application..."
    pm2 start npm --name "personalCV" -- start
    
    # Clean up
    rm deploy.tar.gz
    
    echo "Deployment completed!"
EOF

# Step 6: Clean up local files
echo -e "${YELLOW}🧹 Cleaning up local files...${NC}"
rm -rf $DEPLOY_DIR
rm deploy.tar.gz

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}Your app should now be running on your server.${NC}"

