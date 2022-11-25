const mongoose = require('mongoose');

//*Schema
const UserSchema = new mongoose.Schema({
    firsname: String,
    lastname: String,
    username:	String,
    email: String,
    password: String,
    isAdmin: Boolean,
    dateCreated: { type: Date, default: Date.now },
    profilePicture: String
});

module.exports = mongoose.model('User', UserSchema);
