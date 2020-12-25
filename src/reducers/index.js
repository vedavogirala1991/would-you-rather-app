import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'

import authedUser from './authedUser'
import questions from './questions'
import users from './users'

//Combine Reducers
export default combineReducers({
  authedUser,
  questions,
  users,
  loadingBar : loadingBarReducer,
})
