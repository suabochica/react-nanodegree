import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from './redux/actions/shared'

import {
  Question,
  Questions,
  Login,
} from './components'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        <Question questionId='8xf0y6ziyjabvozdd253nd' />
{/*}
        <Questions/>
        <Login />
*/}
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
