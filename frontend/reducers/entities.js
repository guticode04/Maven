import { combineReducers } from 'redux';
import tracksReducer from './tracks';
import usersReducer from './users_reducer';
import annotationsReducer from './annotations_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  annotations: annotationsReducer,
  comments: commentsReducer
})

export default entitiesReducer;