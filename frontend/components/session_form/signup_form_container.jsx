import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({  
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Log in instead</Link>
  })


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
