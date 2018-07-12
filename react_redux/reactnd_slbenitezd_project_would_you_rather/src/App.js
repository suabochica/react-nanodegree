import React, { Component } from 'react';
import { connect } from 'react-redux'

import { handleInitialData } from './redux/actions/shared'

import {
  Question,
  Questions
} from './components'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Questions />
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
