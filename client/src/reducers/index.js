  
import { combineReducers } from 'redux'
import breedsReducer from './breedsReducer' 
import petsReducer from './petsReducer' 
import accidentsReducer from './accidentsReducer'
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer'
// Exportamos todos los reducers, en un sólo archivo para no exportarlo uno por uno.
export default combineReducers({
  breeds: breedsReducer,
  pets: petsReducer,
  accidents: accidentsReducer,
  questions: questionsReducer,
  users: usersReducer,
});