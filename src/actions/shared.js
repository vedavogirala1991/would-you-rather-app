import {getInitialData} from '../utils/api'
import {recieveQuestions} from './questions'
import {recieveUsers} from './users'
import {setAuthedUser} from './authedUser'
import {showLoading,hideLoading} from 'react-redux-loading'

//TODO Need to set auth user based on logon
const AUTHED_ID = 'tylermcginnis'

//Handles initial Data for App
export const handleInitialData = () => {
  return (dispatch) => {
     dispatch(showLoading())
    return getInitialData()
      .then(({users,questions}) => {
        dispatch(recieveQuestions(questions))
        dispatch(recieveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
    })
  }
}
