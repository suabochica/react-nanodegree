
import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import { startCards } from '../../redux/actions/cards.action'

class Deck extends Component {
  render () {
    const { decks } = this.props
    const { deckItem } = this.props.navigation.state.params
    const { title, questions } = decks[deckItem]

    return (
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{questions.length} Cards</Text>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate(
            'NewCard',
            {
              deck: deckItem,
            }
          )
        }}>
          <Text>Add New Card</Text>
        </TouchableOpacity>
        {questions.length > 0 && (
          <TouchableOpacity onPress={() => {
            this.props.dispatch(startCards())
            this.props.navigation.navigate(
              'Cards',
              {
                deck: deckItem,
              }
            )
          }}>
            <Text>Start Test</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

function mapStateToProps ({decks}) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Deck)