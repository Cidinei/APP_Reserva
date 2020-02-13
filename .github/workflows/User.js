const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    phone: Number,
    document: Number,
});

module.exports = mongoose.model('User' , UserSchema);