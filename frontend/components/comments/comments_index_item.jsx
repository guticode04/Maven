import React from 'react';

const CommentIndexItem = props => {
   const comment = props.comment;
   // debugger
   return(
      // <>
         <li className="comment-index-item">
            <div className="comment-info">
               <div className="comment-author-container">
                  <div className="comment-author-icon">
                     <span className="fa-stack">
                        <i className="fas fa-circle fa-stack-2x icon-background"></i>
                        <i className="fas fa-user fa-stack-1x"></i>
                     </span>
                  </div>
                  <div className="comment-author">
                     {props.currentUser.nickname}
                  </div>
               </div>
               <div className="comment-date">created at</div>
            </div>

            <div className="comment-body">
               { comment.body }
            </div>
         </li>
      // </>
   )
}

export default CommentIndexItem;