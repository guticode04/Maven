import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => ({
  track: state.tracks[ownProps.match.params.trackId]
})

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId))
})

export default connect(mapStateToProps,mapDispatchToProps)(TrackShow)