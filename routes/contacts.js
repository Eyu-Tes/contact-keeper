const express = require('express')

const auth = require('../middleware/auth')

const {
    getAllContacts, 
    createContact,
    updateContact, 
    deleteContact
} = require('../controllers/contacts')

// initializer router
const router = express.Router()

// @route   /api/contacts
// @access  Private
router.route('/')
// @method  GET
// @desc    Get all contacts of a user
.get(auth, getAllContacts)
// @method  POST
// @desc    Add new contact
.post(auth, createContact)

// @route   /api/contacts/:id
// @access  Private
router.route('/:id')
// @method  PUT
// @desc    Update contact
.put(auth, updateContact)
// @method  DELETE 
// @desc    Delete contact
.delete(auth, deleteContact)

module.exports = router
