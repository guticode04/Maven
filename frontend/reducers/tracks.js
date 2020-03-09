import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
  RECEIVE_ARTIST
} from "../actions/track_actions";

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, oldState, action.tracks)
    case RECEIVE_TRACK:
      return Object.assign({}, oldState, action.track);
    case REMOVE_TRACK:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.trackId];
      return nextState;
    default:
      return oldState;
  }
}

export default tracksReducer;