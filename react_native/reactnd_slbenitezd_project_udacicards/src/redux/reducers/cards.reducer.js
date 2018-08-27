import { ANSWER_CARD } from '../actions/types.action'

export default function cards (state = {}, action) {
  switch (action.type) {
    case ANSWER_CARD :
      return {
        ...state,
      }
    default :
      return state
  }
}
