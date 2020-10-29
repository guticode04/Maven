import { connect } from 'react-redux';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import { fetchAnnotations } from '../../actions/annotation_actions';
import { selectAllAnnotations } from '../../reducers/selectors';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
  return ({ 
    track: state.entities.tracks[ownProps.match.params.trackId],
    annotations: selectAllAnnotations(state),
    loggedIn: Boolean(state.session.currentUser),
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