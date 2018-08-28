import React, { PureComponent } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import TextButton from '../TextButton/TextButton.component';

class Question extends PureComponent {
  render () {
    const { question, handleShowAnswer } = this.props

    return (
      <View>
        <Text>{ question }</Text>
        <TextButton onPress={handleShowAnswer}>
          Answer
        </TextButton>
      </View>
    )
  }
}

export default Question