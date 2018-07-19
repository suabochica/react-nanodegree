import React, { Component } from 'react'
import { connect } from 'react-redux'
// Relative imports
import { handleSaveVote } from '../../redux/actions/questions.action'

class QuestionOptions extends Component {
  state = {
    userVote: ''
  }
  handleChangeOptionOne = (event) => {
    const { questionId } = this.props
    const option = event.target.name

    event.preventDefault()

    this.setState(() => ({
      userVote: {
        questionId,
        option
      }
    }))
  }

  handleChangeOptionOne = (event) => {
    const { questionId } = this.props
    const option = event.target.name

    event.preventDefault()

    this.setState(() => ({
      userVote: {
        questionId,
        option
      }
    }))

  }

  handleSubmit = (event) => {
    const { dispatch } = this.props
    const { userVote } = this.state

    event.preventDefault()

    dispatch(handleSaveVote(userVote))

    this.setState(() => ({
      userVote: ''
    }))
  }

  render() {
    const { question, users } = this.props
    const {
      author,
      optionOne,
      optionTwo,
    } = question
    const userAuthor = users.find(user => user.id === author)

    return (
      <div>
        <h1>Question Options</h1>
        <figure className="questions-question-card-avatar">
          <img
            src={userAuthor.avatarURL || ''}
            alt={author}
          />
        </figure>
        <div className="questions-question-card-info">
          <div className="questions-question-card-user">
            {author} asks
                </div>
          <h3> Would you rather? </h3>
          <form
            onSubmit={this.handleSubmit}
          >
            <input
              type="radio"
              name="optionOne"
              value={optionOne.text}
              onChange={this.handleChangeOptionOne}
            /> {optionOne.text}
            <input
              type="radio"
              name="optionTwo"
              value={optionTwo.text}
              onChange={this.handleChangeOptionOne}
            /> {optionTwo.text}
            <button
              type="submit"
            >
              Submit
          </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const questionId = props.questionId
  const question = state.questions[questionId]

  return {
    questionId: questionId,
    question: question,
    users: Object.values(state.users),
    authedUser: state.authedUser,
  }
}
export default connect(mapStateToProps)(QuestionOptions)