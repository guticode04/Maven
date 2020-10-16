import { connect } from 'react-redux';
import { fetchAllTrackComments } from '../../actions/comment_actions';
import CommentIndex from './comments_index';

const mapStateToProps = (state) => ({
   comments: Object.values(state.entities.comments),
});

const mapDispatchToProps = dispatch => ({
   fetchAllTrackComments: () => dispatch(fetchAllTrackComments()),
});

// export default connect(mapStateToProps,null)(CommentIndex);
// export default connect(null, mapDispatchToProps)(CommentIndex);
export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);