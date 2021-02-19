import {createContext, useState} from 'react'
import axios from 'axios'

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
    const [contacts, setContacts] = useState([])
    const [current, setCurrent] = useState(null)
    const [filtered, setFiltered] = useState(null)
    const [error, setError] = useState(null)

    // add contact
    const addContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/contacts', contact, config)
            setContacts([...contacts, res.data])
        } catch (err) {
            setError(err.response.data.msg)
        }
    }
    // update contact 
    const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact))
    }
    // delete contact
    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }
    // set current contact
    const setCurrentContact = (id) => {
        setCurrent(contacts.find(contact => contact.id === id))
    }
    // clear current contact
    const clearCurrentContact = () => {
        setCurrent(null)
    }
    // filter contacts
    const filterContacts = text => {
        setFiltered(contacts.filter(contact => {
            // regular exp
            const regex = new RegExp(text.trim(), 'gi')
            return (contact.name.match(regex) || contact.email.match(regex))
        }))
    }
    // clear filter
    const clearFilter = () => {
        setFiltered(null)
    }
    
    return(
        <ContactContext.Provider value={{
            contacts, 
            current,
            filtered,
            error,
            setCurrentContact, 
            clearCurrentContact,
            addContact, 
            updateContact, 
            deleteContact, 
            filterContacts, 
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider
