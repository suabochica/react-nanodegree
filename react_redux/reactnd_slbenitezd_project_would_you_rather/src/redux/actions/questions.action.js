import { showLoading, hideLoading } from 'react-redux-loading'

// Relative imports
import { saveQuestion, saveQuestionAnswer } from '../../utils/api';
import { GET_QUESTIONS, ADD_QUESTION, SAVE_VOTE } from './types.action';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function saveVote({authedUser, qid, answer}) {
  return {
    type: SAVE_VOTE,
    authedUser,
    qid,
    answer,
  }
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser.user,
      optionOneText,
      optionTwoText,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveVote(questionInfo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const questionVote = {
      authedUser: authedUser.user,
      qid: questionInfo.questionId,
      answer: questionInfo.option
    }

    dispatch(showLoading())
    dispatch(saveVote(questionVote))

    return saveQuestionAnswer(questionVote)
      .then(() => dispatch(hideLoading()))
  }
}