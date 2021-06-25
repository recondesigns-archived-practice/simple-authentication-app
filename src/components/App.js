import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'
import LandingPage from './Landing'
import LoginPage from './Login'
import SignupPage from './Signup'
import DashboardPage from './Dashboard'

function App() {
  const [currentUser] = useContext(AuthContext)
  console.log(currentUser)
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/signup'} component={SignupPage} />
        {(currentUser !== null) ? <Route path={'/dashboard'} component={DashboardPage} /> : <Route path={'/'} component={LandingPage} />}
      </Switch>
    </>
  )
}

export default App