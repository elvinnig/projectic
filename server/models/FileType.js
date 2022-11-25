const mongoose = require('mongoose');

//*Schema
const FileTypeSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('FileType', FileTypeSchema);