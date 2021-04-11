import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import {FRIEND, UNFRIEND } from '../actions/friendship_actions';

const friendshipsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case FRIEND:
      let followUser = newState[action.follow.requested_id];
      followUser.following = true;
      followUser.followId = action.follow.id;
      followUser.followerCount = followUser.followerCount + 1;
      return newState;
    case UNFRIEND:
      let unfollowUser = newState[action.follow.requested_id];
      unfollowUser.following = false;
      unfollowUser.followId = null;
      unfollowUser.followerCount = unfollowUser.followerCount - 1;
      return newState;  
    default:
      return oldState;
  }

}

export default friendshipsReducer;