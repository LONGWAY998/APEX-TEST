@echo off
echo ========================================
echo   Regulatory Reports Generator
echo ========================================
echo.
echo Scanning regulatory-docs folder...
echo.
node generate-reports.js
echo.
echo Done! Deploy the updated reports-data.js to GitHub Pages.
echo.
pause
