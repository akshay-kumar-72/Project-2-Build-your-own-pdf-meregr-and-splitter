# Project-2-Build-your-own-pdf-meregr-and-splitter
Let’s go step-by-step. This implementation will cover:

Project setup

Backend API for PDF merge & split

Using pdf-lib (or PDFKit/HummusJS as alternatives)

File upload handling

MongoDB integration (storing metadata)

Example API routes
Step 1: Project Setup in bash 
mkdir pdf-merger-splitter
cd pdf-merger-splitter
npm init -y
npm install express multer pdf-lib mongoose dotenv
Step 2: Folder Structure
pdf-merger-splitter/
├── controllers/
│   └── pdfController.js
├── routes/
│   └── pdfRoutes.js
├── models/
│   └── PdfFile.js
├── uploads/
├── .env
├── server.js
└── config/
    └── db.js
