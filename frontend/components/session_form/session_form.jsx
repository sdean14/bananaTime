import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      birthday: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    this.props.processDemo({
      email: 'demouser@tomobook.com',
      password: '123456',
    });
  }
  componentDidMount() {
    if (this.props.errors.length) { this.props.clearSessionErrors() }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderSignup() {
    if (this.props.formType === 'Sign Up') {

      return (
        <div className="login-form sign-up">
          <input type="text"
            placeholder='username'
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            required />
          <br />
          <label>Birthday:
          <input type="date"
              value={this.state.birthday}
              onChange={this.update('birthday')}
              className="login-input"
              required />
          </label>
        </div>
      )
    }
  }

  render() {
    return (
      <div>

      <div className='header-for-form'>
        <div className='splash-header'>
          <h1 className='splash-logo'>Tomobook</h1>
          <h2 className='splash-title'>Connect with friends and the world around you on Tomobook.</h2>
        </div>


        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                required />
              <br />
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                required />
              {this.renderSignup()}
              <br />
              <button type="submit" className="session-submit" >{this.props.formType}</button>
            </div>
            <button className="demo-button" onClick={this.handleDemo}>Demo</button>
          </form>
          <div className='signup-border'></div>
          {this.props.navLink}
        </div>
      </div>
      <footer className='footer-copyright'>
        <p> ©Satomi Dean  2021</p>
        <p ></p>
        <img className='githubcat' src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/GITHUB-512.png" alt=""/>
        <a href="https://github.com/sdean14">GitHub</a>
      </footer>
    </div>
    );
  }
}

export default SessionForm;
