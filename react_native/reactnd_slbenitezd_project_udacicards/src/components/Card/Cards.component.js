import React , { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Card, TextButton } from '../'

class Cards extends Component {
  render () {
    const { navigate } = this.props.navigation
    const { deck } = this.props.navigation.state.params
    const { correct, currentQuestion, decks, dispatch } = this.props
    const { questions } = decks[deck]
    const score = Math.round((correct / questions.length) * 100)

    if ( questions.length > 0 && currentQuestion === questions.length) {
      return (
        <View>
          <Text>
            Done! You got {score} in this quiz
          </Text>
          <TextButton
            style={{padding: 10}}
            onPress={() => dispatch(resetQuiz())}
          >
            Restart Quiz
          </TextButton>
          <TextButton
            style={{padding: 10}}
            onPress={() => navigate.goBack()}
          >
            Back to Decks
          </TextButton>
        </View>
      )
    }

    return (
      <View>
        <Text>{currentQuestion + 1} / {questions.length}</Text>
        <Card question={questions[currentQuestion]}/>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    correct: state.cards.correct,
    currentQuestion: state.cards.currentQuestion,
    decks: state.decks,
  }
}

export default connect(mapStateToProps)(Cards)