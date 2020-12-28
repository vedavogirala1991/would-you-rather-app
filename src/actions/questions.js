import {saveQuestionAnswer} from '../utils/api'
//Questions Actions
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export const recieveQuestions = (questions) => {
  return {
    type : RECIEVE_QUESTIONS,
    questions,
  }
}

export const saveAnswer = ({authedUser,id,answer},questions) => {
  return {
    type : SAVE_ANSWER,
    authedUser,
    id,
    answer,
    questions
  }
}

export const handleSaveAnswer = (info) => {
  return (dispatch,getState) => {
    const {questions} = getState
    return saveQuestionAnswer(info)
    .then(dispatch(saveAnswer(info,questions)))
  }
}
