import React from 'react';
import { Link } from 'react-router-dom';
import FriendButton from './friendship_status'
//make list of friends you follow
class FriendshipsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.fetched = false;
    }

    componentDidMount() {
      this.props.fetchUsers();
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

    render(){
      if (!this.props.users || this.props.users.length <= 1) {
        return null
    };
      let friendsYouFollow = [];
      // for (let i = 0; i < this.props.users.length; i++) {
      //   if(this.props.users[i].followed_by_current_user === true && this.props.users[i].id !== this.props.currentUser.id){
      //     friendsYouFollow.push(this.props.users[i])
      //   }        
      // };
      this.props.users.map((user) => {
        if (!user.followed_by_current_user) {
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
                  <li key={idx}>
                   
                   <Link to={`/users/${friend.id}/show`}>{friend.username}</Link>
                   <FriendButton 
                   refetch={this.refetch.bind(this)}
                   friend={friend}
                   currentUser={this.props.currentUser}
                   createFriend={this.props.createFriend}
                   deleteFriend={this.props.deleteFriend} />
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