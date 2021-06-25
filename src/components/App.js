import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Landing'
import LoginPage from './Login'
import SignupPage from './Signup'
import ProtectedRoute from './ProtectedRoute'
import DashboardPage from './Dashboard'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/signup'} component={SignupPage} />
        <ProtectedRoute path={'/dashboard'} component={DashboardPage} />
        {/* <Route exact path={'/dashboard'} component={DashboardPage} /> */}
      </Switch>
    </>
  )
}

export default App