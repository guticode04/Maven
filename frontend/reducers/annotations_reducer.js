import {
  RECEIVE_ANNOTATION,
  REMOVE_ANNOTATION,
  RECEIVE_ALL_ANNOTATIONS
} from "../actions/annotation_actions";

const annotationsReducer = ( oldState = {} , action ) => {
  Object.freeze(oldState);
  switch ( action.type ) {
    case RECEIVE_ALL_ANNOTATIONS:
      // debugger
      return Object.assign({}, oldState, action.annotations)
    case RECEIVE_ANNOTATION:
      
      return Object.assign( {}, oldState, { [action.annotation.id]: action.annotation });
    case REMOVE_ANNOTATION:
      let nextState = Object.assign( {}, oldState );
      delete nextState[action.annotationId];
      return nextState;
    default: 
      return oldState;
  }
}

export default annotationsReducer;