import React from 'react';
import CommentIndexItem from './comments_index_item';

const CommentIndex = props => {
   const comments = props.comments;
   debugger
   return(
      <>
         <div className="comments-index-container">
            <ul className="comments-list">
               {
                  comments.map((comment,idx) => {
                     // <li key={comment.id}>
                     //    {comment.body}
                     // </li>
                     <CommentIndexItem key={idx} comment={comment} />
                  })
               }
            </ul>
         </div>
         {/* Hello from comments index */}
      </>
   )
}

export default CommentIndex;