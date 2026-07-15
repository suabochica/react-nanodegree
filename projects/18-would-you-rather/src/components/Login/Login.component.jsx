import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// Relative Imports
import { handleLogInUser } from '../../redux/actions/authedUser.action'
import './Login.styles.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.userToLogIn = React.createRef()
    this.state = {
      user: '',
      redirectToReferrer: false,
    }
  }

  handleChange = (event) => {
    const user = event.target.value

    event.preventDefault()

    this.setState(() => ({
      user
    }))
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props
    const { user } = this.state

    event.preventDefault()

    dispatch(handleLogInUser(user))

    this.setState(() => ({
      redirectToReferrer: true
    }))

  }

  render () {
    const { users, location, authedUser } = this.props
    const { from } = location.state || { from: { pathname: '/' }}
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true && authedUser !== null) {
      return <Redirect to={from} />
    }

    return (
      <div className="container center">
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          { users.length === 0 &&
            'Loading...'
          }
          { users.length > 0 && (
              <div className="center login-select">
                <select
                  ref={this.userToLogIn}
                  onChange={this.handleChange}
                >
                  <option value="default">Select an user</option>
                  {users.map(user => (
                    <option
                      key={user.id}
                      value={user.id}
                    >
                      {user.name}
                    </option>
                  ))}
                </select>
                <button className="btn login-button">
                  Login
                </button>
              </div>
            )
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(Login)