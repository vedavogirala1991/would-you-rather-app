//Recieve Users Action
export const RECIEVE_USERS = 'RECIEVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'

export const recieveUsers = (users) => {
  return {
    type : RECIEVE_USERS,
    users,
  }
}

export const saveUserAnswer = ({authedUser,id,answer},users) => {
  return {
    type : SAVE_USER_ANSWER,
    authedUser,
    id,
    answer,
    users,
  }
}

export const saveUserQuestion = (id,authedUser,users) => {
  return {
    type : SAVE_USER_QUESTION,
    id,
    authedUser,
    users,
  }
}
