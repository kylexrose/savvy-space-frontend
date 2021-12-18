const stateInLocalStorage = JSON.parse(window.localStorage.getItem('applicationState'));
const initialState = (stateInLocalStorage && stateInLocalStorage.user) || null;

export const logInActionCreator = ({user}) => 
  async (dispatch, getState) => {
    try {
      dispatch({type: 'LOG_IN_ACTION', payload: user});
    } catch(error){
      console.log(error);
    }
  }

export const logOutActionCreator = () => 
async (dispatch, getState) => {
  try {
    dispatch({type: 'LOG_OUT_ACTION'});
  } catch(error){
    console.log(error);
  }
}

export const userReducer = (state = initialState, action) => {
  if(action.type === "LOG_IN_ACTION"){
    const { payload } = action;
    return payload;
  }
  if(action.type === "LOG_OUT_ACTION"){
    console.log("user logged out");
    window.localStorage.removeItem('applicationState')
    return null
  }
  return state;
};