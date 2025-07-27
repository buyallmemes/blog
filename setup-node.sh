#!/bin/bash
set -e

echo "🔧 Setting up Node.js 20 for Angular 20 compatibility..."

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install and use Node.js 20
echo "📦 Installing Node.js 20.19.0..."
nvm install 20.19.0
nvm alias default 20.19.0
nvm use 20.19.0

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Verify Angular CLI compatibility
echo "🔍 Checking Angular CLI compatibility..."
if node -p "process.version" | grep -E '^v(20|21|22)\.'; then
    echo "✅ Node.js version is compatible with Angular 20"
else
    echo "❌ Node.js version may not be compatible with Angular 20"
    exit 1
fi