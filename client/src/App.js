import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alerts'
import ContactContextProvider from './context/contact/ContactContext'
import AuthContextProvider from './context/auth/AuthContext'
import AlertContextProvider from './context/alert/AlertContext'
import setAuthToken from './utils/setAuthToken'
import './App.css'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthContextProvider>
      <ContactContextProvider>
        <AlertContextProvider>
          <Router>
            <Fragment>
              <Navbar/>
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/login" component={Login}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertContextProvider>
      </ContactContextProvider>
    </AuthContextProvider>
  )
}

export default App
