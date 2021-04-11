
import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_action';
import { createFriend, deleteFriend } from '../../actions/friendship_actions';
import ProfileForm from '../profiles/profile_show';

const mapStateToProps = ( state, ownProps ) => {
  // console.log(state.entities.users[ownProps.match.params.userId])
  return {
    currentUser: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: (userId) => dispatch(receiveCurrentUser(userId)),
    createFriend: ids => dispatch(createFriend(ids)),
    deleteFriend: followedId => dispatch(deleteFriend(followedId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);