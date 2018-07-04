import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getTweets } from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylecmcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(getUsers(users))
                dispatch(getTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}