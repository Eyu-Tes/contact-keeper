const {
    createToken
} = require('./utils/token')


const User = require('../models/User')

// Get logged in user
module.exports.getLoggedinUser = async (req, res) => {
    try {
        /* if the correct token is sent & user is logged in, 
           the request object (req) is going to have a user object attached to it 
           with the current user's id */
        // select('-password') : get the data but don't return the password
        const user = await User.findById(req.user.id).select('-password')
        // const user = await User.findById(req.user.id).select(['-password', '-name'])
        res.json(user)
    } catch (err) {
        console.log(err.message)
        res.send(500).json({msg: 'Server Error'})
    }
}

// Login a user
module.exports.signinUser = async (req, res) => {
    const {email, password} = req.body
    try {
        let valid = false
        let user = await User.findOne({email})
        if(user) {
            const isMatch = await user.comparePassword(password)
            if(isMatch) valid = true
        }
        if (!valid) return res.status(400).json({msg: 'Invalid Credentials'})
        // if both email and password match, create & send token
        const token = createToken(user)
        res.json({token})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
}
