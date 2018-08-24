import { ADD_DECK, DELETE_DECK, RECEIVE_DECKS } from '../actions/types.action'


export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    case DELETE_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}
