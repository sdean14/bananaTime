import React from 'react';
import { connect } from 'react-redux';
import{ fetchUser, fetchUsers } from '../../actions/user_actions'
import { createFriend, deleteFriend } from '../../actions/friendship_actions';
import FriendshipsIndex from './friends_index';

const mapStateToProps = (state) => {
  let usersArr = Object.values(state.entities.users);
  let currentUser = state.entities.users[state.session.id];
  // console.log(state.entities.users[state.session.id])
  return ({
     users: usersArr,
    currentUser: currentUser
  })
   
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: currentUser => dispatch(fetchUser(currentUser)),
    createFriend: id => dispatch(createFriend(id)),
    deleteFriend: followedId => dispatch(deleteFriend(followedId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipsIndex);