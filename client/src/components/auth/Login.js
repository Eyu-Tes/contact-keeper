import {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../context/auth/AuthContext'
import {AlertContext} from '../../context/alert/AlertContext'

const Login = (props) => {
    const {loginUser, error, clearErrors, isAuthenticated} = useContext(AuthContext)
    const {addAlert} = useContext(AlertContext)
    const initialUser = {
        email: '', 
        password: ''
    }
    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/')
        }
        if(error === "Invalid Credentials") {
            addAlert(error, "danger")
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    const [user, setUser] = useState(initialUser)
    const {email, password} = user
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        if(email === '', password === ''){
            addAlert('Please fill in all fields', 'danger')
        }
        else {
            loginUser({email, password})
        }
    }
    return(
        <div className="form-container">
            <h2 className="text-center">Account <span className="text-primary">Login</span></h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"
                        autoFocus
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
                    />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Login
