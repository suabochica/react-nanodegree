const defaultState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


export function getDecks() {
  // TO DO
}

export function getDeck(title) {
  // TO DO
}

export function saveDeckTitle(deck) {
  // TO DO
}

export function addCardToDeck(entry, key) {
  // TO DO
}

