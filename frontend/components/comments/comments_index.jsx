import React from 'react';
import CommentIndexItem from './comments_index_item';

class CommentIndex extends React.Component {
   constructor(props) {
      super(props);
   };

   componentDidMount() {
      this.props.fetchAllTrackComments();
   };


   render() {
      const comments = this.props.comments;
      let filteredComments = comments.filter(comment => comment.track_id === this.props.trackId);
      return(
         <>
            {
               filteredComments.length !== 0 ? (
                  <div className="comments-index-container">
                     <ul className="comments-list">
                        {
                           filteredComments.map((comment,idx) => {
                              return (
                                 <CommentIndexItem key={idx} comment={comment} />
                              )
                           })
                        }
                     </ul>
                  </div>
               ) : null
            }
         </>
      )
   }
}

export default CommentIndex;