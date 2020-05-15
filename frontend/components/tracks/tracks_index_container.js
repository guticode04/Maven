import { connect } from 'react-redux';
import TrackIndex from './tracks_index';
import { selectAllTracks } from '../../reducers/selectors';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  tracks: selectAllTracks(state),
})

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
})

export default connect(mapStateToProps,mapDispatchToProps)(TrackIndex);