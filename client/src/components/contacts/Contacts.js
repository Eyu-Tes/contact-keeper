import {Fragment, useContext, useEffect} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {ContactContext} from '../../context/contact/ContactContext'
import Spinner from '../layout/Spinner'
import ContactItem from './ContactItem'

const Contacts = () => {
    const {contacts, filtered, getContacts, loading} = useContext(ContactContext)
    useEffect(() => {
        getContacts()
        // eslint-disable-next-line
    }, [])
    return(
        <Fragment>
        {
            (contacts !== null && contacts.length === 0 && !loading) ? 
            <h5 className="my-1">Please add contact!</h5> :
            (contacts !== null && !loading) ? (
                <TransitionGroup>
                    {
                    filtered ? 
                    filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="fade">
                            <ContactItem contact={contact}/>
                        </CSSTransition>
                    )) : 
                    contacts.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="fade">
                            <ContactItem contact={contact}/>
                        </CSSTransition>
                    ))
                    }
                </TransitionGroup>
            ) : 
            <Spinner/>    
        }
        </Fragment>
    )
}

export default Contacts
