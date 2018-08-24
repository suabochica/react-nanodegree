import { ADD_DECK, DELETE_DECK, RECEIVE_DECKS } from './types.action'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function deleteDeck (deck) {
  return {
    type: DELETE_DECK,
    deck,
  }
}
