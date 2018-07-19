import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionResults extends Component {
  handleSubmit = (event) => {
    event.preventDefault()

    // TODO: logic to answer question
  }

  render() {
    const { question, authedUser, users } = this.props;
    const { author } = question
    const totalVotes = [
      ...question.optionOne.votes,
      ...question.optionTwo.votes,
    ].length;
    const userAuthor = users.find(user => user.id === question.author)
    const options = [
      {
        ...question.optionOne,
        id: 'optionOne',
      },
      {
        ...question.optionTwo,
        id: 'optionTwo',
      },
    ];


    return (
      <div>
        {
          question === undefined &&
          'Loading question..'
        }

        {
          question !== undefined && userAuthor !== undefined &&
          (
            <div>
              <h1>Question Results</h1>
              <figure className="questions-question-card-avatar">
                <img
                  src={userAuthor.avatarURL || ''}
                  alt={author}
                />
              </figure>
              <div className="questions-question-card-info">
                <div className="questions-question-card-user">
                  {question.author} asks
                </div>
                <h3> Would you rather? </h3>
                {
                  options.map(option => option.votes.length > 0
                    ? (
                      <div
                        className={`question-result`}
                        key={option.id}
                      >
                        <span className="question-result-label">
                          {option.text}:
                        </span>
                        <span className="question-result-percent">
                          {option.votes.length} votes
                          ({`${parseInt((option.votes.length / totalVotes) * 100, 10)}%`})
                        </span>
                      </div>
                    )
                    : null)
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  //const questionId = props.questionId
  const question = state.questions[id]

  return {
    question: question,
    users: Object.values(state.users),
    authedUser: props.authedUser,
  }
}

export default connect(mapStateToProps)(QuestionResults)