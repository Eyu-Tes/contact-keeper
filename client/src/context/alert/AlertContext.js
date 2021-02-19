import {createContext, useState} from 'react'
import {v4 as uuid} from 'uuid'

export const AlertContext = createContext()

const AlertContextProvider = (props) => {
    const [alerts, setAlerts] = useState([])
    // add alert
    const addAlert = (msg, type, timeout=5000) => {
        const id = uuid()
        setAlerts([...alerts, {id, msg, type}])
        setTimeout(() => removeAlert(id), timeout)
    }
    // remove alert
    const removeAlert = (id) => {
        setAlerts(alerts.filter(alert => alert.id !== id))
    }
    return(
        <AlertContext.Provider value={{
            alerts, 
            addAlert, 
            removeAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider
