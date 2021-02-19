import {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../context/auth/AuthContext'
import {AlertContext} from '../../context/alert/AlertContext'

const Register = props => {
    const {registerUser, error, clearErrors, isAuthenticated} = useContext(AuthContext)
    const {addAlert} = useContext(AlertContext)
    const initialUser = {
        name: '', 
        email: '', 
        password: '', 
        password2: ''
    }
    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/')
        }
        if(error === "User already exists") {
            addAlert(error, "danger")
            clearErrors()
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    const [user, setUser] = useState(initialUser)
    const {name, email, password, password2} = user
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        if(name === '' || email === '' || password === '') {
            addAlert("Please fill all fields", "danger")
        }
        else if(password !== password2) {
            addAlert("Passwords do not match", "danger")
        }
        else {
            registerUser({name, email, password})
            setUser(initialUser)
        }
    }
    return(
        <div className="form-container">
            <h2 className="text-center">Account <span className="text-primary">Register</span></h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        autoFocus
                        className="form-control form-control-sm"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"
                        className="form-control form-control-sm"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        className="form-control form-control-sm"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input 
                        type="password"
                        className="form-control form-control-sm"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Register
