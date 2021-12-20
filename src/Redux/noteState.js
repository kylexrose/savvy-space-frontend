import Axios from '../Utils/Axios';

const stateInLocalStorage = JSON.parse(window.localStorage.getItem('applicationState'));
const initialState = (stateInLocalStorage && stateInLocalStorage.notes) || null;

export const getNotesActionCreator = (notes) => 
  async (dispatch, getState) => {
    try {
      dispatch({type: 'GET_NOTES_ACTION', payload: notes});
    } catch(error){
      console.log(error);
    }
  }

export const saveNotesActionCreator = (user_id, notes) => 
  async (dispatch, getState) => {
    try {
      const foundNotes = await Axios.put('/student-notes/edit-note', { user_id, note_json: notes });
      dispatch({type: 'SAVE_NOTES_ACTION', payload: foundNotes.data.notes});
    } catch(error){
      console.log(error);
    }
  }

export const notesReducer = (state = initialState, action) => {
  if(action.type === "SAVE_NOTES_ACTION"){
    const { payload } = action;
    return payload;
  }
  if(action.type === "GET_NOTES_ACTION"){
    const { payload } = action;
    return payload;
  }
  if(action.type === "LOG_OUT_ACTION"){
    return null
  }
  return state;
};