import {useState, useContext} from 'react'
import {ContactContext} from '../../context/contact/ContactContext'

const ContactForm = () => {
    const {addContact} = useContext(ContactContext)

    const initialContact = {
        name: '', 
        email: '', 
        phone: '', 
        type: 'personal'
    }

    const [contact, setContact] = useState(initialContact)

    const {name, email, phone, type} = contact

    const onChange = e => setContact({...contact, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        addContact(contact)
        setContact(initialContact)
    }

    return(
        <form onSubmit={onSubmit}>
            <h5 className="text-primary text-center">Add Contact</h5>
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
                {' '}
                <input 
                    type="radio" 
                    name="type" 
                    value="professional" 
                    checked={type === "professional"}
                    onChange={onChange}
                /> professional    
            </div>
            <div>
                <input type="submit" value="Save" className="btn btn-primary btn-block"/>
            </div>
        </form>
    )
}

export default ContactForm
