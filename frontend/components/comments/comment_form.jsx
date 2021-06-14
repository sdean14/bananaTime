import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      commenter_id: this.props.currentUser.id,
      post_id: this.props.post_id,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ 'body': '' })
  }

  keyPress(e) {
    if (e.which === 13 && e.shiftKey) {
      
    } else if (e.which === 13) {
      this.handleSubmit(e)
    }
  }

  render() {

    return (
      <div className='comment-form-container'>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            placeholder={'Write a comment...'}
            post_id={this.props.post_id}

            onKeyPress={(e) => this.keyPress(e)} />
        </form>

      </div>
    )
  }
}

export default CommentForm;