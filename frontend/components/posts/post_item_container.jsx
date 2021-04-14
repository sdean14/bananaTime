import React from 'react';
import {connect} from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, deletePost} from '../../actions/post_actions';
import { receiveCurrentUser } from '../../actions/session_action';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {

  return({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.posts),
    users: state.entities.users,
    // wallUser: state.entities.users[wallId],
    // author: state.entities.users[ownProps.post.author_id],
  })
}

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: currentUser => dispatch(fetchUser(currentUser)),  

})

export default connect(mSTP, mDTP)(PostIndex);