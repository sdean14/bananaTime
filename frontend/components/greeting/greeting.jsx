import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class Greeting extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.currentUser
  }
  componentDidMount(){
      if (!!this.state){
      this.props.fetchUser(this.props.currentUser.id).then(<Redirect to="/" />);
     } 
  }

  render(){
  
    const personalGreeting = () => (
      <hgroup className="header-group">
         <Link to="/" className="header-link">
          <h1 className='header-logo'>Tomobook</h1>
        </Link>
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <Link to={`/users/${this.props.currentUser.id}/show`}>user profile</Link>
        <button className="header-logout-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
    return(    
     this.props.currentUser ? personalGreeting() : <Redirect to="/login" />

    )
  }
};


export default Greeting;
