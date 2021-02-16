const {
    createToken
} = require('./utils/token')


const User = require('../models/User')

module.exports.getLoggedinUser = (req, res) => {
    res.send('Get logged in user')
}

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
