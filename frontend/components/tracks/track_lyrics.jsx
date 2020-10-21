import React, { useRef } from 'react';

const TrackLyrics = (props) => {
   // will be passing following form track show
   const { track, trackAnnotations, mouseUpHandler, mouseDownHandler, } = props;
   const lyricsEle = useRef(null);
   // debugger
   // build jsx objects to be displayed
   let annotatedAndAnnotatableLyrics = [];
   let prev = 0;
   let j = 0;

   for ( let i = 0; i < trackAnnotations.length; i++ ) {
      let annotationStart = Math.min(trackAnnotations[i].start_idx, trackAnnotations[i].end_idx);
      let annotationEnd = Math.max(trackAnnotations[i].start_idx, trackAnnotations[i].end_idx);
      let annotation = trackAnnotations[i];

      let beforeAnnotation = track.lyrics.slice(prev, annotationStart);

      annotatedAndAnnotatableLyrics.push(
         <span data-offset={prev} key={j++}>
            { beforeAnnotation }
         </span>
      );

      // seperate state for track show
      annotatedAndAnnotatableLyrics.push(
         <a
            key={j++}
            unselectable="on"
            className="highlight-annotation"
         >
            { annotation.annotated_text }
         </a>
      )

      prev = annotationEnd;

      if ( i === trackAnnotations.length -1 ) {
         annotatedAndAnnotatableLyrics.push(
            <span
               data-offset={prev}
               key={j++}
            >
               { track.lyrics.slice(prev, track.lyrics.length) }
            </span>
         )
      }
   }

   return(
      <>
         {
            trackAnnotations.length !== 0 ?
            <div className="track-lyrics" ref={lyricsEle}>
               <p 
                  onMouseUp={mouseUpHandler}
                  onMouseDown={mouseDownHandler}
                  data-offset={prev}
               >
                  { annotatedAndAnnotatableLyrics }
               </p>
            </div>
               :
            <div className="track-lyrics" ref={lyricsEle}> 
               <p
                  onMouseUp={mouseUpHandler}
                  onMouseDown={mouseDownHandler}
                  data-offset={0}
               >
                  { track.lyrics }
               </p>
            </div>
         }
      </>
   )
}

export default TrackLyrics;