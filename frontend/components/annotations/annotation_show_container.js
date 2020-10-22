import { connect } from 'react-redux';
import { fetchAnnotation, updateAnnotation, deleteAnnotation, createAnnotation } from '../../actions/annotation_actions';
import AnnotationShow from './annotation_show';

// May not need this because we can get annotation from track show
// const mapStateToProps = (state, ownProps) => {
//   // debugger
//   return ({
//     annotation: state.entities.annotations
//   })
// }

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
  updateAnnotation: () => dispatch(updateAnnotation()),
  deleteAnnotation: () => dispatch(deleteAnnotation()),
  // createAnnotation: annotation => dispatch(createAnnotation(annotation))
})

export default connect(null, mapDispatchToProps)(AnnotationShow);
// export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);