import React, { Component } from 'react'
import { Provider }  from 'react-redux'
import { StatusBar, Text, View } from 'react-native'
import { createStore } from 'redux'

import rootReducer from './src/redux/reducers'
import MainNavigator from './src/navigation'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}


