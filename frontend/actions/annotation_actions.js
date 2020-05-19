import * as AnnotationApiUtil from '../utils/annotation_api_utils';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

const removeAnnotation = annotationId => ({
  type: REMOVE_ANNOTATION,
  annotationId
});

export const fetchAnnotation = annotationId => dispatch => {
  return AnnotationApiUtil.fetchAnnotation(annotationId)
    .then(annotation => dispatch(receiveAnnotation(track)))
};

export const updateAnnotation = annotation => dispatch => {
  return AnnotationApiUtil.updateAnnotation(annotation)
    .then(updatedAnnotation => dispatch(receiveAnnotation(updatedAnnotation)))
};

export const deleteAnnotation = annotationId => dispatch => {
  return AnnotationApiUtil.deleteAnnotation(annotationId)
    .then(() => dispatch(removeAnnotation(annotationId)))
};