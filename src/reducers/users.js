import {
  RECIEVE_USERS,
  SAVE_USER_ANSWER,
  SAVE_USER_QUESTION} from '../actions/users'

//Users Reducer
const users = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case SAVE_USER_ANSWER:
      return {
        ...state,
        ...action.users,
        [action.authedUser]: {
          ...action.users[action.authedUser],
          answers: {
            ...action.users[action.authedUser].answers,
            [action.id]: action.answer
          }
        }
      }
    case SAVE_USER_QUESTION:
      return {
        ...state,
        ...action.users,
        [action.authedUser] : {
          ...action.users[action.authedUser],
          questions: action.users[action.authedUser].questions.concat([action.id])
        }
      }
    default:
      return state
  }
}

export default users
