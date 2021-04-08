import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearSessionErrors } from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({  
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login"><button className="button-create" >Log in instead</button></Link>
  })


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processDemo: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
