import React, { PureComponent } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

class Question extends PureComponent {
  render () {
    const { question, handleShowAnswer } = this.props

    return (
      <View>
        <Text>{ question }</Text>
        <TouchableHighlight onPress={handleShowAnswer}>
          <Text>Answer</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Question