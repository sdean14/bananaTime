import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ author, post, deletePost}) => (
  <li className='each-posts'>
    {/* {console.log(author ? author.id : null)} */}
    
    <Link className='author-name' to={`/users/${post.author_id}/show`}>{author ? author.username : null}</Link>
    <h2>{post.body}</h2>
    <div className='button-edit-post'>
      <Link  to={`/posts/${post.id}/edit`}>Edit</Link>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>

  </li>
);

export default PostIndexItem;
