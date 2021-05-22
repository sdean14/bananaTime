import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';


const PostIndexItem = ({ author, post, deletePost, currentUser }) => (
  <li className='each-posts'>

    <Link className='post-name-icon' to={`/users/${post.author_id}/show`}>
      <div className='post-prof-icon'>{author && author.photoUrl ? <img src={author.photoUrl} alt={author.username} /> : <div className='post-default-icon'></div>}</div>
      <div className='author-name' >{author ? author.username : null}</div>
    </Link>

    <h2 className='body'>{post.body}</h2>
    {currentUser === author ? (
      <div className='button-edit-post'>
        <Link to={`/posts/${post.id}/edit`}><i className="far fa-edit"></i>Edit</Link>
        <button onClick={() => deletePost(post.id)}><i className="far fa-trash-alt"></i>Delete</button>
      </div>) : null}

    <div className='comment-container'>
      <CommentIndexContainer
        post_id={post.id}
      />
      <CommentFormContainer
        post_id={post.id}
      />
    </div>
  </li>
);

export default PostIndexItem;
