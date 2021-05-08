import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_action';
import { updateProfile, fetchUser } from '../../actions/user_actions'
import ProfileEditForm from './profile_edit_form'

const mapStateToProps = ( state, ownProps ) => {
  return {
    profile: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateProfile: (currentUser, id) => dispatch(updateProfile(currentUser, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);
