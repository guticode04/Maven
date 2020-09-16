import { connect } from 'react-redux';
import { fetchAnnotation, updateAnnotation, deleteAnnotation } from '../../actions/annotation_actions';
import AnnotationShow from './annotation_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    //follow it back. why is it undefined
    annotations: state.entities.annotations[ownProps.match.params.annotationId],
    // annotations: state.entities.annotations,
    currentUser: state.session.currentUser,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: () => dispatch(fetchAnnotation()),
  updateAnnotation: () => dispatch(updateAnnotation()),
  deleteAnnotation: () => dispatch(deleteAnnotation()),
})

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);