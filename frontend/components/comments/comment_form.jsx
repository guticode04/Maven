import React from 'react';

class CommentForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         body: '',
         user_id: this.props.userId,
         track_id: this.props.trackId,
         showForm: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.ref = React.createRef();
      this.showFullForm = this.showFullForm.bind(this);
   }

   handleSubmit(e) {
      // debugger
      e.preventDefault();
      this.props.createComment(this.state)
         .then( this.setState({ body: '' }) )
   }

   handleInput(field) {
      return (e) => {
         this.setState({ [field]: e.currentTarget.value })
      }
   }

   showFullForm(e) {
      if (this.state.showForm === false) {
         e.preventDefault();
         this.setState( { showForm: true } );
         this.hideFullForm = (e) => {
            if ( !this.ref.current.contains(e.target) ) {
               this.setState( { showForm: false });
               document.removeEventListener('click', this.hideFullForm);
               this.hideFullForm = null;
            }
         }
         document.addEventListener('click', this.hideFullForm)
      }
   }

   render() {
      return(
         <>
            <input
               placeholder="Add a comment"
               onClick={this.showFullForm}
            >
            </input>
            {
               this.state.showForm ? (
                  <form className="comment-form" ref={this.ref}>
                     <textarea
                        className="add-comment"
                        onChange={this.handleInput('body')}
                        value={this.state.body}
                        placeholder="Add a comment"
                     />
                     <button
                        className="add-comment-btn"
                        onClick={this.handleSubmit}
                     >
                        Submit
                     </button>
                  </form>
               ) : null
            }
         </>
      )
   }


}


export default CommentForm;