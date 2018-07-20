import React, { Component, Fragment } from 'react'
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
      <Fragment>
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
      </Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params

  return {
    question: state.questions[id],
    users: Object.keys(state.users),
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Question)
