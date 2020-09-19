import * as AnnotationApiUtil from '../utils/annotation_api_utils';

export const RECEIVE_ALL_ANNOTATIONS = "RECEIVE_ALL_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

const receiveAnnotations = annotations => ({
  type: RECEIVE_ALL_ANNOTATIONS,
  annotations
})

const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

const removeAnnotation = annotationId => ({
  type: REMOVE_ANNOTATION,
  annotationId
});

export const fetchAnnotations = () => dispatch => {
  debugger
  return AnnotationApiUtil.fetchAnnotations()
    .then(annotations => dispatch(receiveAnnotations(annotations)))
}

export const fetchAnnotation = annotationId => dispatch => {
  debugger
  return AnnotationApiUtil.fetchAnnotation(annotationId)
    .then(annotation => dispatch(receiveAnnotation(annotation)))
};

export const createAnnotation = annotation => dispatch => {
  debugger
  return AnnotationApiUtil.createAnnotation(annotation)
    .then(createdAnnotation => {
      return dispatch(receiveAnnotation(createdAnnotation))
    })
}

export const updateAnnotation = annotation => dispatch => {
  return AnnotationApiUtil.updateAnnotation(annotation)
    .then(updatedAnnotation => dispatch(receiveAnnotation(updatedAnnotation)))
};

export const deleteAnnotation = annotationId => dispatch => {
  return AnnotationApiUtil.deleteAnnotation(annotationId)
    .then(() => dispatch(removeAnnotation(annotationId)))
};