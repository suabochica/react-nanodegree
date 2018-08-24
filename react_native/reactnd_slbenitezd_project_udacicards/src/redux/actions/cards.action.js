import { ADD_CARD_TO_DECK } from './types.action'

export function addCardToDeck (card) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
  }
}