import React, {useEffect} from 'react';

const Modal = (props) => {
   const { close } = props;

   return(
      <>
         <div className="modal-window">
            <div className="modal-content">
               <h1 className="modal-header"> Welcome to Maven!</h1>
               <p className="modal-description">
                  Maven is a music knowledge sharing app inspired by Genius.
                  Users can view tracks and their lyrics along with any comments
                  and annotation for those tracks. In order to be able to add tracks,
                  comments, and annotations users must be logged in or create an account. 
               </p>
               <button className="close-modal-btn" onClick={ close }>
                  Close
               </button>
            </div>
         </div>
      </>
   )

}

export default Modal;