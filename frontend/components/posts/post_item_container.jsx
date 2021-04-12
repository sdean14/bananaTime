import React from 'react';
import {connect} from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, deletePost} from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
  // let wallId = state.entities
  console.log(state.entities.users)
  return({
    currentUser: state.entities.users[state.session.id],
    // wallUser: state.entities.users[wallId],
    // author: state.entities.users[ownProps.post.author_id],
    posts: Object.values(state.posts)
  })
}

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex);