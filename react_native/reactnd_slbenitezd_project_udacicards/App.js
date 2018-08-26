import React, { Component } from 'react'
import { Provider }  from 'react-redux'
import { Text, View } from 'react-native'
import { createStore } from 'redux'

import rootReducer from './src/redux/reducers'
import {
  DeckList,
} from './src/components'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <DeckList></DeckList>
        </View>
      </Provider>
    );
  }
}


