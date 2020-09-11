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
      this.handleSubmit = this.handleSubmit.bind(this);
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
               <textarea
                  className="add-annotation"
                  placeholder="Don't just put the lyrics in your own words - drop some knowledge"
                  onChange={this.handleInput('body')}
                  value={this.state.body}
               />
               <button
                  className="add-annotation-btn"
                  onClick={this.handleSubmit}
               >
                  Save
               </button>
            </form>
         </>
      )
   }

}

export default AnnotationForm;