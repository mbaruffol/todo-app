//Import the store configurator from redux toolkit
import { configureStore } from '@reduxjs/toolkit';
//Import the reducer
import todosReducer from './todosSlice';

//Create store with the todos reducer and export the store
const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});

export default store;
