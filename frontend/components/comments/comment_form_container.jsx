import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { fetchPost, updatePost } from '../../actions/post_actions';
// do i need fetchpost? 
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => {
  // console.log(state, 'oooooo')
  return ({
    currentUser: state.entities.users[state.session.id],
    // comments: state.comments,
    comment: {
      body: '',
      auther: state.entities.users[state.session.id],
      post_id: null,
      // post_id is working??
    }
  })
}

const mDTP = (dispatch) => {
  return({
    createComment: (comment) => dispatch(createComment(comment)),
    // fetchPost: postId => dispatch(fetchPost(postId)),

  })
}

export default connect(mSTP, mDTP)(CommentForm);