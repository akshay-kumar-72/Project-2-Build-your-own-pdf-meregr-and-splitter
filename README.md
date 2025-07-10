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


# 📄 PDF Merger & Splitter

An intermediate-level backend project to build your own **PDF Merger and Splitter** using the JavaScript stack. This tool allows users to upload PDF files to either **merge** multiple PDFs into a single file or **split** a single PDF into multiple pages or page ranges.

## 🚀 Features

- ✅ Merge multiple PDF files into one
- ✅ Split PDF files by page or range (e.g., `1,3-5`)
- ✅ Custom page arrangement support
- ✅ Fast and secure PDF processing
- ✅ User-friendly APIs
- ✅ No internet connection needed for processing (runs locally)
- ✅ Metadata stored in MongoDB

---

## 🧰 Tech Stack

> 💡 This implementation uses the **JavaScript Stack**:

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Runtime**: [Node.js](https://nodejs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **PDF Processing**: [pdf-lib](https://pdf-lib.js.org/)
- **File Uploads**: [Multer](https://github.com/expressjs/multer)
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Project Structure

pdf-merger-splitter/
├── controllers/ # Business logic
│ └── pdfController.js
├── routes/ # Express routes
│ └── pdfRoutes.js
├── models/ # MongoDB schema
│ └── PdfFile.js
├── uploads/ # Uploaded and generated PDFs
├── config/ # DB configuration
│ └── db.js
├── .env # Environment variables
├── server.js # Main entry point
└── README.md # This file

yaml
Copy
Edit

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pdf-merger-splitter.git
cd pdf-merger-splitter
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure environment
Create a .env file in the root with the following:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017/pdf_tool
PORT=5000
4. Start the server
bash
Copy
Edit
npm start
The server will run on http://localhost:5000.
