const mongoose = require('mongoose');

const PdfFileSchema = new mongoose.Schema({
    filename: String,
    createdAt: { type: Date, default: Date.now },
    type: String // 'merged' or 'split'
});

module.exports = mongoose.model('PdfFile', PdfFileSchema);

