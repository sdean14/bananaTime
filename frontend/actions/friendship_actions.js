import * as Apitil_user from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

export const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const removeFriendship = (friendships) => ({
  type: REMOVE_FRIENDSHIP,
  friendships
});

export const createFriend = (friendship) => dispatch => (
  ApiUtil.createFriend(friendship)
    .then(friendship => dispatch( receiveFriendship(friendship)))
);


export const deleteFriend = (friendship) => dispatch => (
  ApiUtil.deleteFriend(friendship)
    .then(friendship => dispatch( removeFriendship(friendship)))
);
