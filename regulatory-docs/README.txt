====================================================
  Regulatory Documents Folder - Usage Guide
====================================================

Folder Structure:
  regulatory-docs/
  ├── 2026/        <-- Place Q1 2026, quarterly reports here
  ├── 2025/        <-- Place Annual Report 2025, audits here
  ├── 2024/        <-- Place older reports here

How to add a new document:
  1. Copy your PDF (or other file) into the correct year folder
  2. Name the file descriptively (e.g., "Q2 2026 Quarterly Report.pdf")
  3. Run "generate-reports.js" or double-click "update-reports.bat"
  4. Deploy the updated site to GitHub Pages

How to edit file metadata:
  Open reports.json in this folder to customize:
  - Report title (display name)
  - Report type (annual, quarterly, audit, regulatory, investor)
  - Publish date
  If reports.json doesn't exist, titles are auto-generated from filenames.

Example workflow:
  1. Drop "Annual Report 2026.pdf" into regulatory-docs/2026/
  2. Run: node generate-reports.js
  3. Commit & push to GitHub
  4. Website automatically shows the new report
