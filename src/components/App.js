import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Landing'
import LoginPage from './Login'
import SignupPage from './Signup'
import DashboardPage from './Dashboard'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/login'} component={LoginPage} />
        <Route exact path={'/signup'} component={SignupPage} />
        <Route exact path={'/dashboard'} component={DashboardPage} />
      </Switch>
    </>
  )
}

export default App