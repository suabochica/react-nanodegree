import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question, users } = this.props

    return (
      <div className="questions-question-card">
        <figure className="questions-question-card-avatar">
          <img
            alt={question.author}
          />
        </figure>
        <div className="questions-question-card-info">
          <div className="questions-question-card-user">
            {question.author} asks
          </div>
          <p> Would you rather? </p>
          <button
            className="questions-question-card-btn"
          >
            View poll
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { questionId }) {
  const question = questions[questionId]
  return {
    authedUser,
    users,
    question: question,
  }
}

export default connect(mapStateToProps)(Question)