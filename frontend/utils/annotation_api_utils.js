export const fetchAnnotation = annotationId => (
  $.ajax ({
    url: `/api/annotations/${annotationId}`,
    method: 'GET'
  })
);

