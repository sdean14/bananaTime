import React from 'react'
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props, 'iiii')
  }

  componentDidMount() {
    this.props.fetchComments()
    this.props.fetchUsers()
  }

  renderComment() {
    if (this.props.comments) {
      
      return (
        <ul>
          {
            this.props.comments.map((comment, idx) => (
              <li  key={idx}>
  
                {comment.body}
                <Link className='post-name-icon' to={`/users/${comment.commenter_id}/show`}>
                  <div  className='post-prof-icon'>{this.props.users[comment.commenter_id].photoUrl ? <img src={this.props.users[comment.commenter_id].photoUrl} alt={comment.commenter_id} /> : <div className='post-default-icon'></div>}</div>
                  <div className='author-name'>{this.props.users[comment.commenter_id] ? this.props.users[comment.commenter_id].username : null}</div>
                </Link>
              </li>
            ))
          }
        </ul>
      )
    }
  }
  render() {

    return (
      <div>
        { this.renderComment() }

      </div>
    )
  }
}

export default CommentIndex;