import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import { addCardToDeck } from '../../utils/api'
import { addCard } from '../../redux/actions/decks.action'

class NewCard extends Component {
  state = {
    questionText: '',
    answerText: '',
  }

  handleCreateCardSubmit = () => {
    const { dispatch, navigation } = this.props
    const { questionText, answerText } = this.state
    const { deck } = navigation.state.params

    if ((questionText !== '' && answerText !== '')) {
      const card = {
        question: questionText,
        answer: answerText,
      }
    }

    addCardToDeck(card, deck)
      .then(() => {
        dispatch(addCard(card, deck))
        this.setState({questionText: '', answerText: ''})
        navigation.goBack()
      })
  }

  onChangeQuestionText = (questionText) => {
    this.setState(questionText)
  }

  onChangeAnswerText = (answerText) => {
    this.setState(answerText)
  }

  render () {
    const { answerText, questionText } = this.state

    return(
      <KeyboardAvoidingView>
        <Text>Type the question of your new card, please</Text>
        <TextInput
          value={questionText}
          onChangeText={this.onChangeQuestionText}
          placeholder='Question'
        />
        <Text>Type the answer of your new question, please</Text>
        <TextInput
          value={answerText}
          onChangeText={this.onChangeAnswerText}
          placeholder='Answer'
        />
        <TouchableHighlight
          onPress={this.handleCreateCardSubmit}
        >
          <Text>Submit</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewCard)