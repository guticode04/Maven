import React from 'react';

class CommentForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         body: '',
         user_id: this.props.userId,
         track_id: this.props.trackId,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      debugger
      e.preventDefault();
      this.props.createComment(this.state)
   }

   handleInput(field) {
      return (e) => {
         this.setState({ [field]: e.currentTarget.value })
      }
   }

   render() {
      return(
         <>
            <form className="comment-form">
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
         </>
      )
   }


}


export default CommentForm;