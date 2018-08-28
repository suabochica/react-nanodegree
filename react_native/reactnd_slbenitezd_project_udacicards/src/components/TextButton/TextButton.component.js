import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

class TextButton extends PureComponent {
  render () {
    const { children, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}

export default TextButton