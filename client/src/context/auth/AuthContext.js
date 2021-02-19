import {createContext, useState} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // load user
    const loadUser = () => {

    }

    // register user
    const registerUser = () => {
        console.log('User Registered')
    }

    // login user
    const loginUser = () => {
        console.log('Uesr Loggedin')
    }

    // logout
    const logoutUser = () => {

    }

    // clear errors 
    const clearErrors = () => {

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
            logoutUser, 
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
