import * as TrackApiUtil from '../utils/track_api_utils';

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
})

export const fetchTracks = () => dispatch => {
  // debugger
  return TrackApiUtil.fetchTracks()
    .then(tracks => dispatch(receiveTracks(tracks)))
}

export const fetchTrack = trackId => dispatch => {
  // debugger
  return TrackApiUtil.fetchTrack(trackId)
    .then(track => dispatch(receiveTrack(track)))
}

export const createTrack = track => dispatch => {
  return TrackApiUtil.createTrack(track)
    .then(createdTrack => { 
     return dispatch(receiveTrack(createdTrack))
    })
}

export const updateTrack = track => dispatch => {
  return TrackApiUtil.updateTrack(track)
    .then(updatedTrack => dispatch(receiveTrack(updatedTrack)))
}

export const deleteTrack = trackId => dispatch => {
  return TrackApiUtil.deleteTrack(trackId)
    .then(() => dispatch(removeTrack(trackId)))
}
