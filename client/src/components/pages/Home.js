import {useContext, useEffect} from 'react'
import Contacts from '../../components/contacts/Contacts'
import ContactForm from '../../components/contacts/ContactForm'
import ContactFilter from '../../components/contacts/ContactFilter'
import {AuthContext} from '../../context/auth/AuthContext'

const Home = () => {
    const {loadUser} = useContext(AuthContext)
    useEffect(()=> {
        loadUser()
        // eslint-disable-next-line
    }, [])
    return(
        <div className="row">
            <div className="col-md-6">
                <ContactForm/>
            </div>
            <div className="col-md-6">
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    )
}

export default Home
