import React, { Component } from 'react'
import { Provider }  from 'react-redux'
import { Text, View } from 'react-native'

import { store } from './src/redux/store'


export default class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}


