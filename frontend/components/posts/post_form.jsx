import React from 'react';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    
    return (
      <div className='new-post-form'>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.username}</h3>
          <label>
            <input
              type='text'
              // value={this.state.entities.posts.body}
              onChange={this.update('body')}
              placeholder={'What\'s on your mind?'}
            />
          </label>
          <button className='button-post' type='submit' value={this.props.formType} >Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
