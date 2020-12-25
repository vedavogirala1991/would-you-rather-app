import {combineReducers} from 'redux'

import authedUser from './authedUser'
import questions from './questions'
import users from './users'

//Combine Reducers
export default combineReducers({
  authedUser,
  questions,
  users,
})
