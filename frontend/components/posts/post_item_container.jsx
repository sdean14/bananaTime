import React from 'react';
import {connect} from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, deletePost} from '../../actions/post_actions';
import { receiveCurrentUser } from '../../actions/session_action';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  // let wallId = state.entities
  // console.log(state.entities.users)
  // const author = this.props.users[this.props.posts.author_id]
  // console.log(state.posts[16][author_id])
  // console.log(state.entities.users)
  return({
    currentUser: state.entities.users[state.session.id],
    // wallUser: state.entities.users[wallId],
    // author: state.entities.users[ownProps.post.author_id],
    posts: Object.values(state.posts),
    users: state.entities.users,
  })
}

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: currentUser => dispatch(fetchUser(currentUser)),  

})

export default connect(mSTP, mDTP)(PostIndex);