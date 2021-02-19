import {useContext, Fragment} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {ContactContext} from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    const {contacts, filtered} = useContext(ContactContext)
    return(
        <Fragment>
        {
            contacts.length === 0 ? 
            <h5 className="my-1">Please add contact!</h5> :
            <TransitionGroup>
                {
                filtered ? 
                filtered.map(contact => (
                    <CSSTransition key={contact.id} timeout={500} classNames="fade">
                        <ContactItem contact={contact}/>
                    </CSSTransition>
                )) : 
                contacts.map(contact => (
                    <CSSTransition key={contact.id} timeout={500} classNames="fade">
                        <ContactItem contact={contact}/>
                    </CSSTransition>
                ))
                }
            </TransitionGroup>
        }
        </Fragment>
    )
}

export default Contacts
