import { connect } from 'react-redux';
import React from 'react';
import ProfileForm from './profile_show';
import { receiveCurrentUser } from '../../actions/session_action';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { createFriend, deleteFriend } from '../../actions/friendship_actions';
import {fetchPosts, deletePost} from '../../actions/post_actions'
// import { Link } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
  // console.log(state)
  let currentUser = state.entities.users[state.session.id]
  let arrUsers = Object.values(state.entities.users)
  return {
    profile: state.entities.users[ownProps.match.params.userId],
    currentUser: currentUser,
    users : arrUsers,
    posts: Object.values(state.posts),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFriend: id => dispatch(createFriend(id)),
    deleteFriend: followedId => dispatch(deleteFriend(followedId)),
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    fetchUser: currentUser => dispatch(fetchUser(currentUser)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);