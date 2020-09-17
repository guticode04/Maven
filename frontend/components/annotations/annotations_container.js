import { connect } from 'react-redux';
import { fetchAnnotation, updateAnnotation, deleteAnnotation } from '../../actions/annotation_actions';
import AnnotationShow from './annotation_show';

const mapStateToProps = (state, ownProps) => {
  console.log('state',state);
  console.log('ownProps',ownProps);
  //ownProps is only startIdx and endIdx
  // debugger
  return ({
    annotations: state.entities.annotations[ownProps.match.params.annotationId],
    currentUser: state.session.currentUser,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: () => dispatch(fetchAnnotation()),
  updateAnnotation: () => dispatch(updateAnnotation()),
  deleteAnnotation: () => dispatch(deleteAnnotation()),
})

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);