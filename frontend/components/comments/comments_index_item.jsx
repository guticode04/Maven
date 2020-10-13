import React from 'react';

const CommentIndexItem = props => {
   comment = props.comment;
   return(
      <>
         <li className="comment-index-item">
            <div className="comment-body">
               { comment.body }
            </div>
         </li>
      </>
   )
}

export default CommentIndexItem;