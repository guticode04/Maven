import React from 'react';

class AnnotationForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         body: '',
         user_id: this.props.userId,
         track_id: this.props.trackId,
         start_idx: this.props.startIdx,
         end_idx: this.props.endIdx,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();
      //may not need to toggleAnnoForm can just push to 
      // created annotations like in tracks form
      this.props.createAnnotation(this.state)
         .then(() => {this.props.toggleAnnoForm()})
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