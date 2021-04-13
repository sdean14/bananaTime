import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions'
import { createFriend, deleteFriend } from '../../actions/friendship_actions';
import FriendshipsIndex from './friends_index';

const mapStateToProps = ({entities, session}) => {
  
  let usersArr = Object.values(entities.users);
  let currentUser = session.currentUser;
  return {
    users: usersArr,
    currentUser: currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    createFriend: id => dispatch(createFriend(id)),
    deleteFriend: followedId => dispatch(deleteFriend(followedId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipsIndex);