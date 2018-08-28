import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Answer from './Answer.component'
import Question from './Question.component'
import { TextButton } from '../'
import { answerCard } from '../../redux/actions/cards.action'

class Card extends Component {
  state = {
    toggleAnswer: false
  }

  handleToggleToAnswerView() {
    const { toggleAnswer } = this.state

    toggleAnswer === false
      ? this.setState({toggleAnswer: true})
      : this.setState({toggleAnswer: false})
  }

  render () {
    const { dispatch } = this.props
    const { question, answer } = this.props.question
    const { toggleAnswer } = this.state

    return (
      <View>
        <View>
          { toggleAnswer
            ? <Answer
                answer={answer}
                handleShowQuestion={this.handleToggleToAnswerView.bind(this)}
              />
            : <Question
                question={question}
                handleShowAnswer={this.handleToggleToAnswerView.bind(this)}
              />
          }
        </View>
        <View>
          <TextButton
            style={{padding: 10}}
            onPress={() => dispatch(answerCard(true))}
          >
            Correct
          </TextButton>
          <TextButton
            style={{padding: 10}}
            onPress={() => dispatch(answerCard(false))}
          >
            Incorrect
          </TextButton>
        </View>
      </View>
    )
  }
}

export default connect()(Card)