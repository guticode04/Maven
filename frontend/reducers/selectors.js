export const selectAllTracks = state => Object.values(state.entities.tracks);
export const selectAllAnnotations = state => Object.values(state.entities.annotations);
export const selectAllComments = state => Object.values(state.entities.comments);

// A “selector” is simply a function that accepts Redux state as an argument 
// and returns data that is derived from that state.Bam! The end.