import React from 'react';
import {connect} from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, deletePost} from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
  let wallId = state.entities
  console.log(wallId)
  return({
    // currentUser: state.entities.users[state.session.currentUser],
    // wallUser: state.entities.users[wallId],
    // author: state.entities.users[ownProps.post.author_id],
    posts: Object.values(state.entities.posts)
    })
}

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex);