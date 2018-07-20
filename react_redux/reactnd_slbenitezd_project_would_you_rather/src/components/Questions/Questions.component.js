import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// Relative Imports
import './Questions.styles.css'

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

  filterQuestions = () => {
    const { filter } = this.state
    const { questions, authedUser } = this.props

    switch (filter) {
      case UNANSWERED:

        return questions.filter(question => (
          ![
            ...question.optionOne.votes,
            ...question.optionTwo.votes
          ].some(userId => userId === authedUser.user)
        ))
      case ANSWERED:

        return questions.filter(question => (
          [
            ...question.optionOne.votes,
            ...question.optionTwo.votes
          ].some(userId => userId === authedUser.user)
        ))
      default:
        return questions;
    }
  }

  render() {
    const { filter } = this.state
    const { users } = this.props

    return (
      <div className="container center">
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

        <ul className="questions-list">
          {this.filterQuestions().map((question) => (
            <div
              className="questions-question-card"
              key={question.id}
            >
              <figure className="questions-question-card-avatar">
                <img
                  src={users.find(user => user.id === question.author).avatarURL || ''}
                  alt={question.author}
                />
              </figure>
              <div className="questions-question-card-info">
                <div className="questions-question-card-user">
                  {question.author} asks
                  </div>
                <h3>Would you rather?</h3>
                <p>{question.optionOne.text}</p>
                <p>{question.optionTwo.text}</p>
                <Link
                  to={`/question/${question.id}`}
                  className='question'
                >
                  View poll
                </ Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions),
    users: Object.values(state.users),
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Questions)