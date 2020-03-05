import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors';

const errorsReducer =  combineReducers({
  errors: sessionErrorsReducer
})

export default errorsReducer;