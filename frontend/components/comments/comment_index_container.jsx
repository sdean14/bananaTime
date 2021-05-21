import { connect } from 'react-redux';
import CommentIndex from './comment_index'
import { fetchComments, updateComment, deleteComment } from '../../actions/comment_actions'
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
 console.log(Object.values(state.comments))
  let id  = ownProps.post_id //change this to ownProps.post_id
  return ({
    post_id: ownProps.post_id,
    currentUser: state.entities.users[state.session.id],
    comments: Object.values(state.comments).filter(comment => comment.post_id === id),
    users: state.entities.users,
  })
}

const mDTP = (dispatch) => {
  return({
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  })
}

export default connect(mSTP, mDTP)(CommentIndex);

