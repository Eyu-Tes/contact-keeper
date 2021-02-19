import {useRef, useContext} from 'react'
import {ContactContext} from '../../context/contact/ContactContext'

const ContactFilter = () => {
    const {filtered, filterContacts, clearFilter} = useContext(ContactContext)
    const text = useRef('')
    const onChange = e => {
        if(text.current.value !== ''){
            filterContacts(e.target.value)
        }
        else{
            clearFilter()
        }
    }
    return(
        <input 
            ref={text}
            placeholder="Filter Contacts ..."
            autoFocus
            className="form-control form-control-sm"
            onChange={onChange}
        />
    )
}

export default ContactFilter
