import { connect } from 'react-redux';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show';
import { fetchAnnotations } from "../../actions/annotation_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({ 
    track: state.entities.tracks[ownProps.match.params.trackId],
    annotations: Object.values( state.entities.annotations) || [],
    // annotations: state.entities.annotations || [],
    currentUser: state.session.currentUser,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  updateTrack: updatedTrack => dispatch(updateTrack(updatedTrack)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  fetchAnnotations: () => dispatch(fetchAnnotations()),
})

export default connect(mapStateToProps,mapDispatchToProps)(TrackShow)