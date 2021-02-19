import {Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/auth/AuthContext'

const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext)
    const {isAuthenticated, logout, user} = authContext
    const onLogout = () => {
        logout()
    }
    const authLinks = (
        <Fragment>
            <li className="nav-item">
                <div className="nav-link">Hello {user && user.name}</div>
            </li>
            <li className="nav-item">
                <Link to="#!"  onClick={onLogout} className="nav-link">
                    <i className="fa fa-sign-out"></i> Logout
                </Link>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
        </Fragment>
    )
    return(
        <nav className="navbar navbar-expand-md bg-primary">
            <h1>
                <Link className="navbar-brand" to="/">
                    <i className={icon}/> {title}
                </Link>
            </h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="dropdown-divider"></div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? authLinks : guestLinks }
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper', 
    icon: 'fa fa-id-card'
}

export default Navbar
