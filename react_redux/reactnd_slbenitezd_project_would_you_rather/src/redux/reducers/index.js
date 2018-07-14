import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
// Relative imports
import authedUser from './authedUser.reducer'
import users from './users.reducer'
import questions from './questions.reducer'

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
})