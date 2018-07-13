import { LOG_IN, LOG_OUT, SET_AUTHED_USER } from './types.action';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}