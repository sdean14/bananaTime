import React from 'react';
import {  Route,  Switch,  Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      birthday: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderSignup(){
    if(this.props.formType === 'signup'){

      return(
        <div>
          <label>Email: 
          <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
          </label>
            <br/>
          <label>Birthday: 
          <input type="date"
                value={this.state.birthday}
                onChange={this.update('birthday')}
                className="login-input"
              />
          </label>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='header-for-form'>
        <p className='splash-header'>Connect with friends and the world around you on Tomobook.</p>

      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          Please {this.props.formType} or <button>{this.props.navLink}</button>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            {this.renderSignup()}
            <br/>
            <button type="submit" className="session-submit" >{this.props.formType}</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SessionForm;
