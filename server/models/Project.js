const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description:  String,
    thumbnail: String,
    souceLink: [String],
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    authorID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    badgeID: 
        { type: mongoose.Schema.Types.ObjectId , ref: 'Badge' 
    },
    fileID: 
        { type: mongoose.Schema.Types.ObjectId , ref: 'File' 
    }    
    
});

module.exports = mongoose.model( 'Project', ProjectSchema );
