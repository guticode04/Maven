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
            <form>
               <textarea 
                  onChange={this.handleInput('body')}
                  value={this.state.body}
                  placeholder="Add a comment"
               />
               <button>
                  Submit
               </button>
            </form>
         </>
      )
   }


}


export default CommentForm;