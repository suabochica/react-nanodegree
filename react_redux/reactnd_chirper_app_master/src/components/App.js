import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {
          this.props.loading === true
            ? null
            : <Dashboard/>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

/*<TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>*/

export default connect(mapStateToProps)(App)