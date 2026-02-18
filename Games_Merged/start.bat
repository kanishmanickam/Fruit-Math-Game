@echo off
echo.
echo ========================================
echo   Starting Fun Learning Games Hub
echo ========================================
echo.
echo Starting unified app on ONE PORT...
echo - All games will run on: http://localhost:5173
echo.
echo Routes:
echo   / - Game Hub (Homepage)
echo   /fruit-garden - Fruit Garden activities
echo   /smart-garage - Smart Garage math game
echo.
echo The app will open automatically.
echo Press Ctrl+C to stop the server
echo.

cd CB.SC.U4CSE23424
npm run dev
