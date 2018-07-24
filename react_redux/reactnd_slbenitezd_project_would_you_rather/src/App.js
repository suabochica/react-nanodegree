import React, { Component, Fragment } from 'react';
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
              <PrivateRoute path='/' exact component={Questions} />
              <Route path='/login' exact component={Login} />
              <PrivateRoute path='/question/:id' exact component={Question} />
              <PrivateRoute path='/add' exact component={NewQuestion} />
              <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
