import {useState, useContext, useEffect} from 'react'
import {ContactContext} from '../../context/contact/ContactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const {addContact, updateContact, current, clearCurrentContact} = contactContext

    const initialContact = {
        name: '', 
        email: '', 
        phone: '', 
        type: 'personal'
    }

    useEffect(() => {
        current ? setContact(current) : setContact(initialContact)
    }, [current, contactContext])

    const [contact, setContact] = useState(initialContact)

    const {name, email, phone, type} = contact

    const onChange = e => setContact({...contact, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        !current ? addContact(contact) : updateContact(contact)
        setContact(initialContact)
        clearCurrentContact()
    }

    return(
        <form onSubmit={onSubmit}>
            <h5 className="text-primary text-center">{!current ? 'Add Contact' : 'Edit Contact'}</h5>
            <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    autoFocus
                    name="name" 
                    value={name} 
                    onChange={onChange}
                    className="form-control form-control-sm"
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={email} 
                    onChange={onChange}
                    className="form-control form-control-sm"
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Phone" 
                    name="phone" 
                    value={phone} 
                    onChange={onChange}
                    className="form-control form-control-sm"
                />
            </div>
            <div className="form-group">
                <div>Contact Type</div>
                <input 
                    type="radio" 
                    name="type" 
                    value="personal" 
                    checked={type === "personal"}
                    onChange={onChange}
                /> personal 
                <span className="mx-1"></span>
                <input 
                    type="radio" 
                    name="type" 
                    value="professional" 
                    checked={type === "professional"}
                    onChange={onChange}
                /> professional    
            </div>
            <div>
                <input type="submit" value={!current ? 'Create' : 'Update'} className="btn btn-primary btn-block mb-1"/>
            </div>
            {current && (
                <button type="clear" onClick={clearCurrentContact} className="btn btn-light btn-block">Clear</button>
            )}
        </form>
    )
}

export default ContactForm
