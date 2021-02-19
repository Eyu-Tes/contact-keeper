import {createContext, useState} from 'react'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // load user
    const loadUser = async () => {
        if(localStorage.token) {
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get('api/auth')
            setUser(res.data)
            setIsAuthenticated(true)
            setLoading(false)
        } catch (err) {
            localStorage.removeItem('token')
            setToken(null)
            setIsAuthenticated(false)
            setLoading(false)
            setUser(null)
            setError(err.response.data.msg)
        }
    }

    // register user
    const registerUser = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config)
            localStorage.setItem('token', res.data.token)
            setToken(res.data.token)
            setIsAuthenticated(true)
            setLoading(false)
            
            loadUser()
        } catch (err) {
            localStorage.removeItem('token')
            setToken(null)
            setIsAuthenticated(false)
            setLoading(false)
            setUser(null)
            setError(err.response.data.msg)
        }
    }

    // login user
    const loginUser = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/auth', formData, config)
            localStorage.setItem('token', res.data.token)
            setToken(res.data.token)
            setIsAuthenticated(true)
            setLoading(false)
            
            loadUser()
        } catch (err) {
            localStorage.removeItem('token')
            setToken(null)
            setIsAuthenticated(false)
            setLoading(false)
            setUser(null)
            setError(err.response.data.msg)
        }
    }

    // logout
    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setIsAuthenticated(false)
        setLoading(false)
        setUser(null)
    }

    // clear errors 
    const clearErrors = () => {
        setError(null)
    }

    return(
        <AuthContext.Provider value={{
            token, 
            isAuthenticated, 
            loading, 
            user,
            error,
            loadUser, 
            registerUser, 
            loginUser,
            logout, 
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
