import React from 'react';
import { Link } from 'react-router-dom';


const FriendIndexItem = ({ refetch, friend, profile, handlefriend}) => (
  <div className='per-friend-button'>   

    {(friend.followed_by_current_user) ? (
        <button className='friend-button' onClick={() =>handlefriend(friend)}>unfriend</button>
      ) : (
        <button className='friend-button' onClick={() =>handlefriend(friend)}>friend</button>
      )}

  </div>
);

export default FriendIndexItem;
