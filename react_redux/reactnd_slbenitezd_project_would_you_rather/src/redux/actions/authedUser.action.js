import { showLoading, hideLoading } from 'react-redux-loading';
import { LOG_IN, LOG_OUT } from './types.action';
import { saveUser } from '../../utils/api';

function logInUser(id) {
  return {
    type: LOG_IN,
    id
  }
}

function logOutUser(id) {
  return {
    type: LOG_OUT,
    id
  }
}

export function handleLogInUser(user) {
  // Optimistic updating
  return (dispatch) => {
    dispatch(showLoading())

    return saveUser({ user })
      .then((user) => dispatch(logInUser(user)))
      .then(() => dispatch(hideLoading()))
  }
}