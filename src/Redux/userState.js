

export const logInActionCreator = ({email, password}) => 
  async (dispatch, getState) => {
    console.log('logInActionCreator running');
    try {
      const user = await logInUser(email, password);
      dispatch({type: LOG_IN_ACTION, payload: {user: user}});
    } catch(error){
      console.log('error');
    }
  }

export const userReducer = (state = null, action) => {
  if(action.type === LOG_IN_ACTION){
    const { payload } = action;

    return payload.user
  }

  if(action.type === UPDATE_USER_FAVORITES){

    return {...state, favoriteItems: action.payload.favoriteItems }
  }

  return state;
};