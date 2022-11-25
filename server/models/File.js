const mongoose = require('mongoose');

//*Schema
const FileSchema = new mongoose.Schema({
    fileTypeId: {type: mongoose.Types.Schema.ObjectId, ref: 'FileType'},
    fileLink:String
});

module.exports = mongoose.model('File', FileSchema);