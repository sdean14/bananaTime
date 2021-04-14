import React from "react";
import { Route, Link } from 'react-router-dom';
import PostIndexItem from './post_index_item'
import PostCreateFormContainer from './post_create_form_container'
import FriendshipContainer from '../friendships/friendships_container'
class PostIndex extends React.Component{
  constructor(props){
    super(props)
    
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }
  
  render(){
 
    return(
      <div>
        <div className='wall'>
          <div className='mid-column'>

          <PostCreateFormContainer/>
          <div className='post'>
            <ul>
              { this.props.posts.map(post => (
                <PostIndexItem
                users={this.props.users}
                author={this.props.users[post.author_id]}
                post={post}
                deletePost={this.props.deletePost}
                key={post.id} />
                ))}
            
            </ul>
          </div>
        </div>
        <div className='left-sidebar-colum'>
          {/* <h1>{this.props.currentUser.username}</h1> */}
          {/* {console.log(this.props.currentUser.username)} */}
          <div><Link to='/following'>Friends</Link></div>
          <div>GitHub</div>
          <div>Satomi Dean</div>
        </div>

        </div>
      </div>
    )
  }

}

export default PostIndex;