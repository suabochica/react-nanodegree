import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault()

    // TODO: logic to select user
  }

  render () {
    const { users, authedUser } = this.props
    console.log({users})
    console.log({authedUser})

    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          {
            users.length === 0 &&
            'Loading'
          }
          {
            users.length > 0 && (
              <div>
                <select
                  className="login-select"
                  ref={authedUser}
                >
                  {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))}
                </select>
                <button className="login-button">
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
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Login)