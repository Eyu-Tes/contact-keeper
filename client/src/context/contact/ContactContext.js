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

    // set current contact
    const setCurrent = () => {

    }
    // clear current contact
    const clearCurrent = () => {

    }
    // add contact
    const addContact = () => {

    }
    // update contact 
    const updateContact = () => {

    }
    // delete contact
    const deleteContact = () => {

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
            setCurrent, 
            clearCurrent,
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
