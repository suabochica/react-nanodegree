import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../Question/Question'

const ANSWERED = 'answered'
const   UNANSWERED = 'unanswered'

class Questions extends Component {
  state = {
    filter: UNANSWERED
  }

  handleFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  // Candidate to be a component: This code seems reducer code.
  filterQuestions = () => {
    const { filter } = this.state
    const { questions, authedUser } = this.props

    switch (filter){
      case UNANSWERED:
        return questions.filter(question => (
          ![
            ...question.optionOne.voter,
            ...question.optionTwo.votes
          ].some(userId => userId === authedUser.id)
        ))
      case ANSWERED:
        return questions.filter(question => (
          [
            ...question.optionOne.voter,
            ...question.optionTwo.votes
          ].some(userId => userId === authedUser.id)
        ))
      default:
        return questions;
    }
  }

  render () {
    return (
      <div>
        <p>Questions</p>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Questions)