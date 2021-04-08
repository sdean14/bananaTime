import React from 'react';
import {  Route,  Switch,  Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const NoMatchPage = () => {
  return (
    <div className='no-match-container'>
      <h2>404 - This page isn't available</h2>
      <h3>The link you followed may be broken, or the page may have been removed.</h3>
     <img className='error-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/aild9CSpDBm.png" alt="404 error"/>
    </div>
  );
};

const App = () => (
  <div>
    <header className='im-header'>
      {/* <Link to="/" className="header-link">
        <h1 className='header-logo'>Tomobook</h1>
      </Link> */}
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <Route component={NoMatchPage} />
    </Switch>
  </div>
);

export default App;
