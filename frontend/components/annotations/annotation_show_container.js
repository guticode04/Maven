import { connect } from 'react-redux';
import { fetchAnnotation, updateAnnotation, deleteAnnotation, createAnnotation } from '../../actions/annotation_actions';
import AnnotationShow from './annotation_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    annotation: state.entities.annotations[ownProps.annotationId]
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
  updateAnnotation: () => dispatch(updateAnnotation()),
  deleteAnnotation: () => dispatch(deleteAnnotation()),
})

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);