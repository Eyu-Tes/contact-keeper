import {createContext, useState} from 'react'
import axios from 'axios'

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
    const [contacts, setContacts] = useState(null)
    const [current, setCurrent] = useState(null)
    const [filtered, setFiltered] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // get contacts
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts')
            setContacts(res.data)
            setLoading(false)
        } catch (err) {
            setError(err.response.data.msg)
        }
    }

    // clear contacts 
    const clearContacts = () => {
        setContacts(null)
        setFiltered(null)
        setError(null)
        setCurrent(null)
    }

    // add contact
    const addContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/contacts', contact, config)
            setContacts([res.data, ...contacts])
            setLoading(false)
        } catch (err) {
            setError(err.response.data.msg)
        }
    }
    // update contact 
    const updateContact = async (updatedContact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/contacts/${updatedContact._id}`, updatedContact, config)
            setContacts(contacts.map(contact => contact._id === updatedContact._id ? updatedContact : contact))
            setLoading(false)
        } catch (err) {
            setError(err.response.data.msg)
        }
    }
    // delete contact
    const deleteContact = async (id) => {
        try {
            const res = await axios.delete(`/api/contacts/${id}`)
            setContacts(contacts.filter(contact => contact._id !== id))
            setLoading(false)
        } catch (err) {
            setError(err.response.data.msg)
        }
    }
    // set current contact
    const setCurrentContact = (id) => {
        setCurrent(contacts.find(contact => contact._id === id))
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
            loading,
            getContacts, 
            clearContacts,
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
