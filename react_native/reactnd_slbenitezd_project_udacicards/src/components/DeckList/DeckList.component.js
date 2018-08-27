import React, { Component } from 'react'
import { FlatList, TouchableHighlight, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'

import { getDecks } from '../../utils/api'
import { receiveDecks } from '../../redux/actions/decks.action'


class DeckList extends Component {
  state = {
    showInput: false
  }

  keyExtractor = ( item, index ) => item

  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  renderItem = ({item}) => {
    const { title, questions } = this.props.decks[item];

    return (
      <TouchableHighlight onPress={() => {
        this.props.navigation.navigate(
          'Deck',
          {
            deckItem: item,
            title: title,
            questions: questions,
          }
        )
      }}>
        <View>
          <Text>{title}</Text>
          <Text>{questions.length} Cards</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { decks } = this.props

    if (decks === null) {
      return <AppLoading />
    }

    if (Object.keys(decks).length === 0) {
      return (
        <View style={{paddingTop: 50}}>
          <Text>Add some decks to get started!</Text>
        </View>
      )
    }

    return (
      <View>
        <FlatList
          data={Object.keys(decks)}
          keyExtractor={this.keyExtractor}
          extraData={this.state}
          renderItem={this.renderItem}
          containerStyle={{borderBottomWidth: 2}}
        />
      </View>
    )
  }

}

function mapStateToProps ({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(DeckList)