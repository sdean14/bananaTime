import React from 'react';
import {Redirect} from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.state.redirect = null;
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props)
    this.props.action(this.state);
    this.setState({ redirect: '/'})
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    if(this.state.redirect){
      return <Redirect to={this.state.redirect}></Redirect>
    }
    return (
      <div className='new-post-form'>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.username}</h3>
          <label>
            <input
              type='text'
              value={this.state.body}
              onChange={this.update('body')}
              placeholder={'What\'s on your mind?'}
            />
          </label>
          
          <button className='button-post' type='submit' value={this.props.formType} >{this.props.formType}</button>
          
        </form>
      </div>
    );
  }
}

export default PostForm;
