export const fetchAnnotations = () => (
  $.ajax ({
    url: `/api/annotations`,
    method: 'GET'
  })
)

export const fetchAnnotation = annotationId => (
  $.ajax ({
    url: `/api/annotations/${annotationId}`,
    method: 'GET'
  })
);

export const createAnnotation = annotation => (
  $.ajax ({
    url: `/api/annotations`,
    method: 'POST',
    data: { annotation }
  })
);

export const updateAnnotation = annotation => (
  $.ajax ({
    url: `/api/annotations/${annotation.id}`,
    method: 'PATCH',
    data: { annotation }
  })
);

export const deleteAnnotation = annotationId => (
  $.ajax ({
    url: `/api/annotations/${annotationId}`,
    method: 'DELETE'
  })
);
