import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogInUser } from '../../redux/actions/authedUser.action'

class Login extends Component {
  constructor(props) {
    super(props)
    this.authedUser = React.createRef()
    this.state = {
      user: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()

    const user = event.target.value

    this.setState(() => ({
      user
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { dispatch } = this.props
    const { user } = this.state

    dispatch(handleLogInUser(user))

  }

  render () {
    const { users, authedUser } = this.props

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
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Login)