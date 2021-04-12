import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = props => (
  <li className='each-posts'>
    <Link to={`{/users/${props.post.auther_id}/show}`}>{}</Link>
    <h2>{props.post.body}</h2>
    <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
    <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
  </li>
);

export default PostIndexItem;
