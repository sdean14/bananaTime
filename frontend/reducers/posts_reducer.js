import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';


const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, oldState, action.posts)
    case RECEIVE_POST:
      newState[action.post.id] = action.post
      return newState;
    case REMOVE_POST:
      delete nextState[action.postId]
      return nextState;
    default:
      return oldState;
  }
};

export default PostsReducer;
