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

export const createFriend = (id) => dispatch => (
  ApiUtil.createFriend(id)
    .then(follow => dispatch( receiveFriendship(follow)))
);

export const deleteFriend = (id) => dispatch => (
  ApiUtil.deleteFriend(id)
    .then(follow => dispatch( removeFriendship(follow)))
);
