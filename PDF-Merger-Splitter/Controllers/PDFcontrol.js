const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const PdfFile = require('../models/PdfFile');

exports.mergePDFs = async (req, res) => {
    try {
        const mergedPdf = await PDFDocument.create();

        for (const file of req.files) {
            const pdfBytes = fs.readFileSync(file.path);
            const pdf = await PDFDocument.load(pdfBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }

        const mergedPdfBytes = await mergedPdf.save();
        const outputPath = `uploads/merged-${Date.now()}.pdf`;
        fs.writeFileSync(outputPath, mergedPdfBytes);

        await PdfFile.create({ filename: outputPath, type: 'merged' });

        res.download(outputPath);
    } catch (err) {
        console.error(err);
        res.status(500).send('PDF Merge Failed');
    }
};

exports.splitPDF = async (req, res) => {
    try {
        const { pageRange } = req.body; // e.g., "1,3-5"
        const file = req.file;
        const pdfBytes = fs.readFileSync(file.path);
        const pdf = await PDFDocument.load(pdfBytes);

        const newPdf = await PDFDocument.create();
        const ranges = pageRange.split(',').flatMap(r => {
            if (r.includes('-')) {
                const [start, end] = r.split('-').map(Number);
                return Array.from({ length: end - start + 1 }, (_, i) => start + i - 1);
            }
            return [parseInt(r) - 1];
        });

        const copiedPages = await newPdf.copyPages(pdf, ranges);
        copiedPages.forEach((page) => newPdf.addPage(page));

        const outputPath = `uploads/split-${Date.now()}.pdf`;
        fs.writeFileSync(outputPath, await newPdf.save());

        await PdfFile.create({ filename: outputPath, type: 'split' });

        res.download(outputPath);
    } catch (err) {
        console.error(err);
        res.status(500).send('PDF Split Failed');
    }
};

