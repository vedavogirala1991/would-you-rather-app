import {
  RECIEVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION} from '../actions/questions'

//Questions Reducer
const questions = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case SAVE_QUESTION_ANSWER:
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
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.questions,
        [action.question.id] : action.question
      }
    default:
      return state
  }
}

export default questions
