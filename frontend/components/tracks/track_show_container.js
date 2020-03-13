import { connect } from 'react-redux';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({ 
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentUser: state.session.currentUser 
  })
}

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  updateTrack: updatedTrack => dispatch(updateTrack(updatedTrack)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId))
})

export default connect(mapStateToProps,mapDispatchToProps)(TrackShow)