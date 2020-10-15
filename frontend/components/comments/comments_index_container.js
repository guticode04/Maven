import { connect } from 'react-redux';
import CommentIndex from './comments_index';

const mapStateToProps = (state) => ({
   currentUser: state.session.currentUser,
})

export default connect(mapStateToProps,null)(CommentIndex);