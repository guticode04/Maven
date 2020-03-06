import { combineReducers } from 'redux';
import tracksReducer from './tracks';

const entitiesReducer = combineReducers({
  tracks: tracksReducer
})

export default entitiesReducer;