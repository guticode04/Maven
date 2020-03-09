import { connect } from 'react-redux';
import { createTrack } from '../../actions/track_actions'
import TrackForm from './track_form';

const mapDispatchToProps = dispatch => ({
  createTrack: track => dispatch(createTrack(track))
});

export default connect(null, mapDispatchToProps)(TrackForm)