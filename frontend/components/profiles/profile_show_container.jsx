import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_action';
import { fetchUser } from '../../actions/user_actions'
import ProfileForm from './profile_show'
// import { Link } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
  // console.log(state.entities.users[ownProps.match.params.userId])
  return {
    profile: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    fetchUser: currentUser => dispatch(fetchUser(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);