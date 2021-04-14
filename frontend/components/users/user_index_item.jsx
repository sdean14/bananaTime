import React from 'react';
import { Link } from 'react-router-dom';


const UserIndexItem = ({ user }) => (
  <ul>
      <Link to={`/users/${user.id}/show`}><li className='index-each-user' >{user.username}</li></Link>
  </ul>
);

export default UserIndexItem;
