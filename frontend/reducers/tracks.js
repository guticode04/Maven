import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK_AND_ANNOTATIONS,
  REMOVE_TRACK,
  RECEIVE_ARTIST
} from "../actions/track_actions";

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, oldState, action.tracks)
    case RECEIVE_TRACK_AND_ANNOTATIONS:
      // debugger
      return Object.assign({}, oldState, {[action.payload.id]: action.payload});
    case REMOVE_TRACK:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.trackId];
      return nextState;
    default:
      return oldState;
  }
}

export default tracksReducer;