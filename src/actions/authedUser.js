//Set User Action
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export const setAuthedUser = (id) => {
  return {
    type : SET_AUTHED_USER,
    id,
  }
}

export const handleSetAuthUser = (id) => {
  return (dispatch) => {
     dispatch(setAuthedUser(id))
  }
}
