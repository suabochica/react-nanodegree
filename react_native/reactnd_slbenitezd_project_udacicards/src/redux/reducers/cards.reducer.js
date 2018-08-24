import { ADD_CARD_TO_DECK } from '../actions/types.action'

export default function cards (state = {}, action) {
  switch (action.type) {
    case ADD_CARD_TO_DECK :
      return {
        ...state,
        ...action.cards,
      }
    default :
      return state
  }
}
