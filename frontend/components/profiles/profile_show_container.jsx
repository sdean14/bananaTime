import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser, fetchProfile } from '../../actions/session_action';
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
    fetchProfile: currentUser => dispatch(fetchProfile(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);