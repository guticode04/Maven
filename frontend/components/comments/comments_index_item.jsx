import React from 'react';

const CommentIndexItem = props => {
   const comment = props.comment;
   // debugger
   return(
      // <>
         <li className="comment-index-item">
            <div className="comment-author-container">
               <div className="comment-author-icon">
                  <i className="fas fa-user"></i>
               </div>
               <div className="comment-author">
                  User Nickname Goes Here
               </div>
            </div>
            <div className="comment-body">
               { comment.body }
            </div>
         </li>
      // </>
   )
}

export default CommentIndexItem;