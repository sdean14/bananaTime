import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container'

// import comment index vontainer and create comment form


const PostIndexItem = ({ author, post, deletePost, currentUser }) => (
  // console.log(user)
  <li className='each-posts'>

    <Link className='post-name-icon' to={`/users/${post.author_id}/show`}>
      <div className='post-prof-icon'>{author && author.photoUrl ? <img src={author.photoUrl} alt={author.username} /> : <div className='post-default-icon'></div>}</div>
      <div className='author-name' >{author ? author.username : null}</div>
    </Link>

    <h2 className='body'>{post.body}</h2>
    {currentUser === author ? (
      <div className='button-edit-post'>
        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>) : null}
      
  
      {/* here i render comment index
      and create comment form each takes post as arg */}
      <CommentFormContainer 
        post_id={post.id}
      />
  </li>
);

export default PostIndexItem;
