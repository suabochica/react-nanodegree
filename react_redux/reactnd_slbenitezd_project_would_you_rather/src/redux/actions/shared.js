import { showLoading, hideLoading } from 'react-redux-loading'
// Relative imports
import { getInitialData } from '../../utils/api'
import { getQuestions } from './questions.action'
import { getUsers } from './users.action'
import { setAuthedUser } from './authedUser.action'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData ()
            .then(({ users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(hideLoading())
            })
    }
}