import React, { Component } from 'react'
import { connect } from 'react-redux'
// Relative Imports
import QuestionOptions from './QuestionOptions.component'
import QuestionResults from './QuestionResults.component'

class Question extends Component {
  render() {
    const { question, authedUser} = this.props
    const isQuestionAnswered = [
        ...question.optionOne.votes,
        ...question.optionTwo.votes
      ].some(userId => userId === authedUser.user)

      return (
      <div>
        <h1>Question</h1>

        {
          question === undefined &&
          'Loading question..'
        }

        {
          question !== undefined &&
          (
            <div>
              {
                isQuestionAnswered
                ? (<QuestionResults questionId={question.id} />)
                : (<QuestionOptions questionId={question.id} />)
              }
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

  return {
    question: state.questions[id],
    users: Object.keys(state.users),
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Question)
