//Recieve Users Action
export const RECIEVE_USERS = 'RECIEVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export const recieveUsers = (users) => {
  return {
    type : RECIEVE_USERS,
    users,
  }
}

export const saveUserAnswer = (authedUser,id) => {
  return {
    type : SAVE_USER_ANSWER,
    authedUser,
    id,
  }
}
