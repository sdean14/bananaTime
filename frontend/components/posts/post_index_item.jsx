import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';


const PostIndexItem = ({ author, post, deletePost, currentUser }) => (
  <li className='each-posts'>
{/* {console.log(post.created_at.slice(0,10))} */}
    <Link className='post-name-icon' to={`/users/${post.author_id}/show`}>
      <div className='post-prof-icon'>{author && author.photoUrl ? <img src={author.photoUrl} alt={author.username} /> : <div className='post-default-icon'></div>}</div>
     <div>
      <div className='author-name' >{author ? author.username : null}</div>
      <div className='posted-at'>{post.created_at.slice(0,10)}</div>
     </div>
    </Link>

    <h2 className='body'>{post.body}</h2>
    {currentUser === author ? (
      <div className='button-edit-post'>
        <Link className='edt-btn' to={`/posts/${post.id}/edit`}><i className="far fa-edit"></i>Edit</Link>
        <button onClick={() => deletePost(post.id)}><i className="far fa-trash-alt"></i>Delete</button>
      </div>) : <div className='button-edit-post'><a><i className="far fa-comment-alt"></i>Comment</a></div>}

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
