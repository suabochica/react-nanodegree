import { showLoading, hideLoading } from 'react-redux-loading'

// Relative imports
import { saveQuestion, saveQuestionAnswer } from '../../utils/api';
import { GET_QUESTIONS, ADD_QUESTION, SAVE_VOTE } from './types.action';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: 'sarahedo',
      optionOneText,
      optionTwoText,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}