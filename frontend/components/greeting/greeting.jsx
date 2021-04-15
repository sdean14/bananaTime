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
        
        <div>
          <a href="https://github.com/sdean14/bananaTime"><i className='icon-img' className="fas fa-code-branch"></i></a>
        </div>

        <div>
            <a href="https://github.com/sdean14"><i className='icon-img' className="fab fa-github"></i></a>
        </div>

        <Link to={`/users/${this.props.currentUser.id}/show`}><h2>{this.props.currentUser.username}</h2></Link>

        <button className="header-logout-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
    return(    
     this.props.currentUser ? personalGreeting() : <Redirect to="/login" />

    )
  }
};


export default Greeting;
