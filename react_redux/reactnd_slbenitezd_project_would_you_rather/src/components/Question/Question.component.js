import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOptions from './QuestionOptions.component'
import QuestionResults from './QuestionResults.component'

class Question extends Component {
  handleSubmit = (event) => {
    event.preventDefault()

    // TODO: logic to answer question
  }

  render() {
    const { question, users , authedUser, answered} = this.props
    const {
      author,
      optionOne,
      optionTwo,
    } = question
    const userAuthor = users.find(user => user.id === question.author)

    return (
      <div>
        <h1>Question</h1>
        {
          question === undefined &&
          'Loading question..'
        }

        {
          question !== undefined && userAuthor !== undefined &&
          (
            <div>
              {
                //TODO: review how to add a flag to the answered questions
                false
                ? (<QuestionOptions questionId={question.id} />)
                : (<QuestionResults questionId={question.id} />)
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
  const quesitonArray = Object.values(state.questions)
  const question = quesitonArray.length > 0
    ? quesitonArray.find(currentQuestion => currentQuestion.id === questionId)
    : ''

  return {
    question: question,
    users: Object.values(state.users),
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Question)
