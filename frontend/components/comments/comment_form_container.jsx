import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { fetchPost, updatePost } from '../../actions/post_actions';
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => { 
  return ({
    currentUser: state.entities.users[state.session.id],
    post_id: ownProps.post_id
  })
}

const mDTP = (dispatch) => {
  return({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),

  })
}

export default connect(mSTP, mDTP)(CommentForm);