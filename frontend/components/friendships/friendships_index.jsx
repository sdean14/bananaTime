import React from 'react';
import { Link } from 'react-router-dom';
import FriendButton from './friend_button'
 import FriendIndexItem from './friend_index_item'
//make list of friends you follow
class FriendshipsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.fetched = false;

        // console.log(this.props)
        this.handlefriend = this.handlefriend.bind(this)

      }
      
      componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchUser(this.props.currentUser.id);

      }
      componentDidUpdate(prevProps) {
        if (!this.fetched) {
          this.props.fetchUsers();
          this.fetched = true;
        }
      }
      refetch() {
        this.fetched = false;
      }

      //added
      handlefriend(){
        // e.preventDefault()
        if (this.props.friend.followed_by_current_user){
          this.refetch();
          this.props.deleteFriend(this.props.friend.id).then(() => {
            this.setState({
              followed: false
            });
          });
        } else {
          this.refetch();
          this.props.createFriend(this.props.friend.id).then(() => {
            this.setState({
              followed: true
            });
          });
        }
      }
      //
      
    render(){

      if (!this.props.users || this.props.users.length <= 1) {
          return null
      };
      let friendsYouFollow = [];
      this.props.users.map((user) => {
        if (user.followed_by_current_user && user !== this.props.currentUser) {
          friendsYouFollow.push(user);
        }
      });
      return(
        <div>
          <div className='list-of-friends-you-follow'>
            <h2 className='friends'>Friends List</h2>
            <ul>
              { friendsYouFollow.map((friend, idx) => {
                return(
                  <li className='per-friend' key={idx}>
                   
                   <Link to={`/users/${friend.id}/show`}>{friend.username}</Link>
         
                  <FriendIndexItem
                   refetch={this.refetch.bind(this)}
                   friend={friend}
                   currentUser={this.props.currentUser}
                   createFriend={this.props.createFriend}
                   deleteFriend={this.props.deleteFriend}
                   handlefriend={this.handlefriend} />  
                 </li> 
                   );
                })}
            </ul>

          </div>
        </div>
      )
    }

  }

  export default FriendshipsIndex;