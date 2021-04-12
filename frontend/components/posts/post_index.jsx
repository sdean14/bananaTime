import React from "react";
import { connect } from "react-redux";
import PostIndexItem from './post_index_item'
import PostForm from './post_form'

class PostIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.state
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){

    return(
      <div>
        <div className='wall'>
          <div className='mid-column'>

          <PostForm/>
          <div className='post'>
            <ul>
              { this.props.posts.map(post => (
                <PostIndexItem
                post={post}
                deletePost={deletePost}
                key={post.id} />
                ))}
              mmmm...feed ?
            </ul>
          </div>
        </div>
        </div>
      </div>
    )
  }

}

export default PostIndex;