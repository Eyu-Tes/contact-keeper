const express = require('express')

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
.get(getLoggedinUser)
// @method  POST
// @desc    Auth user & get token
// @access  Public
.post(userSigninValidationRules(), validate, signinUser)

module.exports = router
