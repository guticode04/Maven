import { connect } from 'react-redux';
import { createAnnotation } from '../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapDispatchToProps = dispatch => ({
   createAnnotation: annotation => dispatch(createAnnotation(annotation)),
});

export default connect(null, mapDispatchToProps)(AnnotationForm);