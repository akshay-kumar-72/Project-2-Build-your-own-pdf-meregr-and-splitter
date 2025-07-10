const express = require('express');
const router = express.Router();
const multer = require('multer');
const { mergePDFs, splitPDF } = require('../controllers/pdfController');

const upload = multer({ dest: 'uploads/' });

router.post('/merge', upload.array('pdfs', 10), mergePDFs);
router.post('/split', upload.single('pdf'), splitPDF);

module.exports = router;

