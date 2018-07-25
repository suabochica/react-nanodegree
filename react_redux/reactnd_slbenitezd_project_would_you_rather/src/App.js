import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// Relative imports
import { handleInitialData } from './redux/actions/shared'

import {
  NewQuestion,
  Question,
  Questions,
  Login,
  Leaderboard,
  Nav,
  PrivateRoute,
  PageNotFound,
} from './components'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            <Switch>
              <PrivateRoute path='/' exact component={Questions} authedUser={this.props.authedUser} />
              <PrivateRoute path='/question/:id' exact component={Question} authedUser={this.props.authedUser} />
              <PrivateRoute path='/add' exact component={NewQuestion} authedUser={this.props.authedUser} />
              <PrivateRoute path='/leaderboard' exact component={Leaderboard} authedUser={this.props.authedUser} />
              <Route path='/login' exact component={Login} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ authedUser: state.authedUser })

export default connect(mapStateToProps)(App)
