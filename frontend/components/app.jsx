import React from 'react';
import {  Route,  Switch,  Link} from 'react-router-dom';
// import GreetingContainer from './greeting/greeting_container'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Tomo Book</h1>
      </Link>
      {/* <GreetingContainer /> */}
    </header>
    <Switch>
      {/* <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />  */}
    </Switch>
  </div>
);

export default App;
