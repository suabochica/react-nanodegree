import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import { addDeck } from '../../redux/actions/decks.action'
import { saveDeckTitle } from '../../utils/api'

class NewDeck extends Component {
  state = {
    titleText: ''
  }

  handleCreateDeckSubmit = () => {
    const { dispatch, navigation } = this.props
    const { titleText } = this.state
    const deck = {
      [titleText]: {
        titleText,
        questions: [],
      }
    }

    saveDeckTitle(deck)
      .then(() => {
        this.setState({title: ''})
        dispatch(addDeck(deck))
        navigation.goBack()
      })
  }

  onChangeTitleText = (titleText) => {
    this.setState(titleText)
  }

  render () {
    const { titleText } = this.state

    return(
      <KeyboardAvoidingView>
        <Text>Type the title of your new deck, please</Text>
        <TextInput
          value={titleText}
          ref={input => {this.inputs['deck'] = input}}
          onChangeText={this.onChangeTitleText}
          placeholder='Deck Title'
        />
        <TouchableHighlight
          onPress={this.handleCreateDeckSubmit}
        >
          <Text>Submit</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)