import * as ApiUtil from '../util/friendship_api_util';

export const FRIEND = 'FRIEND';
export const UNFRIEND = 'UNFRIEND';

export const receiveFriendship = (follow) => ({
  type: FRIEND,
  follow
});

export const removeFriendship = (follow) => ({
  type: UNFRIEND,
  follow
});

export const createFriend = (ids) => dispatch => (
  ApiUtil.createFriend(ids)
    .then(follow => dispatch( receiveFriendship(follow)))
);


export const deleteFriend = (followId) => dispatch => (
  ApiUtil.deleteFriend(followId)
    .then(follow => dispatch( removeFriendship(follow)))
);
