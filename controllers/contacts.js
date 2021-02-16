const Contact = require('../models/Contact')

// Get all contacts for a user
module.exports.getAllContacts = async (req, res) => {
    try {
        // get all contacts of the current user
        const contacts = await Contact.find({owner: req.user.id}).sort({date: 'desc'})
        res.json(contacts)       
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
}

// Add contact
module.exports.createContact = async (req, res) => {
    const {name, email, phone, type} = req.body
    try {
        const newContact = new Contact({name, email, phone, type, owner: req.user.id})
        let error = await newContact.validate()
        if(error) throw(error)
        const contact = await newContact.save()
        res.json(contact)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
}

// Add contact
module.exports.updateContact = async (req, res) => {
    const {name, email, phone, type} = req.body
    // Build contact object
    const contactFields = {};
    if (name) contactFields.name = name
    if (email) contactFields.email = email
    if (phone) contactFields.phone = phone
    if (type) contactFields.type = type
    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) return res.status(404).json({msg: 'Contact not found'})

        // Make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'});
        }

        contact = await Contact.findByIdAndUpdate(
            req.params.id,
            {$set: contactFields},
            {new: true},
        )
        res.json(contact)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
}

// Add contact
module.exports.deleteContact = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) return res.status(404).json({msg: 'Contact not found'})

        // Make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }

        await Contact.findByIdAndRemove(req.params.id)
        res.json({msg: 'Contact removed'})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
}
