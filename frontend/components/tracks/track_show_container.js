import { connect } from 'react-redux';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show';
// import { selectAllTrackComments } from '../../reducers/selectors';
// import { fetchAnnotations } from "../../actions/annotation_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({ 
    track: state.entities.tracks[ownProps.match.params.trackId],
    // comments: Object.values(state.entities.tracks[ownProps.match.params.trackId].comments),
    // annotations: Object.values( state.entities.annotations) || [],
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  updateTrack: updatedTrack => dispatch(updateTrack(updatedTrack)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  // fetchAnnotations: () => dispatch(fetchAnnotations()),
})

export default connect(mapStateToProps,mapDispatchToProps)(TrackShow)