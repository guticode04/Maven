export const selectAllTracks = state => Object.values(state.entities.tracks);

// A “selector” is simply a function that accepts Redux state as an argument 
// and returns data that is derived from that state.Bam! The end.
// 
//
// Memoizing selectors