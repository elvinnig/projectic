const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description:  String,
    thumbnail: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    authorID: { type: mongoose.Types.ObjectId, ref: 'User'},
    badgeID: [ 
        { type: mongoose.Types.ObjectId , ref: 'Badge' }
    ],
});

module.exports = mongoose.model( 'Project', ProjectSchema );
