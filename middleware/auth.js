// middleware is a function that has access to the request and response objects
// everytime we hit an endpoint, the middleware is fired

const jwt = require('jsonwebtoken')

// protect routes from unauthenticated access
// next means move on to the next middleware
module.exports = (req, res, next) => {
    // get token from header
    // x-auth-token is the key to the token inside the header
    const token = req.header('x-auth-token')
    // check if token doesn't exist (return 401 (unauthorized) error code)
    if (!token) return res.status(401).json({msg: 'No token, authorization denied'})
    // if token exists, verify it
    try {
        const decoded = jwt.verify(token, process.env.jwtSECRET)
        // extract user payload from decoded and assign it as logged user
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}
