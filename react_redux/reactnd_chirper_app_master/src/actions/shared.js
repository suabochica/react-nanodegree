import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getTweets } from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylecmcginnis'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(getUsers(users))
                dispatch(getTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}