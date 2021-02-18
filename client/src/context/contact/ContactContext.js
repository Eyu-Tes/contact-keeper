import {createContext, useState} from 'react'
import {v4 as uuid} from 'uuid'

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
    const [contacts, setContacts] = useState([
        {
            id: 1, 
            name: 'Jill Johnson', 
            email: 'jill@gmail.com', 
            phone: '111-111-1111',
            type: 'personal'
        }, 
        {
            id: 2, 
            name: 'Sara Watson', 
            email: 'sara@gmail.com', 
            phone: '222-222-2222',
            type: 'personal'
        }, 
        {
            id: 3, 
            name: 'Harry White', 
            email: 'harry@gmail.com', 
            phone: '333-333-3333',
            type: 'professional'
        }
    ])

    const [current, setCurrent] = useState(null)

    // add contact
    const addContact = contact => {
        contact.id = uuid()
        setContacts([...contacts, contact])
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
    const filterContacts = () => {

    }
    // clear filter
    const clearFilter = () => {

    }
    
    return(
        <ContactContext.Provider value={{
            contacts, 
            current,
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
