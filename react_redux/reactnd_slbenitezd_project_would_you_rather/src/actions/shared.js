// Relative imports
import { getInitialData } from '../utils/api'
import { getQuestions } from './questions'
import { getUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData ()
            .then(({ users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}