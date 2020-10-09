import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

// const mapStateToProps = (state, ownProps) => {
//    return({
//       currentUser: state.session.currentUser,
//    })
// }
const mapDispatchToProps = dispatch => {
   return({
      createComment: comment => dispatch(createComment(comment))
   })
};
// const mapDispatchToProps = dispatch => ({
//    createComment: comment => dispatch(createComment(comment))
// });


export default connect(null, mapDispatchToProps)(CommentForm);
// export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);