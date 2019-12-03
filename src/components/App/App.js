import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import DoctorCreate from '../Actions/DoctorCreate'
import Doctor from '../Actions/Doctor'
import Doctors from '../Actions/Doctors'
import DoctorUpdate from '../Actions/DoctorUpdate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Route exact path='/' render={() => (
            <Doctors alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/create-doctor' render={() => (
            <DoctorCreate alert={this.alert} user={user}/>
          )} />
          <Route exact path='/doctors/:id' render={() => (
            <Doctor alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/doctors' render={() => (
            <Doctors alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/doctors/:id/edit' render={() => (
            <DoctorUpdate alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
