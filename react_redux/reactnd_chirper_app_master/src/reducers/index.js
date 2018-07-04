import {combineReducers } from 'redux'
import autedUser from './authedUser'
import users from './users'
import tweets from './tweets'

export default combineReducers({
    autedUser,
    users,
    tweets
})