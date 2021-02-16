const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

// ensure uniqueness of email fields
UserSchema.index({ email: 1 }, { unique: true})

// password hashing middleware before saving new records
// Don't use an arrow function for the callback, as it changes the scope of 'this'
UserSchema.pre('save', async function(next) {
    let user = this
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()
    try {
        hashedPwd = await user.hashPassword(user.password)
        if(hashedPwd !== null) {
            user.password = hashedPwd
            next()
        }
        else throw({msg: 'Unable to hash password'})
    } catch (err) {
        return next(err)
    }
})

// hash password
UserSchema.methods.hashPassword = async (password) => {
    try {
        // generate a salt with rounds = 10
        const salt = await bcrypt.genSalt(10)
        // hash the password using our new salt
        const hash = await bcrypt.hash(password, salt)
        return hash
    } catch (err) {
        console.log(err.message)
        return null
    }
}

// compare passwords
// Don't use an arrow function, as it changes the scope of 'this'
UserSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch
    } catch (err) {
        console.log(err)
        return null
    }
}

// User model
module.exports = User = mongoose.model('User', UserSchema)
