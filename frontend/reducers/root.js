import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default RootReducer;
