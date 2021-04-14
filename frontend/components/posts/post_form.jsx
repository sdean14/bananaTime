import React from 'react';
import { Redirect } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.state.redirect = null;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    if (this.props.formType === 'Update Post') {
      this.setState({ redirect: '/' })
    }
    this.setState({'body': ''})
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}></Redirect>
    }
    return (
      <div className='new-post-form'>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          {/* <h3>{this.props.users.username}</h3> */}
            <input
              type='text'
              value={this.state.body}
              onChange={this.update('body')}
              placeholder={'What\'s on your mind?'}
            />
          <br/>
          <button className='button-post' type='submit' value={this.props.formType} >Post</button>

        </form>
      </div>
    );
  }
}

export default PostForm;
