const express = require('express')

const {
    userSignupValidationRules,
    validate
} = require('../controllers/utils/validator')

const {
    signupUser
} = require('../controllers/users')

// initializer router
const router = express.Router()

// @route   POST /api/users
// @desc    Register a user
// @access  Public
router.post('/', userSignupValidationRules(), validate, signupUser)

module.exports = router
