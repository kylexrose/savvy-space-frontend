
import { notesReducer } from "./noteState";
import { userReducer } from "./userState";

import { configureStore } from '@reduxjs/toolkit'

  const store = configureStore({
    reducer: {
      user: userReducer,
      notes: notesReducer,
    }
  })
  
export default store