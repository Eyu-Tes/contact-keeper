const mongoose = require('mongoose')

// User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

// User model
module.exports = User = mongoose.model('User', UserSchema)
