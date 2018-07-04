import {combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import autedUser from './authedUser'
import users from './users'
import tweets from './tweets'

export default combineReducers({
    autedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer
})