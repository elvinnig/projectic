const mongoose = require('mongoose');

//*Schema
const FileSchema = new mongoose.Schema({
    projectId: {type: mongoose.Types.ObjectId, ref: 'Project'},
    fileTypeId: {type: mongoose.Types.ObjectId, ref: 'FileType'},
    fileLink:String
});

module.exports = mongoose.model('File', FileSchema);