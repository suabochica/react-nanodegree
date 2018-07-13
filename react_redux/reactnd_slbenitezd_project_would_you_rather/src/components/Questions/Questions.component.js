import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../Question/Question.component'

const ANSWERED = 'answered'
const UNANSWERED = 'unanswered'

class Questions extends Component {
  state = {
    filter: UNANSWERED
  }

  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  // Candidate to be a component: This code seems reducer code.
  filterQuestions = () => {
    const { filter } = this.state
    const { questions, authedUser } = this.props

    switch (filter) {
      case UNANSWERED:

        return questions.filter(question => (
          ![
            ...question.optionOne.votes,
            ...question.optionTwo.votes
          ].some(userId => userId === authedUser)
        ))
      case ANSWERED:
        return questions.filter(question => (
          [
            ...question.optionOne.votes,
            ...question.optionTwo.votes
          ].some(userId => userId === authedUser)
        ))
      default:
        return questions;
    }
  }

  render() {
    const { filter } = this.state
    const { questions, users } = this.props

    return (
      <div>
        <h1>Questions</h1>
        <div className="questions-inputs">
          <label className={`questions-label ${filter === ANSWERED ? 'is-selected' : ''}`}>
            <input
              checked={filter === ANSWERED}
              className="questions-input"
              onChange={this.onChangeFilter}
              type="radio"
              value={ANSWERED}
            />
            Answered
          </label>
          <label className={`questions-label ${filter === UNANSWERED ? 'is-selected' : ''}`}>
            <input
              checked={filter === UNANSWERED}
              className="questions-input"
              onChange={this.onChangeFilter}
              type="radio"
              value={UNANSWERED}
            />
            Unanswered
          </label>
        </div>

        {}
        <ul className="questions-list">
          {this.filterQuestions().map((question) => (
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
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: Object.values(questions),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Questions)