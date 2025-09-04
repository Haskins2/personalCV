#!/bin/bash

echo "🔍 Health Check for stephenhaskins.me"
echo "======================================"

# Check PM2 status
echo "📊 PM2 Status:"
pm2 status
echo ""

# Check if app is responding
echo "🌐 Application Response:"
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ App is responding on port 3000"
else
    echo "❌ App is not responding on port 3000"
fi
echo ""

# Check Nginx status
echo "🔧 Nginx Status:"
sudo systemctl status nginx --no-pager -l
echo ""

# Check Nginx configuration
echo "⚙️ Nginx Configuration:"
if sudo nginx -t 2>&1; then
    echo "✅ Nginx configuration is valid"
else
    echo "❌ Nginx configuration has errors"
fi
echo ""

# Check SSL certificate
echo "🔒 SSL Certificate:"
if [ -f "/etc/letsencrypt/live/stephenhaskins.me/fullchain.pem" ]; then
    echo "✅ SSL certificate exists"
    echo "Certificate expires: $(openssl x509 -enddate -noout -in /etc/letsencrypt/live/stephenhaskins.me/fullchain.pem | cut -d= -f2)"
else
    echo "❌ SSL certificate not found"
fi
echo ""

# Check domain resolution
echo "🌍 Domain Resolution:"
if nslookup stephenhaskins.me > /dev/null 2>&1; then
    echo "✅ Domain resolves"
else
    echo "❌ Domain does not resolve"
fi
echo ""

# Check firewall status
echo "🔥 Firewall Status:"
sudo ufw status
echo ""

echo "🏁 Health check completed!"

