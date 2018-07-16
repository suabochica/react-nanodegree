import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOptions from './QuestionOptions.component'
import QuestionResults from './QuestionResults.component'

class Question extends Component {

  render() {
    const { question, users, authedUser} = this.props
    /*
    const isQuestionAnswered = [
        ...question.optionOne.votes,
        ...question.optionTwo.votes
      ].some(userId => userId === authedUser)
    */

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
                //TODO: review how to add a flag to the answered questions
                true
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
  // const { id } = props.match.params

  const questionId = props.questionId

  return {
    question: state.questions[questionId],
    users: Object.keys(state.users),
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Question)
