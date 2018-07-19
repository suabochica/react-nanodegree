import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
// Relative Imports
import { handleLogInUser } from '../../redux/actions/authedUser.action'

class Login extends Component {
  constructor(props) {
    super(props)
    this.authedUser = React.createRef()
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
    const { users, location } = this.props
    const { from } = location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

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
                  ref={this.authedUser}
                  onChange={this.handleChange}
                >
                  {users.map(user => (
                    <option
                      key={user.id}
                      value={user.id}
                    >
                      {user.name}
                    </option>
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
  }
}

export default connect(mapStateToProps)(Login)