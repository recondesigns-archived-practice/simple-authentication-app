import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'
import LandingPage from './Landing'

export default function ProtectedRoute(props) {
    const [currentUser] = useContext(AuthContext)
    const { path, component } = props 

    function setRoute(userStatus) {
        if (userStatus === null) {
            return <Route exact path={'/'} component={LandingPage} />
        } else if (userStatus !== null) {
            return <Route path={path} component={component} />
        }
    }

    let routeComponent = setRoute(currentUser)

    return (
        <>
            {routeComponent}
        </>
    )
}
