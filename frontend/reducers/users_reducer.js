import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser
            return newState;
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USERS:
            return Object.assign({}, oldState, action.users)
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState;
        default:
            return oldState;
    }
};

export default usersReducer;