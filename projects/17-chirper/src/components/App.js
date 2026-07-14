import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {
              this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/tweet/:id' exact component={TweetPage}/>
                    <Route path='/new' exact component={NewTweet}/>
                  </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)