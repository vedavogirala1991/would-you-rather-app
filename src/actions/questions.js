//Questions Actions
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export const recieveQuestions = (questions) => {
  return {
    type : RECIEVE_QUESTIONS,
    questions,
  }
}

export const saveQuesAnswer = ({authedUser,id,answer},questions) => {
  return {
    type : SAVE_QUESTION_ANSWER,
    authedUser,
    id,
    answer,
    questions
  }
}

export const saveQues = (question,questions) => {
  return {
    type : SAVE_QUESTION,
    question,
    questions,
  }
}
