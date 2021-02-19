import {useState, useContext} from 'react'
import {AuthContext} from '../../context/auth/AuthContext'

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const initialUser = {
        name: '', 
        email: '', 
        password: '', 
        password2: ''
    }
    const [user, setUser] = useState(initialUser)
    const {name, email, password, password2} = user
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        registerUser()
        setUser(initialUser)
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input 
                        type="password2"
                        className="form-control form-control-sm"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Register
