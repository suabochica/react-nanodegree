import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getTweets } from './tweets'
import {setAuthedUser } from './authedUders'

const AUTHED_ID = 'tylecmcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, twerts }) => {
                dispatch(getUsers(users))
                dispatch(getTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}