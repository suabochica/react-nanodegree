import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogOutUser } from '../../redux/actions/authedUser.action'
// Relative import
import './Nav.styles.css'

class Nav extends Component {
  handleClickLogOut = (event) => {
    const { dispatch, history } = this.props

    event.preventDefault()
    dispatch(handleLogOutUser())
    history.push('/')
  }

  render() {
    const { authedUser } = this.props

    return (
      <div className="container border-bottom">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new" exact activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" exact activeClassName="active">
                Leader Board
              </NavLink>
            </li>
            <li>
              {
                authedUser
                ?  <NavLink to="/login"
                      className="logout-link"
                      exact
                      activeClassName="active"
                      onClick={this.handleClickLogOut}
                    >
                    <img
                      className="login-avatar"
                      src={authedUser.avatarURL}
                      alt={authedUser.id}
                    />
                    Logout
                  </NavLink>
                : <NavLink to="/login" exact activeClassName="active">
                    Login
                  </NavLink>
              }
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.authedUser !== null) {
    const loggedUser = state.users[state.authedUser.user]

    return {
      authedUser: loggedUser,
    }
  } else {
    return {
      authedUser: '',
    }
  }
}

export default withRouter(connect(mapStateToProps)(Nav))