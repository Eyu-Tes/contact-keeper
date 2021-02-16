const express = require('express')

const auth = require('../middleware/auth')

const {
    userSigninValidationRules, 
    validate
} = require('../controllers/utils/validator')

const {
    getLoggedinUser,
    signinUser
} = require('../controllers/auth')

// initializer router
const router = express.Router()

// @route   /api/auth
router.route('/')
// @method  GET
// @desc    Get loggedin user
// @access  Private
.get(auth, getLoggedinUser)                 //  passes the auth middleware to ensure authorization
// @method  POST
// @desc    Auth user & get token
// @access  Public
.post(userSigninValidationRules(), validate, signinUser)

module.exports = router
