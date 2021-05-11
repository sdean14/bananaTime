import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';


const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, oldState, action.comments)
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
