import {combineReducers} from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';
import friendships from './friendship_reducers'
const entitiesReducer = combineReducers({
    users,
    posts,
    friendships,
});

export default entitiesReducer;