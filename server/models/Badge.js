
const mongoose = require('mongoose');

//*Schema
const BadgeSchema = new mongoose.Schema({
    userID: {type: mongoose.Types.ObjectId, ref: 'User'},
    name:String
});

module.exports = mongoose.model('Badge', BadgeSchema);