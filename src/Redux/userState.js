import Axios from '../Utils/Axios'


export const logInActionCreator = ({username, password}) => 
  async (dispatch, getState) => {
    try {
      const user = await Axios.post('/users/login', { username, password });
      dispatch({type: 'LOG_IN_ACTION', payload: user.data});
    } catch(error){
      console.log(error);
    }
  }


  const stateInLocalStorage = JSON.parse(window.localStorage.getItem('applicationState'));

  const initialState = (stateInLocalStorage && stateInLocalStorage.user) || null;


export const userReducer = (state = initialState, action) => {
  if(action.type === "LOG_IN_ACTION"){
    const { payload } = action;
    console.log(payload.user)
    return payload.user
  }
  return state;
};