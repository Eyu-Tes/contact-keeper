const express = require('express')

// initializer router
const router = express.Router()

// @route   /api/contacts
// @access  Private
router.route('/')
// @method  GET
// @desc    Get all contacts of a user
.get((req, res) => {
    res.send('Get all contacts a user')
})
// @method  POST
// @desc    Add new contact
.post((req, res) => {
    res.send('Add new contact')
})

// @route   /api/contacts/:id
// @access  Private
router.route('/:id')
// @method  PUT
// @desc    Update contact
.put((req, res) => {
    res.send('Update contact')
})
// @method  DELETE 
// @desc    Delete contact
.delete((req, res) => {
    res.send('Delete contact')
})

module.exports = router
