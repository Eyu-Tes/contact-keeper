const express = require('express')

// initializer router
const router = express.Router()

// @route   /api/auth
router.route('/')
// @method  GET
// @desc    Get loggedin user
// @access  Private
.get(                                       
    (req, res) => {
    res.send('Get logged in user')
})
// @method  POST
// @desc    Auth user & get token
// @access  Public
.post(                                  
    (req, res) => {
    res.send('Log in user')
})

module.exports = router
