
import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  render () {
    const { decks, deckItem } = this.props.navigation.state.params
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
            this.props.navigation.navigate(
              'Cards',
              {
                deck: deckItem,
              }
            )
          }}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

function mapStateToProps ( state, { navigation } ) {
  const { deckItem } = navigation.state.params

  return {
    deckItem,
  }
}

export default connect(mapStateToProps)(Deck)