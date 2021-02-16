const { body, validationResult } = require('express-validator')

const userValidationRules = () => ([
        body('name')
        .not().isEmpty().withMessage('Please include name')
        .isLength({min: 4}).withMessage('Please make sure name is atleast 4 characters long.'), 
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
])

// NB: make sure u add the 'next' middleware so that the router proceeds to the next handler function
const validate = (req, res, next) => {
    const errors = validationResult(req)

    /*  example: 
        - router.post('/', userValidationRules(), validate, signupUser)
        - if there are no errors go to the next function, i.e. signupUser
        - if next() was not called, the execution will not proceed to the signupUser function
    */
    if (errors.isEmpty()) return next()

    // if there are errors there is no need to execute the next function
    const errorMessages = errors.array().map(error => ({[error.param]: error.msg}))
    res.status(400).json({
        errors: errorMessages
    })
}

module.exports = {
    userValidationRules, 
    validate,
}
