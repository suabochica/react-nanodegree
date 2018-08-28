import React, { PureComponent } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { TextButton } from '..';

class Answer extends PureComponent {
  render () {
    const { answer, handleShowQuestion } = this.props

    return (
      <View>
        <Text>{answer}</Text>
        <TextButton onPress={handleShowQuestion}>
          Question
        </TextButton>
      </View>
    )
  }
}

export default Answer