import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { fetchPost, updatePost } from '../../actions/post_actions';
// do i need fetchpost? 
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => {
  // console.log(state, '11111')
  // console.log(ownProps.post_id,'0222')
  return ({
    currentUser: state.entities.users[state.session.id],
    post_id: ownProps.post_id
  })
}

const mDTP = (dispatch) => {
  return({
    createComment: (comment) => dispatch(createComment(comment)),
  })
}

export default connect(mSTP, mDTP)(CommentForm);