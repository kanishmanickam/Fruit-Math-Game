#!/bin/bash

echo "========================================"
echo "  Fun Learning Games Hub - Quick Start"
echo "========================================"
echo ""

echo "[1/3] Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Failed to install root dependencies"
    exit 1
fi

echo ""
echo "[2/3] Installing Fruit Garden dependencies..."
cd CB.SC.U4CSE23424
npm install
if [ $? -ne 0 ]; then
    echo "Failed to install Fruit Garden dependencies"
    cd ..
    exit 1
fi
cd ..

echo ""
echo "[3/3] Installing Smart Garage dependencies..."
cd Math_Game_FSlab2
npm install
if [ $? -ne 0 ]; then
    echo "Failed to install Smart Garage dependencies"
    cd ..
    exit 1
fi
cd ..

echo ""
echo "========================================"
echo "  Installation Complete!"
echo "========================================"
echo ""
echo "To start all games, run: npm run dev"
echo "To build for production, run: npm run build"
echo ""
echo "For more information, see DEPLOYMENT.md"
echo ""
