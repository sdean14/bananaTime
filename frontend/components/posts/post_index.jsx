import React from "react";
import { Route, Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import PostCreateFormContainer from './post_create_form_container';
import FriendshipContainer from '../friendships/friendships_container';
import UserIndexContainer from '../users/user-index-container';


class PostIndex extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    this.props.fetchUser(this.props.currentUser.id);
  }
  
  render(){
    // console.log(this.props.currentUser.username) 
 
    return(
      <div>
        <div className='wall'>

          <div className='right-sidebar-column'>
            <div className='user-index'>
              <h2>User List</h2>
              <UserIndexContainer/>              
            </div>
          </div>

          <div className='mid-column'>
            <PostCreateFormContainer/>
            <div className='post'>
              <ul>
                { this.props.posts.map((post, idx) => (
                  <PostIndexItem
                  users={this.props.users}
                  currentUser={this.props.currentUser}
                  author={this.props.users[post.author_id]}
                  post={post}
                  deletePost={this.props.deletePost}
                  key={idx} />
                  ))}
              
              </ul>
            </div>
          </div>

          <div className='left-sidebar-colum'>
            <div className='list'>

              <div><Link to={`/users/${this.props.currentUser.id}/show`}>{this.props.currentUser.username}'s Profile</Link></div>
            </div>
            <div className='list'>
              <div><i className='icon-img' className="fas fa-user-friends"></i></div>
              <div><Link to='/following'>Friends</Link></div>
            </div>
            <div className='list'>
              <div><i className='icon-img' className="fab fa-github"></i></div>
              <div><a href="https://github.com/sdean14">GitHub</a></div>
            </div>
            <div className='list'>
              <div><i className='icon-img' className="fas fa-code-branch"></i></div>
              <div><a href="https://github.com/sdean14/bananaTime">Tomobook</a></div>
            </div>
            <div className='list'>
              <div><i className='icon-img' className="fas fa-portrait"></i></div>
              <div>Satomi Dean</div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default PostIndex;