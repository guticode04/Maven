import { connect } from 'react-redux';
import { fetchAllTrackComments } from '../../actions/comment_actions';
import { selectAllComments } from '../../reducers/selectors';
import CommentIndex from './comments_index';

const mapStateToProps = (state) => ({
   comments: selectAllComments(state),
});

const mapDispatchToProps = dispatch => ({
   fetchAllTrackComments: (trackId) => dispatch(fetchAllTrackComments(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);