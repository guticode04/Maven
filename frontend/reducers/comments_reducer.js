import {
   RECEIVE_ALL_TRACK_COMMENTS,
   RECEIVE_COMMENT,
   REMOVE_COMMENT
} from "../actions/comment_actions";

const commentsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   switch (action.type) {
      case RECEIVE_ALL_TRACK_COMMENTS:
         return Object.assign({}, oldState, { [action.payload.id]: action.payload })
      case RECEIVE_COMMENT:
         return Object.assign({}, oldState, { [action.comment.id]: action.comment })
      case REMOVE_COMMENT:
         let nextState = Object.assign({}, oldState);
         delete nextState[action.commentId];
         return nextState;
      default:
         return oldState;
   }
}

export default commentsReducer;