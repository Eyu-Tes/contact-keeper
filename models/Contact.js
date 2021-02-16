const mongoose = require('mongoose')

// Contact schema
const ContactSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    name: {
        type: String, 
        required: [true, 'Name is required']
    }, 
    email: {
        type: String, 
        required: true
    }, 
    phone: {
        type: String
    }, 
    type: {
        type: String, 
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Contact model
const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
