import React, { PureComponent } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

class Answer extends PureComponent {
  render () {
    const { answer, handleShowQuestion } = this.props

    return (
      <View>
        <Text>{ answer }</Text>
        <TouchableHighlight onPress={handleShowQuestion}>
          <Text>Question</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Answer