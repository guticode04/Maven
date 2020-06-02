import { connect } from 'react-redux';
import { fetchAnnotation, updateAnnotation, deleteAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    annotation: state.entities.annotation
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: () => dispatch(fetchAnnotation()),
  updateAnnotation: () => dispatch(updateAnnotation()),
  deleteAnnotation: () => dispatch(deleteAnnotation()),
})

export default connect(mapStateToProps,mapStateToProps)