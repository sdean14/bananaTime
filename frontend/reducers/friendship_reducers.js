import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import {FRIEND, UNFRIEND } from '../actions/friendship_actions';
import { merge } from 'lodash';

const friendshipsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case FRIEND:
      return merge({}, oldState, {
        [action.follow.id]: action.follow
    });
    case UNFRIEND:
      let newState = merge({}, oldState);
      delete newState[action.follow.id];
      return newState;;  
    default:
      return oldState;
  }

}

export default friendshipsReducer;