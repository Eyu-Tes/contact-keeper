import {useState, useContext} from 'react'
import {AuthContext} from '../../context/auth/AuthContext'

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const initialUser = {
        email: '', 
        password: ''
    }
    const [user, setUser] = useState(initialUser)
    const {email, password} = user
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        loginUser()
        setUser(initialUser)
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
