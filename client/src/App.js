import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ContactContextProvider from './context/contact/ContactContext'
import AuthContextProvider from './context/auth/AuthContext'
import './App.css'

const App = () => {
  return (
    <AuthContextProvider>
      <ContactContextProvider>
        <Router>
          <Fragment>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactContextProvider>
    </AuthContextProvider>
  )
}

export default App
