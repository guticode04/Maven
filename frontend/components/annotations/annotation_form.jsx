import React from 'react';

class AnnotationForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         body: '',
         // userId: this.props.user.id,
         // trackId: this.props.track.id,
         // startIdx: this.props.startIdx,
         // endIdx: this.props.endIdx,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();
      const annotationForm = this;
      this.props.createAnnotation(this.state).then((createdAnnotation) => {
         annotationForm.props.history.push(`/tracks/${this.state.trackId}`)
      })
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