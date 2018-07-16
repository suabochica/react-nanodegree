import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionOptions extends Component {

  handleSubmit = (event) => {
    event.preventDefault()

    // TODO: logic to answer question
  }

  render () {
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
            onsSubmit={this.handleSubmit}
          >
            <input type="radio" name="optionOne" value={optionOne.text} /> {optionOne.text}
            <input type="radio" name="optionOne" value={optionTwo.text} /> {optionTwo.text}
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // const { id } = props.match.params

  const questionId = props.questionId
  const question = state.questions[questionId]

  return {
    question: question,
    users: Object.values(state.users),
    authedUser: state.authedUser,
  }
}
export default connect(mapStateToProps)(QuestionOptions)