import {
  getInitialData,
  saveQuestionAnswer,
  saveQuestion} from '../utils/api'
import {
  recieveQuestions,
  saveQuesAnswer,
  saveQues} from './questions'
import {
  recieveUsers,
  saveUserAnswer,
  saveUserQuestion} from './users'
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

export const handleSaveAnswer = (info) => {
  return (dispatch,getState) => {
    const {authedUser,id,answer} = info
    const {questions,users} = getState()
    console.log('handleSaveAnswer questions : ',questions)
    console.log('handleSaveAnswer users : ',users)
    return saveQuestionAnswer({
      authedUser,
      qid : id,
      answer,
    })
    .then(() => {
        dispatch(saveQuesAnswer(info,questions))
        dispatch(saveUserAnswer(info,users))
      })
  }
}

export const handleSaveQuestion = (info) => {
  return (dispatch,getState) => {
    const {authedUser,optionOne,optionTwo} = info
    const {questions,users} = getState()
    console.log('handleSaveAnswer questions : ',questions)
    console.log('handleSaveAnswer users : ',users)
    return saveQuestion({
      author : authedUser,
      optionOne,
      optionTwo,
    })
    .then((question) => {
        console.log('handleSaveQuestion : ',question)
        dispatch(saveQues(question,questions))
        dispatch(saveUserQuestion(question.id,authedUser,users))
      })
  }
}
