import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {

  render() {
    const { users } = this.props

    return (
      <div>
        <h1>Leaderboard</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <figure className="leaderboard-card-avatar">
                <img
                  src={user.avatarURL}
                  alt={'user.id'}
                />
              </figure>
              <div className="leaderboard-card-info">
                <p>{Object.keys(user.answers).length} Questions answered</p>
                <p>{user.questions.length} Questions created</p>
              </div>
              <div className="leaderboard-card-score">
              <p> Total {Object.keys(user.answers).length + user.questions.length}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    users: Object.values(state.users),
  }
}

export default connect(mapStateToProps)(Leaderboard)
