import { combineReducers } from 'redux'
// Relative imports
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
    authedUser,
    users,
    questions
})