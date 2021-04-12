import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => dispatch => (
  ApiUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = postId => dispatch => (
  ApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  ApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
  ApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
  ApiUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
);