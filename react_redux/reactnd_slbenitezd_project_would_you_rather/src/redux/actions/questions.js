// Relative imports
import { saveQuestion, saveQuestionAnswer } from '../../utils/api';
import { GET_QUESTIONS, ADD_QUESTION, SAVE_VOTE } from './types';

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}