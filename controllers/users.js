const {
    createToken
} = require('./utils/token')

const User = require('../models/User')

// Register a user
module.exports.signupUser = async (req, res) => {
    try {
        const user = new User({...req.body})
        let error = await user.validate()
        if(error) throw(error)
        await user.save()
        // create token
        const token = createToken(user)
        // send a json web token to the user
        res.json({token})
    } catch (err) {
        // email uniqueness error message
        if (err.name === 'MongoError' && err.code === 11000) {
            err.msg = 'User already exists'
            return res.status(400).json({msg: err.msg})
        }
        res.status(500).json({msg: err.msg})
    }
}
