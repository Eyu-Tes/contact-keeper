const jwt = require('jsonwebtoken')

// creates JSON web token (JWT)
module.exports.createToken = (user) => {
    // payload is the object we want to send in the token
    const payload = {
        user: {
            id: user.id
        }
    }
    // syntax: jwt.sign(payload, secretOrPrivateKey, [options, callback])
    const token = jwt.sign(payload, process.env.jwtSECRET, {
        expiresIn: 86400        // expires in 24 hours
    })

    return token
}
