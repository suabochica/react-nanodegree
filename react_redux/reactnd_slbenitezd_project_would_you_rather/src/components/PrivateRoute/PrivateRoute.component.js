import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => console.log(props) || (
        authedUser !== null
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location }, }}/>
      )}
    />
  )
}

export default PrivateRoute