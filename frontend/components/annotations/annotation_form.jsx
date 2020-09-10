import React from 'react';

class AnnotationForm extends React.component {

   constructor(props) {
      super(props);
      this.state = {
         body: '',
         userId: this.props.user.id,
         trackId: this.props.track.id,
         start: this.props.start_idx,
         end: this.props.end_idx,
      }

   }

   handleSubmit(e) {
      e.preventDefault();
   }


   handleInput(field) {
      return (e) => {
         this.setState({ [ field ]: e.currentTarget.value })
      }

   }

   render() {

      return(
         <>
            <form className="annotation-form">
               <label>
                  <input>
                  </input>
               </label>
               <label>
                  <textarea>
                     
                  </textarea>
               </label>
            </form>
         </>
      )
   }

}