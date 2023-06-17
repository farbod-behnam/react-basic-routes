import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import WelcomeNewUser from './WelcomeNewUser'

export default function Welcome() {
  return (
    <Fragment>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <WelcomeNewUser />
      </Route>
    </Fragment>
  )
}
