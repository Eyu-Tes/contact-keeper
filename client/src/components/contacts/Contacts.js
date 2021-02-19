import {useContext, Fragment} from 'react'
import {ContactContext} from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    const {contacts, filtered} = useContext(ContactContext)
    return(
        <Fragment>
            {
            contacts.length === 0 ? 
                <h4>Please add contact!</h4> :
                (
                filtered ? 
                filtered.map(contact => (<ContactItem key={contact.id} contact={contact}/>)) : 
                contacts.map(contact => (<ContactItem key={contact.id} contact={contact}/>))
                )
            }
        </Fragment>
    )
}

export default Contacts
