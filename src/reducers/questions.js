import {RECIEVE_QUESTIONS,SAVE_ANSWER} from '../actions/questions'

//Questions Reducer
const questions = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case SAVE_ANSWER:
      return {
        ...state,
        ...action.questions,
        [action.id] : {
          ...state[action.id],
          [action.answer] : {
            ...state[action.id][action.answer],
            votes : state[action.id][action.answer].votes.concat([action.authedUser])
          }
        }

      }
    default:
      return state
  }
}

export default questions
