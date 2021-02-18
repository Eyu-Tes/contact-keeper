import {useContext, Fragment} from 'react'
import {ContactContext} from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    const {contacts} = useContext(ContactContext)
    return(
        <Fragment>
            {contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
        </Fragment>
    )
}

export default Contacts
