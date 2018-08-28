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
    title: ''
  }

  handleCreateDeckSubmit = () => {
    const { dispatch, navigation } = this.props
    const { title } = this.state
    const deck = {
      [title]: {
        title,
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

  onChangeTitleText = (title) => {
    this.setState({title})
  }

  render () {
    const { title } = this.state

    return(
      <KeyboardAvoidingView>
        <Text>Type the title of your new deck, please</Text>
        <TextInput
          value={title}
          onChangeText={(title) => this.setState({title})}
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