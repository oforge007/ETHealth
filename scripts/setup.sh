#!/bin/bash
# ETHealth Quick Start Script

echo "🏥 ETHealth - Healthcare for the Unbanked"
echo "========================================"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found"
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Navigate to project
cd "$(dirname "$0")" || exit

echo "📦 Installing dependencies..."
npm install

if [ ! -f .env.local ]; then
    echo ""
    echo "⚠️  .env.local not found"
    echo "📝 Creating from .env.example..."
    cp .env.example .env.local
    
    echo ""
    echo "🔑 IMPORTANT: Add your Groq API key to .env.local"
    echo "   Get it from: https://console.groq.com"
    echo ""
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Add GROQ_API_KEY to .env.local"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
