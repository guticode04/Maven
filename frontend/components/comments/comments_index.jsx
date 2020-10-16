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
      return(
         <>
            <div className="comments-index-container">
               <ul className="comments-list">
                  {
                     comments.map((comment,idx) => {
                        return (
                           <CommentIndexItem key={idx} comment={comment} />
                        )
                     })
                  }
               </ul>
            </div>
         </>
      )
   }
}

export default CommentIndex;