import React from 'react';

const CommentIndex = props => {
   const comments = props.comments;
   debugger
   return(
      <>
         <div className="comments-index-container">
            <ul className="comments-list">
               {
                  comments.map((comment,idx) => {
                     <li key={comment.id}>
                        {comment.body}
                     </li>
                  })
               }
            </ul>
         </div>
         {/* Hello from comments index */}
      </>
   )
}

export default CommentIndex;