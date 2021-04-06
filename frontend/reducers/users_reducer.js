import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_action';

const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser
            return newState;
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
};

export default usersReducer;