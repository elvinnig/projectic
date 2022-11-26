const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description:  String,
    thumbnail: String,
    souceLink: Array,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    authorID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    badgeID: 
        { type: mongoose.Schema.Types.ObjectId , ref: 'Badges' 
    },
    fileID: 
        { type: mongoose.Schema.Types.ObjectId , ref: 'Files' 
    }    
    
});

module.exports = mongoose.model( 'Project', ProjectSchema );
