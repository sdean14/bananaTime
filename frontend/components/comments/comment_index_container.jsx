import { connect } from 'react-redux';
import CommentIndex from './comment_index'
import { fetchComments, updateComment, deleteComment } from '../../actions/comment_actions'
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state) => {
  // console.log(state.comments, '222')
  let id  = state.posts.id 
  return ({
    currentUser: state.entities.users[state.session.id],
    comments: Object.values(state.comments).find(comment => comment.post_id = id),
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

// これいるか？