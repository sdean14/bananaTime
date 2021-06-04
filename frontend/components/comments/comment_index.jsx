import React from 'react'
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments()
    this.props.fetchUsers()
  }

  renderComment() {
    if (this.props.comments) {

      return (
        <ul>
          {this.props.comments.map((comment, idx) => (
            <li className='each-comment' key={idx}>

              <Link to={`/users/${comment.commenter_id}/show`}>
                <div className='post-prof-icon'>{this.props.users[comment.commenter_id].photoUrl ? <img src={this.props.users[comment.commenter_id].photoUrl} alt={comment.commenter_id} /> : <div className='post-default-icon'></div>}</div>
              </Link>

              <div className='comment-name-text'>
                <Link className='name' to={`/users/${comment.commenter_id}/show`}>
                  <p>{this.props.users[comment.commenter_id] ? this.props.users[comment.commenter_id].username : null}</p></Link>
                <p>{comment.body}</p>
              </div>
              {comment.commenter_id === this.props.currentUser.id ?
                <i className="far fa-trash-alt" onClick={() => this.props.deleteComment(comment.id)}></i> : null}

            </li>
          ))}
        </ul>
      )
    }
  }
  render() {

    return (
      <div>
        { this.renderComment()}
      </div>
    )
  }
}

export default CommentIndex;