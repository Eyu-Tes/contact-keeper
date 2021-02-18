import Contacts from '../../components/contacts/Contacts'
import ContactForm from '../../components/contacts/ContactForm'

const Home = () => (
    <div className="row">
        <div className="col-md-6">
            <ContactForm/>
        </div>
        <div className="col-md-6">
            <Contacts/>
        </div>
    </div>
)

export default Home
