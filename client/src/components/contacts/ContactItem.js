import {useContext} from 'react'
import PropTypes from 'prop-types'
import {ContactContext} from '../../context/contact/ContactContext'

const ContactItem = ({contact: {_id, name, email, phone, type}}) => {
    const {deleteContact, setCurrentContact, clearCurrentContact} = useContext(ContactContext)

    const onDelete = () => {
        deleteContact(_id)
        clearCurrentContact()
    }

    return(
        <div className="card bg-light rounded-0">
            <div className="text-primary text-left"> 
                <b>{name}</b> {" "}
                <span 
                    className={`badge badge-${type === 'professional' ? 'success' : 'primary'}`}
                    style={{float: 'right'}}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </div>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fa fa-envelope-open"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fa fa-phone"></i> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button 
                    onClick={() => setCurrentContact(_id)}
                    className="btn btn-dark btn-sm rounded-0 mr-1"
                >Edit
                </button>
                <button 
                    onClick={onDelete}
                    className="btn btn-danger btn-sm rounded-0"
                >Delete
                </button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
