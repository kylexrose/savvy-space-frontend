import Axios from '../Utils/Axios'


export const saveNotesActionCreator = ({user_id, notesJSON}) => 
  async (dispatch, getState) => {
    try {
      const notes = await Axios.post('/users/login', { user_id, notesJSON });
      dispatch({type: 'SAVE_NOTES_ACTION', payload: notes.data});
    } catch(error){
      console.log(error);
    }
  }

export const notesReducer = (state = null, action) => {
  if(action.type === "SAVE_NOTES_ACTION"){
    const { payload } = action;
    console.log(payload.notes)
    return payload.notes
  }
  return state;
};