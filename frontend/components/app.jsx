import React from 'react';
import {  Route,  Switch,  Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileEditContainer from './profiles/profile_edit_container';
import ProfileShowContainer from './profiles/profile_show_container';
import PostItemContainer from './posts/post_item_container';
import PostEditFormContainer from './posts/post_edit_form_container';
import PostFormContainer from './posts/post_create_form_container'
import FriendshipContainer from './friendships/friendships_container';
import UserIndexContainer from './users/user-index-container';

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
      <GreetingContainer />
    </header>
    <Switch>

      <ProtectedRoute exact path="/" component={PostItemContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <Route exact path="/users/:userId/edit" component={ProfileEditContainer} />
      <Route exact path="/users/:userId/show" component={ProfileShowContainer} />
      <Route exact path="/posts/:postId/edit" component={PostEditFormContainer} />
      <Route exact path="/posts/new" component={PostFormContainer} />      
      <Route exact path="/following" component={FriendshipContainer} />
      <Route exact path="/users/index" component={UserIndexContainer} />

      <Route component={NoMatchPage} />
    </Switch>
  </div>
);

export default App;
