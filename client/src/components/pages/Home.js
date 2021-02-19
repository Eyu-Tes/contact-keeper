import Contacts from '../../components/contacts/Contacts'
import ContactForm from '../../components/contacts/ContactForm'
import ContactFilter from '../../components/contacts/ContactFilter'

const Home = () => (
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

export default Home
