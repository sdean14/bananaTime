import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUsers = () => dispatch => (
  PostApiUtil.fetchUsers()
    .then(users => dispatch( receiveUsers(users)))
);

export const fetchUser = (userId) => dispatch => (
  ApiUtil.fetchUser(userId)
    .then(user => dispatch( receiveUser(user)))
);

  //profile
  export const updateProfile = user => dispatch => (
    ApiUtil_user.updateProfile(user)
      .then(user => dispatch(receiveCurrentUser(user)))
  );
  
  // export const fetchUser = userId => dispatch => (
  //   Apitil_user.fetchUser(userId)
  //     .then(user => dispatch(receiveCurrentUser(user)))
  // );
  