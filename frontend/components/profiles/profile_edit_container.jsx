import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_action';
import { updateProfile } from '../../actions/user_actions'
import ProfileEditForm from './profile_edit_form'
// import { Link } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
  console.log(state.entities.users[ownProps.match.params.userId])
  return {
    profile: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    updateProfile: currentUser => dispatch(updateProfile(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);
