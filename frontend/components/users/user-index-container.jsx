import React from 'react';
import {connect} from 'react-redux';
import UsertIndex from './user-index';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mSTP = (state) => {

  return({
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.users),
  })
}

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: currentUser => dispatch(fetchUser(currentUser)),  
})

export default connect(mSTP, mDTP)(UsertIndex);