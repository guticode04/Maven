import * as TrackApiUtil from '../utils/track_api_utils';

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK_AND_ANNOTATIONS = "RECEIVE_TRACK_AND_ANNOTATIONS";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

const receiveTrackAndAnnotations = payload => ({
  type: RECEIVE_TRACK_AND_ANNOTATIONS,
  payload
});

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
})

export const fetchTracks = () => dispatch => {
  return TrackApiUtil.fetchTracks()
    .then(tracks => dispatch(receiveTracks(tracks)))
}

export const fetchTrack = trackId => dispatch => {
  return TrackApiUtil.fetchTrack(trackId)
    .then(payload => dispatch(receiveTrackAndAnnotations(payload)))
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
