import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import {RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const friendshipsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      newState[action.friendship.id] = action.friendship;
      return newState;
    case REMOVE_FRIENDSHIP:
      delete newState[action.friendship.id];
      return newState;  
    default:
      return oldState;
  }

}

export default friendshipsReducer;