import { GET_USERS, SAVE_VOTE, ADD_QUESTION } from '../actions/types.action'

export default function users(state = {}, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users
			}
		case ADD_QUESTION: {
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					questions: state[action.authedUser].questions.concat([action.id]),
				}
			}
		}
		case SAVE_VOTE:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.qid]: action.answer,
					},
				},
			}
		default:
			return state
	}
}