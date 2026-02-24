@echo off
title TasksACE Development Server
echo.
echo ================================================
echo   TasksACE Virtual Assistant Services
echo   Starting Development Server on Port 3000
echo ================================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo.
    npm install
    if errorlevel 1 (
        echo.
        echo Error: Failed to install dependencies!
        echo Please check your npm installation.
        pause
        exit /b 1
    )
)

echo Starting development server...
echo.
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
npm run dev

REM If the server stops, show a message
echo.
echo Development server has stopped.
pause 