import React from 'react';

const CommentIndexItem = props => {
   const comment = props.comment;
   // debugger
   let timeCreated = "";
   let date = Date.now() - Date.parse(comment.created_at);
   let seconds = date / 1000;
   let minutes = seconds / 60;
   let hours = minutes / 60;
   let days = hours / 24;
   let months = days / 30;
   if ( seconds < 60 ) {
      if ( Math.floor(seconds) < 0 ) {
         timeCreated = `0 seconds ago`;
      } else if ( Math.floor(seconds) === 1 ) {
         timeCreated = `${Math.floor(seconds)} second ago`;
      } else {
         timeCreated = `${Math.floor(seconds)} seconds ago`;
      }
   } else if (minutes < 60) {
      if (Math.floor(minutes) === 1) {
         timeCreated = `${Math.floor(minutes)} minute ago`
      } else {
         timeCreated = `${Math.floor(minutes)} minutes ago`
      }
   } else if (hours < 24) {
      if (Math.floor(hours) === 1) {
         timeCreated = `${Math.floor(hours)} hour ago`
      } else {
         timeCreated = `${Math.floor(hours)} hours ago`
      }
   } else if (days < 30) {
      if (Math.floor(days) === 1) {
         timeCreated = `${Math.floor(days)} day ago`
      } else {
         timeCreated = `${Math.floor(days)} days ago`
      }
   } else {
      if (Math.floor(months) === 1) {
         timeCreated = `${Math.floor(months)} month ago`
      } else {
         timeCreated = `${Math.floor(months)} months ago`
      }
   }


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
               <div className="comment-date">{timeCreated}</div>
            </div>

            <div className="comment-body">
               { comment.body }
            </div>
         </li>
      // </>
   )
}

export default CommentIndexItem;