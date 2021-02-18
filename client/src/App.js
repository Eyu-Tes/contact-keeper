import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactContextProvider from './context/contact/ContactContext'
import './App.css'

const App = () => {
  return (
    <ContactContextProvider>
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactContextProvider>
  )
}

export default App
