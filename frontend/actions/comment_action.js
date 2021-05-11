import * as ApiUtil from '../util/comment_api.util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = () => dispatch => (
  ApiUtil.fetchComments()
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchComment = commentId => dispatch => (
  ApiUtil.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
  ApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = comment => dispatch => (
  ApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  ApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
);